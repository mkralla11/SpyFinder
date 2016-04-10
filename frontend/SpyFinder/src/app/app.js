import './styles';
import React from "react";
import classNames from 'classnames/bind';
import _ from 'underscore';

import MainFilterPanel from './components/main_filter_panel/main.js';

const App = React.createClass({

  getInitialState: function(){
    return {
      currentUser: {}
    }
  },


  render: function() {
    return (
      <div id='main-app'>
        <MainFilterPanel />
        {this.props.children}
      </div>
    )
  }
})

export default App