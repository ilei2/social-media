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
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0
  });

  React.useEffect( () => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }    
  }, []);

  function handleMouseMove(event) {
    setMousePosition({ x: event.pageX, y: event.pageY});
  }

  return(
    <div>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  );
}


function App2() {
  const [developer, setDeveloper] = React.useState({
    language: 'python',
    yearsExperience: 0,
    isEmployed: false,
    name: ""
  });
  
// change "outside" elements
// add conditional at the end to only render when needed
  React.useEffect(() => {
    document.title = developer.name;
  }, [developer.name]);

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

  function handleChangeName(event) {
    return setDeveloper({
      ...developer,
      name: event.target.value
    })
  }

function handleToggleEmployment() {
  setDeveloper((prevState) => ({
    ...prevState,
    isEmployed: !developer.isEmployed
  }));
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

        <button onClick={handleToggleEmployment}>Toggle Employment Status</button>

        <button onClick={() => handleChangeLanguage()}>Change language</button>

        <div>
        <h3>Update Name</h3>
        <input
            type="text"
            onChange={event => handleChangeName(event)}
          />
        </div>
        <div>
          <h3>Change Years Experience</h3>
          <input
            type="number"
            onChange={event => handleChangeYearsExperience(event)}
          />
        </div>
        <p>I am learning {developer.language}</p>
        <p>I have {developer.yearsExperience} years of experience.</p>
        <p>Employment status: {developer.isEmployed ? "Employed" : "Unemployed"}</p>

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

function NewPage() {
  return <div>This is a new page</div>
}

setTimeout(() => ReactDOM.render(
  <NewPage/>,
  rootNode
), 2000);