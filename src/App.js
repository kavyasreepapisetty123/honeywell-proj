import logo from './logo.svg';
import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [Error, setError] = useState(null)
  const url = 'http://localhost:4215/cities'
  useEffect(() => {
    (async ()=>{
       axios.get(`${url}`).then(data=>{
        setData(data.data.cities)
        setIsLoading(false)
       }).catch(e=>{
        setError(e)
        setIsLoading(false)
       })
    })()
  
    return () => {
      
    }
  }, [])
  console.log(data,Error,isLoading)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
