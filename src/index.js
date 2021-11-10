import React from 'react';
import ReactDOM from 'react-dom';

function Layout(props) {
  return <div style={{ background: 'palegoldenrod' }}>
    {props.children}
  </div>
}

function Login() {
  return <p>Please login!</p>
}

function SignOut() {
  return <button>Sign Out</button>
}

const isAuthenticated = true;

// function component
function Header(props) {
  return <h1>Hello {props.name}!</h1>
}

function Person(props) {

  function handlePersonClick() {
    alert(props.person);
  }

  return <li onClick={handlePersonClick}>{props.person}</li>
}


function App() {
  const [developer, setDeveloper] = React.useState({
    language: 'python',
    yearsExperience: 0
  });

  function handleChangeLanguage() {
    return setDeveloper({
      ...developer,
      language: 'javascript'
    });
  }

  function handleChangeYearsExperience(event) {
    return setDeveloper({
      ...developer,
      yearsExperience: event.target.value
    });
  }
  // const [language, setLanguage] = React.useState('some text');
  // const [yearsExperience, setYearsExperience] = React.useState(0);
  
  // const inputValue = inputState[0];
  // const setInputValue = inputState[1];

  const people = ['Chris', 'Ivy'];

  // function handleInputChange(event) {
  //   setLanguage(event.target.value);
  // }

  // map method
  // people.map(person => <Header name={person}/>);

  return (<Layout>
    {isAuthenticated ? (
      <>
        <ul>
          {people.map((person, i) => (
            <Person key={i} person={person} />
          ))}
          {/* <input onChange={handleInputChange} /> */}
        </ul>

        <button onClick={() => handleChangeLanguage()}>Change language</button>
        <div>
          <input
            type="number"
            onChange={event => handleChangeYearsExperience(event)}
          />
        </div>
        <p>I am learning {developer.language}</p>
        <p>I have {developer.yearsExperience} years of experience.</p>

        <SignOut />
      </>
    ) : <Login />}
    <footer>Copyright 2021</footer>
  </Layout>);
}

const year = 2021;
const greeting = <div>Hello React in {year}</div>;
const rootNode = document.getElementById('root');

ReactDOM.render(
  <App/>,
  rootNode
);