const { ipcRenderer } = require("electron");

// Used in Renderer process

/**
 * Tell browser view to load url
 * @param {string} url
 */
const sendEnterURL = (url) => ipcRenderer.send("url-enter", url);
const sendNewsite = () => {};
/**
 * Tell browser view url in address bar changed
 * @param {string} url
 */
const sendChangeURL = (url) => ipcRenderer.send("url-change", url);

const sendAct = (actName) => {
  ipcRenderer.send("act", actName);
};
const getSession = () => ipcRenderer.send('get-session');
const sendOpenDevTool = () => {
  ipcRenderer.send("open-devtools");
};

/**
 * Tell browser view to load url
 * @param {string} url
 */

const sendScreenshot = (url) => {
  ipcRenderer.send("screen-shot", url);
};

const sendDeleteAllCookie = () => {
  ipcRenderer.send("delete-all-cookie");
};

const sendSpotify = () => {
  ipcRenderer.send("link-spotify");
};

const sendEmail = () => {
  ipcRenderer.send("link-gmail");
};

const sendPhone = (phoneState) => {
  ipcRenderer.send("simulate-phone", phoneState);
};

const sendColorPick = () => {
  ipcRenderer.send("pick-colorize");
};

/**
 * Tell browser view to load url
 * @param {string} url
 */

const sendLink = (url) => {
  ipcRenderer.send("link-bitly", url);
};

/**
 * Tell browser view to goBack
 */
const sendGoBack = () => sendAct("goBack");

/**
 * Tell browser view to goForward
 */
const sendGoForward = () => sendAct("goForward");
/**
 * Tell browser view to switch to specified tab
 * @param {Number} id
 */
const sendSwitchTab = (id) => ipcRenderer.send("switch-tab", id);
// const sendSwitchTab = id => {alert(id),sendAct('goForward')};
// const sendSwitchTab=id=> sendAct('goToIndex', 1);
// Tell browser view to reload
const sendReload = () => sendAct("reload");

// Tell browser view to stop load
const sendStop = () => sendAct("stop");

/**
 * Tell browser view to close tab
 * @param {TabID} id
 */
const sendCloseTab = (id) => ipcRenderer.send("close-tab", id);

/**
 * Create a new tab
 * @param {string} [url]
 * @param {object} [references]
 */
const sendNewTab = (url, references) =>
  ipcRenderer.send("new-tab", url, references);
/**
 * Create a new tab
 * @param {string} url
 */
const sendGetfavicon = (url) => ipcRenderer.send("get-favicon", url);

/**
 * Create a workspace panel
 * @param {string} [val]
 */
const showWorkspace = (val) => ipcRenderer.send("show-workspace", val);

/**
 * Close the workspace panel
 * @param {string} [val]
 */
const hideWorkspace = (val) => ipcRenderer.send("hide-workspace", val);
/**
 * Close the workspace panel
 * @param {Number} [val]
 */
const sendChangeTaskbar = (val) => ipcRenderer.send("ChangeTaskbar",val);
const quit = () => ipcRenderer.send("close-all");

module.exports = {
  sendEnterURL, // sendEnterURL(url) to load url
  sendChangeURL, // sendChangeURL(url) on addressbar input change
  sendGoBack,
  sendGoForward,
  sendReload,
  sendStop,
  sendNewTab, // sendNewTab([url])
  sendSwitchTab, // sendSwitchTab(toID)
  sendCloseTab, // sendCloseTab(id)
  showWorkspace,
  hideWorkspace,
  quit,
  sendOpenDevTool,
  sendScreenshot,
  sendDeleteAllCookie,
  sendSpotify,
  sendEmail,
  sendPhone,
  sendColorPick,
  sendLink,
  getSession,
  sendChangeTaskbar,
};
