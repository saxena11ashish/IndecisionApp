class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Let the computer decide for you...';
    const options = ['thing one','thing two','thing three','thing four']
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick(){
    alert('handlepick');
  }

  render(){
    return (
      <div>
        <button onClick={this.handlePick}>What Should I Do</button>
      </div>
    );
  }
}

class Options extends React.Component{
  handleRemoveAll(){
    alert('REMOVE ALL');
  }
  render(){
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Remove All</button>
      {
        this.props.options.map((option) => <Option key={option} optionText={option} />)
      }        
      </div>
    );
  }
}

class Option extends React.Component{
  render() {
    return (
      <div>
        Option: {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component{
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
      alert(option);
    }
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="Enter something"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));