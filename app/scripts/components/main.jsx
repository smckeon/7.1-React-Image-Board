var React = require('react');
var Backbone = require('backbone');

var ImageCollection = require('../models/image.js').ImageCollection;
var Images


var ImageBoardContainer = React.createClass({
  getInitialState: function(){
    var imageCollection = new ImageCollection();

    console.log(imageCollection);
    return {
      imageCollection: imageCollection,
      showForm: false,
      imageToEdit: new Image()
    };
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
  handleToggleForm: function(event){
    event.preventDefault();
    this.setState({showForm: !this.state.showForm})
  },
  addImage: function(image){
    var imageCollection = this.state.imageCollection;
    this.state.imageCollection.add(image);
    this.setState({imageCollection: imageCollection});
    // ______________^^^^^^^^^^^^^^^
    // HOOK UP MORE ABOVE AFTER CLASS
  },
  editImage: function(imageToEdit){
    this.setState({showForm: true, imageToEdit: imageToEdit});
  },
  render: function(){
  return (

    <div className="container">

      <ul className="nav nav-pills">
        <li role="presentation" className="active">
          <a onClick={this.handleToggleForm} href="#">+</a>
        </li>
      </ul>

        {this.state.showForm ? <ImageForm imageToEdit={this.state.imageToEdit} addImage={this.addImage} /> : null}

      <ImageForm />
      <ImageList
        imageCollection={this.state.imageCollection},
        editImage={this.editImage}
        />
    </div>
  );
 }
});


var ImageForm = React.createClass({
  propTypes: {
    addImage: React.PropTypes.func.isRequired,
  },
  getInitialState: function(){
    return {
      // url: '',
      // description: ''
      this.props.imageToEdit.toJSON();
    }
  },
  componentWillReceiveProps: function(nextProps){
    // console.log(nextProps.imageToEdit);
    this.setState(nextProps.imageToEdit.toJSON());
  },
  handleUrlChange: function(){
    this.setState({'url': event.target.value});
  },
  handleDescriptionChange: function(){
    this.setState({'description': event.target.value});
  },
  handleSubmit: function(event){
    event.preventDefault();
    // console.log(this.state);
    this.props.addImage(this.state);
    this.setState({url: '', description: ''});
  },
  render: function(){
    return(
      <form className="well">
        <div className="form-group">
          <label htmlFor="url">Image URL</label>
          <input onChange={this.handleUrlChange} value={this.state.url} type="text" className="form-control" id="url" placeholder="http://" />
        </div>
        <div className"form-group">
          <label htmlFor="description">Description</label>
          <input onClick={this.handleDescriptionChange} value={this.state.description} type="text" className="form-control" id="description" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-success">Add Image</button>
      </form>
    );
  }
});


var ImageList = React.createClass({
  propTypes: {
    imageCollection: React.PropTypes.instanceOf(Backbone.Collection).isRequired,
    editImage: React.PropTypes.func.isRequired
  },

  render: function (){
    console.log(this.props.imageCollection);

    var self = this;
    var imageBoardList = this.props.imageCollection.map(function(image){
      return (

        <div key={image.cid} className="thumbnail">
          <img src={image.get('url')} alt={image.get('description')} />
          <div className="caption">
            {/* <h3>Thumbnail label</h3> */}
            <p>{image.get('description')}</p>
            <p>
              <a
                onClick={function(e){
                  e.preventDefault();
                  self.props.editImage(image);
                }} href="#" className="btn btn-warning" role="button">Edit</a>
              <a href="#" className="btn btn-danger" role="button">Delete</a>
            </p>
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
