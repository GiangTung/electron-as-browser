"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useConnect = _interopRequireDefault(require("../../useConnect"));

var action = _interopRequireWildcard(require("../../control"));

var _useEffectReducer = require("use-effect-reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function Control() {
  const showWorkspace = val => {
    action.showWorkspace(val);
  };

  const {
    tabs,
    tabIDs,
    activeID,
    tasks,
    addLeftTabs,
    leftTabs,
    setLeftTabs,
    changeTask,
    countReducer
  } = (0, _useConnect.default)();
  const [workspaceName, setWorkspaceName] = (0, _react.useState)(''); // const [state, dispatch] = useEffectReducer(countReducer, { count: 0 });

  const addLeftTab = () => {
    let leftTab_type = {
      icon: "fruit",
      func: 'ddd'
    };
    addLeftTabs(leftTab_type); // action.sendReload();
  };

  return _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "add-workspace"
  }, _react.default.createElement("div", {
    className: "add-name"
  }, _react.default.createElement("div", {
    className: "add-plus",
    onClick: () => addLeftTab()
  }, _react.default.createElement("img", {
    className: "center-img",
    src: "img/workspace/plus.png"
  })), _react.default.createElement("div", {
    className: "add-title"
  }, _react.default.createElement("input", {
    className: "input-title",
    placeholder: "Name your workspace"
  }))), _react.default.createElement("div", {
    className: "add-setting "
  }, _react.default.createElement("label", {
    class: "switch"
  }, _react.default.createElement("input", {
    type: "checkbox"
  }), _react.default.createElement("span", {
    class: "slider round"
  })), _react.default.createElement("div", {
    className: "workspace-letter"
  }, _react.default.createElement("p", null, "Separate Cookies")), _react.default.createElement("label", {
    class: "switch"
  }, _react.default.createElement("input", {
    type: "checkbox"
  }), _react.default.createElement("span", {
    class: "slider round"
  })), _react.default.createElement("div", {
    className: "workspace-letter"
  }, _react.default.createElement("p", null, "Incognito Tab")))), _react.default.createElement("div", {
    className: "emoji"
  }, _react.default.createElement("img", {
    className: "stretch-img",
    src: "img/workspace-emoji.png"
  })), _react.default.createElement("div", {
    className: "white-area"
  }, _react.default.createElement("img", {
    className: "stretch-img",
    src: "img/workspace/material-texture.png"
  })), _react.default.createElement("div", {
    className: "alert-area"
  }, _react.default.createElement("div", {
    className: "alert"
  }, _react.default.createElement("div", {
    className: "alert-icon"
  }, _react.default.createElement("img", {
    className: "origin-center-img",
    src: "img/workspace/awesome-bell.png"
  })), _react.default.createElement("div", {
    className: "alert-content"
  }, _react.default.createElement("p", null, "Meeting with Jack Liang coming up in 10 min")), _react.default.createElement("div", {
    className: "alert-close"
  }, _react.default.createElement("img", {
    className: "origin-center-img",
    src: "img/workspace/ionic-md-close.png"
  })))));
} // eslint-disable-next-line no-undef


_reactDom.default.render(_react.default.createElement(Control, null), document.getElementById('app'));
