import React from "react";
import classNames from 'classnames/bind';

import styles from "./main.less";
import L from "leaflet";

import llproviders from "leaflet-providers";


const Main = React.createClass({
  componentDidMount: function(){
    this.map = L.map('custom-map');
    this.map.locate({setView: true, maxZoom: 16});
    L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(this.map);
  },

  render: function() {
    return (
      <div id="custom-map"></div>
    )
  }
})

export default Main