import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import useConnect from '../../useConnect';
import * as action from '../../control';
import { useEffectReducer } from 'use-effect-reducer';
function Control() {
  const showWorkspace = (val) => {
    action.showWorkspace(val);
  }
  const { tabs, tabIDs, activeID,tasks, addLeftTabs , leftTabs, setLeftTabs,changeTask,countReducer} = useConnect();
  const [state, dispatch] = useEffectReducer(countReducer, { count: 0 });
  const addTask = () => {
    // alert('dddd');
    let task_type = {
      title:"Discord | Honeydu",
      status : "From: Shan Shah",
      desc:"@devin what are the name servers for Digital Ocean?",
      time : "11:40 PM",
      icon : "img/task_list/discord.png",
      href: 'http://www.google.com'
    };
    // alert(activeID);
    // alert(task_type.title);
    // action.sendAddTask(task_type);
    changeTask(task_type);
    // alert(JSON.stringify(leftTabs));
    // action.sendReload();
    // action.showWorkspace('add-task');
    
    // alert('change task!!');
    action.sendReload();
    // alert('dddd');
   
  }

  // useEffect(()=> {
  //   tasks = useConnect().tasks;
  //   alert(JSON.stringify(tasks));
  // });
  return (
    <div className="container" onClick={() => {dispatch('INC'),action.sendReload()}}>
      <div className='add-workspace'>
        <div className='add-name'>
          <div className='add-plus' onClick={()=>addTask()}>
            <img className='center-img' src='img/workspace/plus.png'></img>
          </div>
          <div className='add-title'>
            <input className='input-title' placeholder="Name your workspace"></input>
          </div>
        </div>
        <div className='add-setting ' >
          <label class="switch">
            <input type="checkbox"></input>
            <span class="slider round"></span>
          </label>
          <div className='workspace-letter'><p>Separate Cookies</p></div>
          <label class="switch">
            <input type="checkbox"></input>
            <span class="slider round"></span>
          </label>
          <div className='workspace-letter'><p>Incognito Tab</p></div>
        </div>
      </div>
      <div className='emoji'>
        <img className='stretch-img' src='img/workspace-emoji.png'></img>
      </div>
      <div className="white-area">
        <img className='stretch-img' src='img/workspace/material-texture.png'></img>
      </div>
      <div className='alert-area'>
        <div className='alert'>
          <div className='alert-icon'>
            <img className='origin-center-img' src='img/workspace/awesome-bell.png'></img>
          </div>
          <div className='alert-content'><p>Meeting with Jack Liang coming up in 10 min</p></div>
          <div className='alert-close'>
            <img className='origin-center-img' src='img/workspace/ionic-md-close.png'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line no-undef
ReactDOM.render(<Control />, document.getElementById('app'));
