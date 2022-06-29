const { app, ipcMain } = require('electron');
const fileUrl = require('file-url');
const BrowserLikeWindow = require('../index');
// const {localStorage} = require('electron')
const fs = require('fs');
const os = require('os');
const storage = require('electron-json-storage');

// const  ElectronGoogleOAuth2  = require('@getstation/electron-google-oauth2');

// app.on('ready', () => {
  



// // const googleCredentials = require('oauth2');

// // const  { google }  = require( "googleapis");

// // const google = require('googleapis');
// // const OAuth2 = google.auth.OAuth2;

// // const CREDENTIALS = require("./credentials.json");

// // var googleAuth = new OAuth2(
// //   CREDENTIALS.web.client_id,
// //   CREDENTIALS.web.client_secret,
// //   CREDENTIALS.web.redirect_uris[0]
// // );
// // googleAuth.setCredentials({
// //   access_token: yourAccessToken
// // });
// // plus.people.get({
// //   auth: googleAuth,
// //   userId: req.body.userID
// // }, function (err, user) {
// //   if( err ) { res.json( JSON.stringify( err ) );  return; }
// //   console.log(user.emails);
// // });
// // Load client secrets from a local file.
// // const  get_Auth =  () => {
// //   const Oauth2Client = new google.auth.OAuth2(
// //     googleCredentials.CLIENT_ID,
// //     googleCredentials.CLIENT_SECRET,
// //     googleCredentials.REDIRECT_URI
// //   );
  
// //   const SCOPE = [
// //     'https://www.googleapis.com/auth/userinfo.profile', // get user info
// //     'https://www.googleapis.com/auth/userinfo.email',   // get user email ID and if its verified or not
// //   ];
// //   const auth_url = Oauth2Client.generateAuthUrl({
// //     access_type: "offline",
// //     scope: SCOPE,
// //     prompt: "consent",
// //     state: "GOOGLE_LOGIN",
// //   });
// //   // return  auth_url ;
// //   // }
// //   // let code = get_Auth;    // get the code from req, need to get access_token for the user 
// //   let { tokens } = await Oauth2Client.getToken(auth_url);    // get tokens
// //   let oauth2Client = new google.auth.OAuth2();    // create new auth client
// //   oauth2Client.setCredentials({access_token: tokens.access_token});    // use the new auth client with the access_token
// //   let oauth2 = google.oauth2({
// //     auth: oauth2Client,
// //     version: 'v2'
// //   });
// //   let { data } = await oauth2.userinfo.get();    // get user info
// //   console.log(data);    // you will find name, email, picture etc. here
// //   }
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
    storage.set('leftTab', 
    [
      { icon: "fruit", func: "Honeydu" },
      { icon: "brain", func: "Tasks" },
      { icon: "face", func: "YouTube" },
      { icon: "star", func: "Mobile" },
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
