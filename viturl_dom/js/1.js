"use strict";


const doc = document
function flatten(arr) {
  return [].concat.apply([], arr);
}
function h(tag, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  return {
    tag: tag,
    props: props || {},
    children: flatten(children) || []
  };
}
function render(parent) {
  var vdom = view();
  var element = createElement(vdom);
  parent.appendChild(element);
}
function view() {
  return /*#__PURE__*/h("div", null, "Hello World", /*#__PURE__*/h("ul", null, /*#__PURE__*/h("li", {
    id: "1",
    "class": "li-1"
  }, "\u7B2C1")));
}

// 创建dom元素
function createElement(vdom) {
  // 如果vdom是字符串或者数字类型，则创建文本节点，比如“Hello World”
  if (typeof vdom === "string" || typeof vdom === "number") {
    return doc.createTextNode(vdom);
  }
  var tag = vdom.tag,
    props = vdom.props,
    children = vdom.children;

  // 1. 创建元素
  var element = doc.createElement(tag);

  // 2. 属性赋值
  setProps(element, props);

  // 3. 创建子元素
  children.map(createElement).forEach(element.appendChild.bind(element));
  return element;
}

// 属性赋值
function setProps(element, props) {
  for (var key in props) {
    element.setAttribute(key, props[key]);
  }
}