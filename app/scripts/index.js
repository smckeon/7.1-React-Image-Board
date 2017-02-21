var React = require('react');
var ReactDOM = require('react-dom');


var ImageBoard = require('./components/main.jsx').ImageBoard;
var ImageCollection = require('./models/image.js').ImageCollection;

var images = new ImageCollection();


ReactDOM.render(
  React.createElement(ImageBoard),
  document.getElementById('app')
)
