import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      pristine: true,
      listName: '',
      songs: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //console.log("In handleChange");
    //const value = evt.target.value;
    this.setState({listName: event.target.value, pristine: false});
    //console.log("state is set to listName: ",this.state.listName);
  }

  render() {
    console.log("In Playlist render, this: ", this);
    return (
      <div className="col-xs-10">
        <NewPlaylist handleChange={this.handleChange} createPlaylist={this.createPlaylist} inputValue={this.state.listName} pristine={this.state.pristine}/>
      </div>
    );

  }
}