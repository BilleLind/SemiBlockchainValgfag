import './App.css';
import subject from './'
import sample from './sample.jpg'
import { useState, useEffect  } from 'react';

//https://api.github.com/users/yokarak

function App({login}) {
  const [data, setDate] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setDate);
  }, [])
  

  if(data) {
    return (<div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url}/>
    </div>);
  }
  return <div>No User Available</div>
}

export default App;
