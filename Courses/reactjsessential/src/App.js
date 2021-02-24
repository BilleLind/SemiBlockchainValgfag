import './App.css';
import subject from './'
import sample from './sample.jpg'

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
    <ul style= {{ textAlign: "left" }}>
      {props.subjects.map((subject) => <li key= {subject.id}>{subject.title}</li>)}
    </ul>
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

const subjects = [
  "todo",
  "where to",
  "what else"
];

const subjectObjects = subjects.map((subject, i) => ( {id: i, title: subject}));


function App() {
  return (
    <div className="App">
      <Header name="React"/>
      <img alt="pc picture" src="https://images.unsplash.com/photo-1579412690850-bd41cd0af397?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" height={200}/>
      <Main text="Here is the text" subjects={subjectObjects}/>
      <Footer year ={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
