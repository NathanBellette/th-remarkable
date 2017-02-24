import React, {Component, PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import {observer, inject} from 'mobx-react';

@inject('appState')
@inject('routerStore')
@observer
export default class SideMenu extends Component {

  constructor(props) {
    super(props);
  }

  menuItemTapped(item){
    this.props.routerStore.push(`/${item}`);
  }

  render() {

    return (
      <Drawer open={this.props.appState.isSideMenuOpen}
              containerStyle={{'position': 'absolute', 'top': '64px'}}>
        <List>
          <ListItem
            primaryText="Home"
            onTouchTap={this.menuItemTapped.bind(this, '')}
          />

          <ListItem
            primaryText="About"
            onTouchTap={this.menuItemTapped.bind(this, "about")}
          />
          <Divider />
          <ListItem
            primaryText="To Dos"
            onTouchTap={this.menuItemTapped.bind(this, "todos")}
          />
        </List>
      </Drawer>
    );

  }
}
