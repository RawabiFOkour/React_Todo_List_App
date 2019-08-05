import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todos extends Component {

  render() {
    const { tasks ,toggleComplete,delTodoItems} = this.props;
    return (
      <React.Fragment>
       
        {tasks.map((elem, i) => <TodoItem key={i} task={elem}
         toggleComplete={toggleComplete} delTodoItems={delTodoItems}
          />)}
      </React.Fragment>
    );
  }
}
