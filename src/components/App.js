import React, {PropTypes, Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
