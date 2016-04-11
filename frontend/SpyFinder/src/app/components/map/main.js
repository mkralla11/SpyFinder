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

  _fitBounds: function(data){
    const coords = this._coordsFromData(data);
    this.map.fitBounds(coords);
  },

  _coordsFromData: function(data){
    return _(data).map((spy)=>{
      return [spy.longitude, spy.latitude];
    })
  },

  _setupMap: function(){
    this.map = L.map('custom-map', {maxBoundsViscosity: 1.0});
    L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(this.map);
  },


  _renderMarkers: function(data){
    _(data).map((spy, k)=>{
      L.marker([parseFloat(spy.longitude), parseFloat(spy.latitude)], {icon: this._getIconForGender(spy.gender)}).addTo(this.map).bindPopup(`name: ${spy.name}<br/>age: ${spy.age}<br/>gender: ${this._genderToHuman(spy.gender)}`);
    });
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