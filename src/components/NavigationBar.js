import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {observer, inject} from "mobx-react";

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton iconStyle={{color: 'white'}}><MoreVertIcon/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

@inject('appState')
@observer
class NavigationBar extends Component{

  constructor(props){
    super(props);
  }

  sideMenuClicked = () => {
    this.props.appState.toggleSideMenu();
  };

  render(){
    return (
      <AppBar
        title="ToDos App"
        onLeftIconButtonTouchTap={this.sideMenuClicked}
        iconElementRight={<Logged/>}/>
    )
  }
}

export default NavigationBar;
