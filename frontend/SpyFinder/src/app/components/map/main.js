import React from "react";
import classNames from 'classnames/bind';
import _ from "underscore";
import styles from "./main.less";
import L from "leaflet";
import MaleIconImg from './images/male_icon.png';
import FemaleIconImg from './images/female_icon.png';
import llproviders from "leaflet-providers";


var maleIcon = L.icon({
  iconUrl:      MaleIconImg,
  iconSize:     [50, 48],
  iconAnchor:   [25, 47],
  popupAnchor:  [0, -48]
});

var femaleIcon = L.icon({
  iconUrl:      FemaleIconImg,
  iconSize:     [50, 50],
  iconAnchor:   [25, 49],
  popupAnchor:  [0, -48]
});

const Main = React.createClass({
  componentDidMount: function(){
    this._setupMap();
    this._renderMarkers(this.props.spies);
    this._fitBounds(this.props.spies);
  },
  componentDidUpdate: function(prevProps){
    if(!_.isEqual(this.props.spies, prevProps.spies)){
      this._renderMarkers(this.props.spies);
      // this._fitBounds(this.props.spies);
    }
  },

  componentWillUnmount: function(){
    this.map.off('load', this.props.mapFinishedLoading);
    this.map.off('zoomstart', this.props.mapZoomingStarted);
    this.map.off('zoomend', this.props.mapZoomingEnded);
  },

  _bindMapEvents: function(){
    this.map.on('load', this.props.mapFinishedLoading);
    this.map.on('zoomstart', this.props.mapZoomingStarted);
    this.map.on('zoomend', this.props.mapZoomingEnded);
  },



  _fitBounds: function(data){
    const coords = this._coordsFromData(data);
    if(coords.length){
      this.map.fitBounds(coords);
    }
    else if(!this._nextBound){
      this._nextBound = true;
      this.map.setView([51.505, -0.09], 13);
    }
  },

  _coordsFromData: function(data){
    return _(data).map((spy)=>{
      return [spy.latitude, spy.longitude];
    })
  },

  _setupMap: function(){
    this.map = L.map('custom-map', {maxBoundsViscosity: 1.0});
    this._bindMapEvents();
    L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(this.map);
  },


  _renderMarkers: function(data){
    let markers = {};
    _(data).map((spy, k)=>{
      let marker = this._markers[spy.id];
      if(!marker){
        console.log('new marker');
        marker = L.marker([parseFloat(spy.latitude), parseFloat(spy.longitude)], {icon: this._getIconForGender(spy.gender)}).addTo(this.map).bindPopup(`name: ${spy.name}<br/>age: ${spy.age}<br/>gender: ${this._genderToHuman(spy.gender)}`);
      }
      else{
        console.log('marker exists');
      }
      markers[spy.id] = marker;
    });
    _(this._markers).map((oldMarker, k)=>{
      if(!markers[k]){
        console.log('removing marking');
        this.map.removeLayer(oldMarker);
      }
    });

    this._markers = markers;
  },

  _genderToHuman: function(gender){
    return gender == 0 ? 'male' : 'female';
  },

  _getIconForGender: function(gender){
    return gender == 0 ? maleIcon : femaleIcon;
  },


  render: function() {
    return (
      <div id="custom-map"></div>
    )
  }
})

export default Main