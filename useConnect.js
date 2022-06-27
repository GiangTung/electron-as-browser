const { ipcRenderer } = require('electron');
const { useEffect, useState } = require('react');
const fs = require("fs");
const storage = require('electron-json-storage');

storage.setDataPath('d:\\');
storage.get('task', function(error, data) {
  if (error) throw error;
  tasks_initial = data;
  // alert(JSON.stringify(tasks_initial));
}); 


  // Do something with the file
// Used in Renderer process

const noop = () => {};

/**
 * A custom hook to create ipc connection between BrowserView and ControlView
 *
 * @param {object} options
 * @param {function} options.onTabsUpdate - trigger after tabs updated(title, favicon, loading etc.)
 * @param {function} options.onTabActive - trigger after active tab changed
 *  * @param {function} options.changeTask - trigger after active tab changed
   * @param {function} options.setleftTabs - trigger after active tab change
   *  * @param {function} options.addLefttabs - trigger after active tab change
   * @param {function} options.getTasks - trigger after active tab change  
   *  * @param {function} options.countReducer - trigger after active tab change
 */
module.exports = function useConnect(options = {}) {
 
  
  const tasks_initial = [
    {
      title:"Moana Wells",
      status : "Guitar jams w/ Mark at McCabe’s",
      desc:"Hey, are we still meeting at the regular time for lessons Next week? Thanks!",
      time : "2:40 PM",
      icon : "img/task_list/jira.png",
      href: 'http://www.google.com'
    },
    {
      title:"Youtube",
      status : "Guitar jams w/ Mark at McCabe’s",
      desc:"Hey, are we still meeting at the regular time for lessons Next week? Thanks!",
      time : "1:50 PM",
      icon : "img/task_list/link.png",
      href: 'http://www.youtube.com'
    },{
      title:"Mark Mills",
      status : "Guitar jams w/ Mark at McCabe’s",
      desc:"Hey, are we still meeting at the regular time for lessons Next week? Thanks!",
      time : "1:20 PM",
      icon : "img/task_list/jira.png",
      href: 'http://www.google.com'
    },{
      title:"Jira | DELT 181",
      status : "Guitar jams w/ Mark at McCabe’s",
      desc:"Hey, are we still meeting at the regular time for lessons Next week? Thanks!",
      time : "12:40 PM",
      icon : "img/task_list/jira.png",
      href: 'http://www.google.com'
    },{
      title:"Discord | Honeydu",
      status : "From: Shan Shah",
      desc:"@devin what are the name servers for Digital Ocean?",
      time : "11:40 PM",
      icon : "img/task_list/discord.png",
      href: 'http://www.google.com'
    },{
      title:"Github | Honeydu",
      status : "Repo: Mobile      Commit: 6weFwer",
      desc:"@devin should we change this method to be async?",
      time : "1:50 AM",
      icon : "img/task_list/github.png",
      href: 'http://www.github.com'
    }
  ];
  const leftTabs_initial = [
    { icon: "fruit", func: "none" },
    { icon: "brain", func: "none" },
    { icon: "face", func: "none" },
    { icon: "star", func: "none" },
  ];
  const addLefttab = (v) => {
    let temp = leftTabs;
    temp.push(v);
    setleftTabs(temp);
    // alert(JSON.stringify(leftTabs));
  }
  const get_tasks = () => {
    return tasks;
  }
  const change_Task = (v) => {

    // alert(JSON.stringify(tasks_initial));
    let new_task = v;
          let origin_tasks = tasks;
          let is =  origin_tasks.find(x=>x.title == new_task.title);
          // if(is == null || is == 0 || is===undefined)
                origin_tasks.push(v)
          setTasks(origin_tasks);
          storage.set('task', tasks);
          // alert(JSON.stringify(tasks));
  }
  // const [data,setData] = useState(0);
  var aa = {};

 
  // fs.open('1.txt', 'w+');
  // fs.read('1.txt',data);
  const countReducers = (state, event) => {   
    var tmp_task;
    storage.get('task', function(error, data) {
      // alert("data:"+JSON.stringify(data));
      if (error) throw error;
      aa = data;
      setTasks(data);
      // alert("tasks:"+JSON.stringify(data));
      // console.log(data);
   
    switch (event.type) {
      case 'INC':
        // alert("aa:"+JSON.stringify(aa));
        return {
          ...state,
          tasks:aa
        };
      default:
        return state;
    }
  });
  };

  const {countReducer = countReducers, onTabsUpdate = noop, onTabActive = noop, changeTask = change_Task, addLeftTabs = addLefttab ,getTasks = get_tasks} = options;
  const [tabs, setTabs] = useState({});
  const [tabIDs, setTabIDs] = useState([]);
  const [activeID, setActiveID] = useState(null);
  const [tasks,setTasks] = useState(tasks_initial);
  const [leftTabs,setleftTabs] = useState(leftTabs_initial);
 


  // const changeTask = (v) => {
  //   let new_task = v;
  //         let origin_tasks = tasks;
  //         let is =  origin_tasks.find(x=>x.title == new_task.title);
  //         // if(is == null || is == 0 || is===undefined)
  //               origin_tasks.push(new_task)
  //               alert('----------------');
  //         setTasks(origin_tasks);
  //         alert(JSON.stringify(tasks));
  //         // localStorage.setItem('task',tasks);
  // }
  const channels = [
    [
      'tabs-update',
      (e, v) => {
        setTabIDs(v.tabs);
        setTabs(v.confs);
        onTabsUpdate(v);
      }
    ],
    [
      'active-update',
      (e, v) => {
        setActiveID(v);
        const activeTab = tabs[v] || {};
        onTabActive(activeTab);
      }
    ]
  ];

  useEffect(() => {
    ipcRenderer.send('control-ready');

    channels.forEach(([name, listener]) => ipcRenderer.on(name, listener));

    return () => {
      channels.forEach(([name, listener]) => ipcRenderer.removeListener(name, listener));
    };
  }, []);
 

  return { tabIDs, tabs, activeID, tasks, changeTask ,addLeftTabs,leftTabs,getTasks, setleftTabs,countReducer};
};
