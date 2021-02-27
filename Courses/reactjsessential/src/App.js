import './App.css';
import subject from './'
import sample from './sample.jpg'
import { useReducer,  } from 'react';

function App() {
  const [checked, toogle] = useReducer(
    (checked => !checked),
    false
  );

  

  return(
  <>
    <input type="checkbox" 
    value={checked} onChange={() => toogle()}/>  
     <p>{checked ? "checked" : "not checked"}</p>
  </>
  );
}

export default App;
