import {normalize, Schema, arrayOf} from 'normalizr';
import Constants from '../constants/constants.js';
import request from 'axios';
var spy = new Schema('spies');
import {createStore} from '../utilities/store_utils.js';
import  _ from 'underscore';

function normalizeSpyResponse(data){
  return normalize(data, arrayOf(spy));
}

function loadSpies(){
  request.get(Constants.APIEndpoints.SPIES)
    .then((res)=>{
      var norm = normalizeSpyResponse(res.data);
      console.log(norm);
    })
}

var spies = {};

const SpyStore = createStore({
  setSpies(data){
    if(data){
      spies = _.extend({}, spies, data);
      this.emitChange();
    }
  },
  getAllSpies(){
    return spies;
  },
  loadSpies(){
    request.get(Constants.APIEndpoints.SPIES)
      .then((res)=>{
        var norm = normalizeSpyResponse(res.data);
        var data = norm.entities.spies;
        this.setSpies(data);
      })
  }
})


export default SpyStore