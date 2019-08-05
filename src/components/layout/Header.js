import React, { Component } from 'react';

export default class Header extends Component {
  
  render() {
  
    return (
    <header style={{background:"#333",color:"#fff",textAlign:"center",padding:"5px"}}>
        <h1>Todo List</h1>
    </header>
    );
  }
}