import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovie from '../actions/getMovie'

class Index extends Component {
  render(){
    return(
      <div>
        <button onClick={this.handleMovieButtonClick.bind(this)}>See Nearby Movies</button>
      </div>
    )
  }

  handleMovieButtonClick(event){
    event.preventDefault()

    var locationPromise = this.getLocation();
        //     JK: this logic below, should probably be in the action creator itself.  You want to move logic like this out of the component.
    locationPromise.then(function(loc) { getMovie(loc); }).catch(function(err) { console.log("No location"); });

  }

  getLocation(callback) {
//     More logic to move into an action creator.
    var promise = new Promise(function(resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position){
                    resolve({lat:position.coords.latitude, long: position.coords.longitude})
                }
            );
        } else {
          reject("Unknown");
        }
    });
    return promise;
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getMovie }, dispatch)
}

export default connect(null, mapDispatchToProps)(Index);
