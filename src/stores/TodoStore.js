import {observable, computed, action, reaction} from 'mobx';
import Todo from '../models/Todo';
import * as Utils from '../utils';

export default class TodoStore{
  @observable todos = [];

  @computed get activeTodoCount(){
    return this.todos.reduce((sum, todo) => sum + (todo.completed ? 0 : 1), 0);
  }

  @computed get completedCount(){
    return this.todos.length - this.activeTodoCount;
  }

  subscribeServerToStore = () =>{
    reaction(
      () => this.toJS(),
      todos => fetch('/api/todos', {
        method: 'post',
        body: JSON.stringify({ todos }),
        headers: new Headers({ 'Content-Type': 'application/json' })
      })
    );
  };


  @action addTodo = (title) => {
    this.todos.push(new Todo(this, Utils.uuid(), title, false));
  };

  @action toggleAll = (checked) => {
    this.todos.forEach(
      todo => todo.completed = checked
    );
  };

  @action clearCompleted = () => {
    this.todos = this.todos.filter(
      todo => !todo.completed
    );
  };

  toJS = () => {
    return this.todos.map(todo => todo.toJS());
  };

  static fromJS = (array) => {
    const todoStore = new TodoStore();
    todoStore.todos = array.map(item => Todo.fromJS(todoStore, item));
    return todoStore;
  }
}
