import React, { Component } from 'react';

export default class TodoItem extends Component {
  
  render() {
    const { title, isCompleted,id } = this.props.task;
    const {toggleComplete,delTodoItems}= this.props;
    return (
      <React.Fragment>
        
        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>
          <input type="checkbox" onChange={toggleComplete.bind(this, id)} />
          {title}</p>
          <button style={{background:"red",color:"white",border:"none",
          borderRadius:"50%",cursor:"pointer",float:"right"}}
           onClick={delTodoItems.bind(this,id)}>Delete</button>

      </React.Fragment>
    );
  }
}

// line-through
// checked={isCompleted}