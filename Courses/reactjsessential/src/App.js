import './App.css';
import subject from './'
import sample from './sample.jpg'
import { useState, useEffect } from 'react';


function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState('tired');

  useEffect(() => {
    console.log(`it's ${emotion} around here!`);
  }, [emotion]);


  useEffect(()=> {
    console.log(`it's ${secondary} around here `);
  }, [secondary]);

  return(
  <>
      <h1>Hello state is {emotion}</h1>
      <button onClick={() => setEmotion("angry")}>angry</button>
      <button onClick={() => setSecondary("happy")}>Happy</button> 
  </>
  );
}

export default App;
