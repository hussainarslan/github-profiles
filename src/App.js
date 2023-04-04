import logo from './logo.svg';
import {useEffect, useState} from 'react';
import List from './List';

function App() {
  const [githubData, setGithubData] = useState([])
  const [githubUser, setGithubUser] = useState("")

  const fetchData = () => {
    return fetch(`https://api.github.com/search/users?q=${githubUser}`)
      .then((response) => response.json())
      .then((data) => setGithubData(data.items));
  }


  return (
    <div className="App">
      <div className="search-area">
        <input type="text" placeholder='Search for User' onChange={(e) => setGithubUser(e.target.value)} />
        <button onClick={fetchData} className="search_button">Search Github</button>
      </div>
      <div className="results">
        <List users={githubData}/>
      </div>
    </div>
  );
}

export default App;
