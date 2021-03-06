import React from "react";
import classNames from 'classnames/bind';
import _ from 'underscore';
import styles from "./find_spies.less";
import MapComponent from "../../components/map/main.js";
import MainFilterPanel from '../../components/main_filter_panel/main.js';
import SpyStore from '../../stores/spy_store.js';
import listenToStores from '../../utilities/listen_to_stores';


const escapeRegExp = function(string){
  return string.trim().replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

const includeValue = function(rgx, string){
  return RegExp(rgx, "i").test(string);
}

const ageFilter = function(input, age){
  const vals = input.split(" ");
  if(vals.length != 3){
    return false;
  }
  const [_na, operator, targetAge] = vals;


  let res = false;

  switch(operator){
    case ">":
      res = age > targetAge;
      break;
    case ">=":
      res = age >= targetAge;
      break;
    case "<":
      res = age < targetAge;
      break;
    case "<=":
      res = age <= targetAge;
      break;
    case "=":
      res = age == targetAge;
      break;
  }
  // console.log(age);
  // console.log(res);
  return res;
}


const getState = function(){
  return {
    mapIsLoading: true,
    spies: SpyStore.getAllSpies(),
    male: 1,
    female: 1,
    searchInputValue: ""
  }
}

const FindSpies = React.createClass({
  mixins: [listenToStores({stores: [SpyStore], getState})],

  componentDidMount: function(){ 
    SpyStore.loadSpies();
  },
  
  onMaleChange: function(e, v){
    this.setState({male: v});
  },
  onFemaleChange: function(e, v){
    this.setState({female: v});
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

  onSearchInputChange: function(e, v){
    this.setState({searchInputValue: v});
  },



  filterSpies: function(){
    let res = {};
    const siv = this.state.searchInputValue;

    _(this.state.spies).map((spy, k)=>{
      if( (spy.gender == 0 && this.state.male) || (spy.gender == 1 && this.state.female) ){
        if(_.isEmpty(siv) || includeValue(escapeRegExp(siv), spy.name) || ageFilter(siv, spy.age)){
          res[k] = spy;
        }
      }
    })
    return res;
  },

  render: function() {
    const spies = this.filterSpies();

    return (
      <div className="find-spies-page">
        <MainFilterPanel {...this.state} onFemaleChange={this.onFemaleChange} onMaleChange={this.onMaleChange} onSearchInputChange={this.onSearchInputChange}/>
        <MapComponent {...this.state} spies={spies} mapFinishedLoading={this.mapFinishedLoading} mapZoomingStarted={this.mapZoomingStarted} mapZoomingEnded={this.mapZoomingEnded}/>
      </div>
    )
  }
})

export default FindSpies