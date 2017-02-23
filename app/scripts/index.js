var React = require('react');
var ReactDOM = require('react-dom');


var ImageBoardContainer = require('./components/main.jsx').ImageBoardContainer;
var ImageCollection = require('./models/image.js').ImageCollection;

var images = new ImageCollection();


ReactDOM.render(
  React.createElement(ImageBoardContainer),
  document.getElementById('app')
)
