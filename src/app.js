class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  //LIFE-CYCLE METHODS()
  //1//
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        //<CornerCase>If there are no options, we dont want to render any of it
        this.setState(() => ({ options }));
      }  
    }
    catch (e) {
      //<CornerCase>IF JSON DATA IS INVALID, DO NOTHING
    }  
  }
  //2//
  componentDidUpdate(prevProps,prevState) {
    //only save data when it changes
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }    
  }
  //3//
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleDeleteOptions() {
    this.setState(() => ({options:[] }));
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove!== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if(!option){
      return 'Enter valid value to add';
    }
    else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    }
    this.setState((prevState) =>({
      options: prevState.options.concat(option)
    }));
  }
  render() {
    const subtitle = 'Let the computer decide for you...';
  
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}  
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />   
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) =>{
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What Should I Do
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started.</p>}
    { 
      props.options.map((option) => (
        <Option 
          key={option} 
          optionText={option} 
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }        
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
      <button 
        onClick={() => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));