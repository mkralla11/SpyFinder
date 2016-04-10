import './styles';
import React from "react";
import classNames from 'classnames/bind';
import _ from 'underscore';

const App = React.createClass({

  getInitialState: function(){
    return {
      currentUser: {}
    }
  },


  render: function() {
    return (
      <div id='main-app'>
        {this.props.children}
      </div>
    )
  }
})

export default App