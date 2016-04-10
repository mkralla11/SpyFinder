import React from "react";
import classNames from 'classnames/bind';

import styles from "./find_spies.less";
import MapComponent from "../../components/map/main.js";
import MainFilterPanel from '../../components/main_filter_panel/main.js';

const FindSpies = React.createClass({

  render: function() {
    return (
      <div className="find-spies-page">
        <MainFilterPanel />
        <MapComponent/>
      </div>
    )
  }
})

export default FindSpies