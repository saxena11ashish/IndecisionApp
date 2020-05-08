import React from 'react';

export default class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();
    // console.log('ashish');
    const option = e.target.elements.option.value.trim();
    //If handleAddOption worked correctly above the below line will
    //will get error=undefined, otherwise we can handle any error that occurs
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    //If there is no error, clear the form input to enter next entry
    if(!error){
      e.target.elements.option.value ="";
    }
  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="Enter something"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}