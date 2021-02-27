import './App.css';
import subject from './'
import sample from './sample.jpg'
import { useState, useEffect  } from 'react';

//https://api.github.com/users/yokarak

function App({login}) {
  const [data, setDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setDate)
    .then(() => setLoading(false))
    .catch(setError);
  }, [login]);
  
  if(loading) return <h1>Loading...</h1>;

  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if(!data) return null;

  if(data) {
    return (<div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url}/>
    </div>);
  }
}

export default App;
