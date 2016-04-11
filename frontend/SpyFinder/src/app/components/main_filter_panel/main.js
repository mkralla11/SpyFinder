import React from "react";
import classNames from 'classnames/bind';
import TextField from 'material-ui/lib/text-field';
import Checkbox from 'material-ui/lib/checkbox';
import styles from "./main.less";






const Main = React.createClass({
  getInitialState: function(){
    return {
      inputIsFocused: false,
      showAdvancedPanel: false
    }
  },

  inputFocused: function(){
    this.setState({inputIsFocused: true});
  },
  inputBlurred: function(){
    this.setState({inputIsFocused: false});
  },
  advancedLinkClicked: function(e){
    e.preventDefault();
    this.setState({showAdvancedPanel: !this.state.showAdvancedPanel});
  },


  render: function() {

    return (
      <div className="main-filter-panel">
        <div className='search-field-wrapper'>
          <TextField className='search-field' onChange={this.props.onSearchInputChange} value={this.props.searchInputValue} onFocus={this.inputFocused} onBlur={this.inputBlurred} hintText="search spies... name, age > 50" hintStyle={{color: '#AFF2FF'}} underlineFocusStyle={{borderColor: 'white'}} style={{display: 'block', width: '100%'}} inputStyle={{color: 'white'}} />
        </div>
        <div className='advanced-link-wrapper'>
          <a href='#' className='advanced-link' onClick={this.advancedLinkClicked}>advanced</a>
        </div>
        {this.state.showAdvancedPanel &&
          <div className='filters'>
            <Checkbox
              onCheck={this.props.onMaleChange}
              checked={!!this.props.male}
              label="Male"
              labelStyle={{color: '#616161'}}
            />
            <Checkbox
              onCheck={this.props.onFemaleChange}
              checked={!!this.props.female}
              label="Female"
              labelStyle={{color: '#616161'}}
            />
          </div>
        }
      </div>
    )
  }
})

export default Main