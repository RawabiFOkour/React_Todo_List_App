import React, { Component } from 'react';

export default class TodoItem extends Component {
  
  render() {
    const { title, isCompleted,id } = this.props.task;
    const {toggleComplete}= this.props;
    return (
      <React.Fragment>
        
        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>
          <input type="checkbox" onChange={toggleComplete.bind(this, id)} />
          {title}</p>

      </React.Fragment>
    );
  }
}

// line-through
// checked={isCompleted}