import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddItem from './components/AddItem';
import uuid from "uuid";


export default class App extends Component {
  state = {
    tasks: [
      {
        id: uuid.v4(),
        title: "Download Zoom",
        isCompleted: false
      },
      {
        id: uuid.v4(),
        title: "Eat Fried Chicken",
        isCompleted: true
      },
      {
        id: uuid.v4(),
        title: "Play Games",
        isCompleted: false
      },
      {
        id: uuid.v4(),
        title: "Go for Shopping",
        isCompleted: false
      },
      {
        id: 5,
        title: "Watch Movie",
        isCompleted: false
      }
    ]
  };
  // changeData = () => {
  //   this.setState({ data: 'Alice Zaheer' });
  // }

//toggle Complete
  toggleComplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    })
  }

  //delete item
  delTodoItems = (id) => {
    this.setState({
      tasks: [...this.state.tasks.filter(elem => elem.id !== id)]

    })
  }
  //add item
  addNewItem = (title) => {
    const newItem = {
      id: uuid.v4(),
      title,
      isCompleted: false
    }
    this.setState({ tasks: [...this.state.tasks, newItem] })
  }
  render() {
    const { tasks } = this.state;
    return (
      <React.Fragment>
        <Header />
        <AddItem addNewItem={this.addNewItem} />
        <Todos tasks={tasks} a={4} toggleComplete={this.toggleComplete} delTodoItems={this.delTodoItems} />
      </React.Fragment >
    );
  }
}