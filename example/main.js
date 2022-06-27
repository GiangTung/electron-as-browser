const { app, ipcMain } = require('electron');
const fileUrl = require('file-url');
const BrowserLikeWindow = require('../index');
// const {localStorage} = require('electron')
const fs = require('fs');
const os = require('os');
const storage = require('electron-json-storage');

let browser;
let child;
function createWindow() {
  storage.setDataPath('d:\\');
    storage.set('task', 
    [
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
    ], function(error) {
      if (error) throw error;
    });

  
  // console.log("+++++++++++++++++++");
  // fs.writeFile('1.txt', "1", 'utf8', function(err) {
  //   if(err) {
  //     return console.log("+++++++++++++++++++",err);
  //   }
  //  console.log('File was saved');
  // });
  // localStorage.setItem('data',0);
  browser = new BrowserLikeWindow({
    controlHeight: 50,
    controlPanel: fileUrl(`${__dirname}/renderer/control.html`),
    workspacePanel: fileUrl(`${__dirname}/renderer/workspace.html`),
    startPage: 'https://google.com',
    // startPage: '',
    blankTitle: 'New tab',
    debug: true // will open controlPanel's devtools
  });
  browser.on('closed', () => {
    browser = null;
    child = null;
  });
}

app.on('ready', async () => {
  createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (browser === null) {
    createWindow();
  }
});

ipcMain.on('close-all', (evt, arg) => {
  app.quit()
})
