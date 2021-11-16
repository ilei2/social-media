import React from 'react';
import ReactDOM from 'react-dom';


const base_url = 'https://api.github.com/users/';

function App() {

    const [userName, setUserName] = React.useState('ilei2');
    const [user, setUser] = React.useState(null);
    const searchInput = React.useRef();

    React.useEffect(() => {
        getUser();
    }, []);

    function handleClearInput() {
        searchInput.current.value = "";
        searchInput.current.focus();
    }

    // synchronous
    // React.useEffect(() => {
    //     fetch(base_url)
    //     .then(response => response.json())
    //     .then(data => setUser(data));
    // }, []);

    // async
    async function getUser() {
        const response = await fetch(`${base_url}${userName}`)
        const data = await response.json();
        setUser(data);
    }

    return (
    <div>
        <input 
            type="text" 
            placeholder="Input username" 
            onChange={event => setUserName(event.target.value)}
            ref={searchInput}
        />
        <button onClick={getUser}>Search</button>
        <button onClick={handleClearInput}>Clear</button>
        {user ? (
            <>
            <div>{user.name}</div>
            <p>{user.bio}</p>
            <img alt="avatar" src={user.avatar_url} style={{height: 25}} />
            </>
        ) : <p>Loading</p>}
    </div>
    )

}

const rootNode = document.getElementById("root");

ReactDOM.render(
  <App/>,
  rootNode
);
