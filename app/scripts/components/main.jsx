var React = require('react');
var Backbone = require('backbone');

var ImageCollection = require('../models/image.js').ImageCollection;



var ImageBoardContainer = React.createClass({
  getInitialState: function(){
    var imageCollection = new ImageCollection();

    console.log(imageCollection);
    return {
      imageCollection: imageCollection
    }
  },
  componentWillMount(){
    console.log(this.state.imageCollection);
    var newImageCollection = this.state.imageCollection;

    newImageCollection.add([
      {url: 'http://unsplash.it/300/300', description: 'Cool Photo'},
      {url: 'http://unsplash.it/300/300', description: 'Whoa Dude!'}
    ]);
    this.setState({imageCollection: newImageCollection})
  },
  render: function(){
  return (
    // this.state.imageCollection  -- can use the state to access image collection
    <div>
      <ImageForm />
      <ImageList imageCollection={this.state.imageCollection} />
    </div>
  );
 }
});


var ImageForm = React.createClass({
  render: function(){
    return(
      <form>
        // .. STUFF HERE PLZ
      </form>
    );
  }
});


var ImageList = React.createClass({
  propTypes: {
    imageCollection: React.PropTypes.instanceOf(Backbone.Collection).isRequired
  },

  render: function (){
    console.log(this.props.imageCollection);

    var imageBoardList = this.props.imageCollection.map(function(image){
      return (

        <div key={image.cid} className="thumbnail">
          <img src={image.get('url')} alt={image.get('description')} />
          <div className="caption">
            {/* <h3>Thumbnail label</h3> */}
            <p>{image.get('description')}</p>
            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      )
    });

    return (
      <div className="row">
        <div className="col-sm-6 col-md-4">

          {imageBoardList}

        </div>
      </div>
    );
  }
});

module.exports = {
  ImageBoardContainer
};
