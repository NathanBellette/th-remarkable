import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {observable} from 'mobx';
import { observer } from 'mobx-react';

@observer
class ToDoEntry extends Component{
  @observable todo = '';

  render(){
    return(
      <TextField
        hintText="Hint Text"
    />
    );
  }
}

export default ToDoEntry;
