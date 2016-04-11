import React from "react";
import classNames from 'classnames/bind';

import styles from "./find_spies.less";
import MapComponent from "../../components/map/main.js";
import MainFilterPanel from '../../components/main_filter_panel/main.js';
import SpyStore from '../../stores/spy_store.js';
import listenToStores from '../../utilities/listen_to_stores';

const getState = function(){
  return {
    mapIsLoading: true,
    spies: SpyStore.getAllSpies()
  }
}

const FindSpies = React.createClass({
  mixins: [listenToStores({stores: [SpyStore], getState})],

  componentDidMount: function(){ 
    SpyStore.loadSpies();
  },

  mapFinishedLoading: function(){
    this.setState({mapIsLoading: false});
  },

  mapZoomingStarted: function(){
    this.setState({mapIsZooming: true});
  },
  mapZoomingEnded: function(){
    this.setState({mapIsZooming: false});
  },

  render: function() {
    return (
      <div className="find-spies-page">
        <MainFilterPanel />
        <MapComponent {...this.state} mapFinishedLoading={this.mapFinishedLoading} mapZoomingStarted={this.mapZoomingStarted} mapZoomingEnded={this.mapZoomingEnded}/>
      </div>
    )
  }
})

export default FindSpies