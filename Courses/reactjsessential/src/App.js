import './App.css';
import subject from './'
import sample from './sample.jpg'
import { useState } from 'react';


function App() {
  const [emotion, setEmotion] = useState("happy");

  return(
  <>
      <h1>Hello state is {emotion}</h1>
      <button onClick={() => setEmotion("angry")}>angry</button>
      <button onClick={() => setEmotion("happy")}>Happy</button> 
  </>
  );
}

export default App;
