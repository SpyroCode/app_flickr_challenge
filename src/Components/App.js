import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import ImageDetail from './ImageDetail';
import { fetchImages } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchImages('space');
  }

  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="wide column">
            <SearchBar />
          </div>
        </div>
        <div className="row">
          <div className="nine wide column">
            <center>
              <ImageDetail />
            </center>
          </div>
          <div className="seven wide column">
            <ImageList />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchImages })(App);
