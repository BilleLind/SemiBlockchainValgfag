import React, { Component } from 'react';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';
import '../styles/App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      myAppointments: [],
    }
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          return item;
        });
        this.setState({
          myAppointments: apts
        });
      });
    }

  render() { Current https://www.linkedin.com/learning/react-js-building-an-interface-2019/using-a-render-template-expression?contextUrn=urn%3Ali%3AlearningCollection%3A6735163765207240704&u=37487420
    return (
      <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments />
              <SearchAppointments />
              <ListAppointments appointments={this.state.myAppointments}/>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
  }
}

export default App;
