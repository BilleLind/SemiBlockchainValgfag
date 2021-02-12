import './App.css';


function Header(props) {
  return ( 
    <header>
      <h1>{props.name} built notes</h1>
    </header>
  )
}

function Main(props) {
  return (
  <section>
    <p>{props.text}</p>
  </section>
  )
}

function Footer(props) {
  return ( 
    <footer>
      <div className="divider"></div>
      <p>Footer of notes</p>
      <p>{props.year}</p>
    </footer>
  )
}
function App() {
  return (
    <div className="App">
      <Header name="React"/>
      <Main text="Here is the text"/>
      <Footer year ={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
