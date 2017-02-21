var React = require('react');


var ImageForm = React.createClass({
render: function(){
  return (
    <form>
      // .. STUFF HERE PLZ
    </form>
  );
 }
});


var ImageList = React.createClass({
  render: function(){
    return(
      <ul>
        // .. PSEUDOCODE IS LIFE
      </ul>
    );
  }
});


var ImageBoard = React.createClass({
  render: function (){
    return (
      <div>
        <ImageForm />
        <ImageList />
      </div>
    );
  }
});

module.exports = {
  ImageForm: ImageForm,
  ImageList: ImageList,
  ImageBoard: ImageBoard
}
