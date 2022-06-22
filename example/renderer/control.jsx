import React, { useEffect, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import cx from 'classnames';
import useConnect from '../../useConnect';
import * as action from '../../control';

const IconLoading = () => (
  <svg
    viewBox="0 0 1024 1024"
    focusable="false"
    className="anticon-spin"
    data-icon="loading"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
  </svg>
);

const IconClose = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="close"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
  </svg>
);

const IconPlus = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="plus"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
    <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
  </svg>
);

const IconReload = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="reload"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" />
  </svg>
);

const IconLeft = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="left"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
  </svg>
);

const IconRight = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="right"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" />
  </svg>
);

function SiteItem(props) {
  const id = props.id;
  const value = props.value;
  const href = props.href;
  const icon = props.icon;
  const activeID = props.activeID;
  const setActiveSiteID = props.setActiveSiteID;
  const setActiveSite = (id) => {
    // alert(href);
    setActiveSiteID(id);
    action.sendChangeURL(href);
    if (!/^.*?:\/\//.test(href)) {
      href = `http://${href}`;
    }
    action.sendEnterURL(href);
    
  }
  return (
    <li>
      <div
        className={cx('site-item', { active: id === activeID })}
        onClick={() => setActiveSite(id)}
      >
        <div className='site-item-img'>
          <img className='container-img' src={icon}></img>
        </div>
        <div className='center'><p>{value}</p></div>
      </div>
    </li>
  );
}

function SiteList(props) {

  const list = props.list;
  const activeID = props.activeID;
  const setActiveSiteID = props.setActiveSiteID;
  // alert('dddddddd');
  // console.log(list);
  return (
    <ul className='site-ul'>
      {
        list.map((item, id) =>
          <SiteItem
            key={id}
            icon={item.icon}
            value={item.value}
            href = {item.href}
            id = {id}
            activeID={activeID}
            setActiveSiteID = {setActiveSiteID}
            
              />
        )
      }
    </ul>
  );
}

function TaskItem(props) {

  const id = props.id;
  const href = props.href;
  const icon = props.icon;
  const title = props.title;
  const status = props.status;
  const desc = props.desc;
  const time = props.time;
  const activeID = props.activeID;
  const setActiveTaskID = props.setActiveTaskID;
  const setActiveTask = id => {
    setActiveTaskID(id);
    action.sendChangeURL(href);
    if (!/^.*?:\/\//.test(href)) {
      href = `http://${href}`;
    }
    action.sendEnterURL(href);
  }

  return (
    <li>
      <div
        className="task-item"
        onClick={() => setActiveTask(id)}
        
      >
        <div className={cx('task-active-mark', { active: id === activeID })}></div>
        <div className='task-item-body'>
          <div className='task-item-top'>
            <div className={cx('task-item-icon', icon)}>
              <img className='container-img' src={icon}></img>
            </div>
            <div className='task-item-title'><p className='line-normal'>{title}</p></div>
            <div className='task-item-time'>{time}</div>
          </div>
          <div className='task-item-status center'><p>{status}</p></div>
          <div className='task-item-desc'>{desc}</div>
        </div>
      </div>
    </li>
  );
}

