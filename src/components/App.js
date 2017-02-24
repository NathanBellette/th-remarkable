import React, {PropTypes, Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from './NavigationBar';
import SideMenu from './SideMenu';

class App extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <MuiThemeProvider>
        <div>
          <NavigationBar/>
          <SideMenu/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
