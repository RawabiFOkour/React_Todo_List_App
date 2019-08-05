import React, { Component } from 'react';

export default class AddItem extends Component {
  state={
      title:""

  };

  onSubmit =(e)=>{
    e.preventDefault();
    this.props.addNewItem(this.state.title);
    this.setState({title:""});
  }
  onChange =(e)=> this.setState({[e.target.name]:e.target.value});

  render() {
  
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
            <input type="text" name="title"
             placeholder="Add to list ...."
             style={{flex:"10", padding:'5px'}}
             value={this.state.title}
             onChange={this.onChange}></input>

            <input type="submit" value="Submit" style={{flex:1}}></input>
        </form>
      

      </React.Fragment>
    );
  }
}