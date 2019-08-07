import React, { Component } from 'react';

export default class AddItem extends Component {
  state={
      title:""

  };

  // onSubmit =(e)=>{
  //   e.preventDefault();
  //   this.props.addNewItem(this.state.title);
  //   this.setState({title:""});
  // }
  // onChange =(e)=> this.setState({[e.target.name]:e.target.value});

  addNewItem = (e) => {
    e.preventDefault();
    var title = (this.title.value).trim();
    this.props.addNewItem(title);
}

  render() {
  
    return (
      <React.Fragment>
        <form >
            <input type="text" name="title"
             placeholder="Add to list ...."
             style={{flex:"10", padding:'5px'}}
             ref={r => this.title = r}
             ></input>

            <input type="submit" onClick={this.addNewItem} value="Add" style={{flex:1}}></input>
        </form>
      

      </React.Fragment>
    );
  }
}