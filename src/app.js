console.log('App.js is running')

var app = {
  title: 'Indecision App',
  subTitle: 'Let the computer decide what you do',
  options: ['one','two']
};

  
// JSX - JavaScript XML
var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options':'No options'}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
    </div>
);

var user ={
  name: 'ashish',
  age: 23,
  location: 'New Delhi-59'
};
function getLocation(location){
  if (location){
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);