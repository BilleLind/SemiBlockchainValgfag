import './App.css';
import subject from './'
import sample from './sample.jpg'

function SecretComponent() {
  return <h1>Super secret component!</h1>
}

function RegularComponent()  {
  return <h1>Everyone can see this</h1>
}
// by having {authoried} is functions as it would with props => props.authorized (it is called object destructoring)
function App({authorized}) {
  return(
  <>
  {authorized ? <SecretComponent/> : <RegularComponent/> }
  </>
  );
}

export default App;