function TaskList(props) {
  const list = props.list;
  const activeID = props.activeID;
  const setActiveTaskID = props.setActiveTaskID;

  return (
    <ul className='task-ul'>
      {
        list.map((item, id) =>
          <TaskItem
            key={id}
            id = {id}
            icon={item.icon}
            title={item.title}
            status={item.status}
            desc={item.desc}
            time={item.time}
            href = {item.href}
            activeID={activeID}
            setActiveTaskID = {setActiveTaskID}
          />
        )
      }
    </ul>
  );
}
let show_Site = undefined;
function Control() {
  const sites_initial = [
    {value : "Gmail | devin@honeydu.io", icon : "img/site_list/g-Mail.png",href : "http://www.mail.google.com"},
    {value : "Github | Honeydu | Mobile", icon : "img/site_list/github.png",href : "http://www.github.com"},
    {value : "brew install chrome - Google", icon : "img/site_list/google.png", href : "http://www.google.com"},
    {value : "Youtube", icon : "img/site_list/youtube.png", href : "http:\\youtube.com"},
    {value : "Implement <hr> into app...", icon : "img/site_list/google.png", href : "http://www.google.com"}
  ];
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
  const task_type = {
    title:"Jira | DELT 181",
      status : "Guitar jams w/ Mark at McCabe’s",
      desc:"Hey, are we still meeting at the regular time for lessons Next week? Thanks!",
      time : "12:40 PM",
      icon : "img/task_list/jira.png",
      href: 'http:\\www.google.com'
  }
  const { tabs, tabIDs, activeID } = useConnect();
  const [ activeSiteID, setActiveSiteID ] = useState(0);
  const [ activeTaskID, setActiveTaskID ] = useState(0);
  const [ activeLeftID, setActiveLeftID ] = useState(0);
  const [ tempID, setTempID ] = useState(0);
  const [sites,setSites] = useState(sites_initial);
  const [tasks,setTasks] = useState(tasks_initial);
  const site_type = {
    value:"http://www.google.com",
    icon:"http://www.google\favicon.ico",
    href:"http://www.google.com"
  };
  console.log(tabs);
  const { url, canGoForward, canGoBack, isLoading,favicon,href,title } = tabs[activeID] || {};
  const [current_Url, setCurrent_Url] = useState(site_type);
  const onUrlChange = e => {
    // alert('url changed!');
    // Sync to tab config
    const v = e.target.value;
    // var cur_site = {
    // value : v,
    // icon : "df"
    //     }
    // console.log(v);
    // console.log(cur_site);
    
    action.sendChangeURL(v);
    // setCurrent_Url(cur_site);
  };
  const onPressEnter = e => {
    if (e.keyCode !== 13) return;
    const v = e.target.value.trim();
    if (!v) return;

    let href = v;
    if (!/^.*?:\/\//.test(v)) {
      href = `http://${v}`;
    }
    action.sendEnterURL(href);
  };
  const changeTab = (id) => {
    // url = new_TabUrl;
    // alert(url);
    // action.sendReload();
    // action.sendChangeURL(new_TabUrl);
    // action.sendEnterURL(new_TabUrl);
  }
  const close = (e, id) => {
    e.stopPropagation();
    action.sendCloseTab(id);
  };
 
  const switchTab = value => {
    // action.sendSwitchTab(sites[id].id);
    // console.log(value);
    // alert(value);
    // action.sendChangeURL(value);
    // action.sendEnterURL(value);
  };
  
  
  const addHoneydu = (title,url,favicon) => {
    // alert('click the add btn');
    // alert(url);
    // sites_initial.push(current_Url);
    let new_task = {
      title:title,
      status:url,
      value:url,
      href : url,
      icon:favicon
    };
    let origin_tasks = tasks;
    let is =  origin_tasks.find(v=>v.href == new_task.href);
    if(is == null || is == 0 || is===undefined)
          origin_tasks.push(new_task)
    setTasks(origin_tasks);
    action.sendReload()
    // console.log(task);
    // console.log(sites);
    
  } 
  

  
  const leftTabs = [
    {icon : "fruit", func : "none"},
    {icon : "brain", func : "none"},
    {icon : "face", func : "none"},
    {icon : "star", func : "none"}
  ];

  const setLeftID = id => {
    console.log("setLeftID", id);
    setTempID(id);
    setActiveLeftID(id);
  };
  const createNewTab = () => {
    action.sendNewTab();
  }
  const goback = () => {
    
    action.sendGoBack();
  }
  const goForward = () => {
    action.sendGoForward();
  }
  const showWorkspace = val => {
    action.showWorkspace(val);
  };
  const closeTab = () => {
    action.sendCloseTab();
  }

  const quit = () => {
    console.log("quit------------");
    action.quit();
  };
  
    
    return (
      
      <div className="container">
        <div className='st top-bar'>
          <div className='sys-bar'>
            <a className="exit"><i className="fa fa-circle exit" onClick={() => quit()}/></a>
            <a className="minimize"><i className="fa fa-circle" /></a>
            <a className="maximize"><i className="fa fa-circle" /></a>
          </div>
          <div className='ctrl-bar'>
            <div className='ctrl-bar-unknown normal-clickable'>
              <img className='center-img' src='img/unknown.png'></img>
            </div>
            <div className='ctrl-bar-checker'onClick={() => addHoneydu(title,url,favicon)}></div>
            <div className='ctrl-bar-plus normal-clickable' onClick={() => createNewTab()}></div>
            <div className='ctrl-bar-bf'>
              <div className='ctrl-bar-back normal-clickable' onClick={() => goback()}>
                <img className='center-img' src='img/Icon-feather-chevron-left.png'></img>
              </div>
              <div className='ctrl-bar-forward normal-clickable' onClick={()=>goForward()}>
                <img className='center-img' src='img/Icon-feather-chevron-right.png'></img>
              </div>
            </div>
            <div className='ctrl-bar-url'>
              <div className='bar-lock'></div>
              <input
                className="bar-address"
                value={url || ''}
                onChange={onUrlChange}
                onKeyDown={onPressEnter}
              />
              <div className='fav-icon' >
                <img src = {favicon}/>
              </div>
            </div>
            <div className='ctrl-bar-refresh normal-clickable' onClick={action.sendReload}></div>
            <div className='ctrl-bar-cancel normal-clickable' onClick={action.sendStop}></div>
            <div className='ctrl-bar-mark'></div>
            <div className='ctrl-bar-tools'>
              <div className='ctrl-bar-tool-item tool-spotify'></div>
              <div className='ctrl-bar-tool-item tool-metro-fire'></div>
              <div className='ctrl-bar-tool-item tool-email'></div>
              <div className='ctrl-bar-tool-item tool-phone'></div>
              <div className='ctrl-bar-tool-item tool-camera'></div>
              <div className='ctrl-bar-tool-item tool-colorize'></div>
              <div className='ctrl-bar-tool-item tool-code' onClick={action.sendOpenDevTool}></div>
              <div className='ctrl-bar-tool-item tool-link'></div>
            </div>
            <div className='ctrl-bar-unknown1 normal-clickable'>
              <img className='center-img' src='img/unknown.png'></img>
            </div>
          </div>
        </div>
        <div className='body-container'>
          <div className='left-bar'>
            <div className='tab-bar'>
              <>
                {
                  leftTabs.map((item, id) => {
                    const { icon, func } = leftTabs[id] || {};
                    return (
                      <div
                        key={id}
                        className={cx('tab-item', {active : id === activeLeftID })}
                        onClick={() => setLeftID(id)}
                      >
                        <img className='container-img' src={`img/left_bar/${icon}.png`}></img>
                      </div>
                    );
                  })
                }
              </>
              <div className='tab-plus normal-clickable' onClick={() => showWorkspace("workspace")}>
                <img className='center-img' src='img/Icon-feather-plus.png'></img>
              </div>
          </div>
            <div className='pin-bar'>
              <div className='pin-tools'>
                <div className='pin-tool-item tool-bookmark'></div>
                <div className='pin-tool-item tool-check'></div>
                <div className='pin-tool-item tool-chatbubble'></div>
                <div className='pin-tool-item tool-pmail'></div>
                <div className='pin-tool-item tool-github'></div>
              </div>
            <img className='pin-avatar' src='img/Ellipse2.png'></img>
            </div>
          </div>
          <div className='st task-bar'>
            <div className={cx('site-list', {none : tempID !== 0 })}>
              <div className='list-name'>Honeydu</div>
              <SiteList list = {sites} activeID = {activeSiteID} setActiveSiteID={setActiveSiteID}
                
              />
            </div>
            <div className={cx('task-list', {none : tempID !== 1})}>
              <div className='list-name'>Tasks</div>
              <TaskList list = {tasks} activeID = {activeTaskID} setActiveTaskID={setActiveTaskID}/>
            </div>
          </div>
          <div className='content-body'>
            <div className='st content-workspace'></div>
          </div>
        </div>
      </div>
    );
    
  // });
}

// eslint-disable-next-line no-undef
ReactDOM.render(<Control />, document.getElementById('app'));
