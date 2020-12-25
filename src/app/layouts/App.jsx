import EventDashboard  from '../features/event/EventDashboard/EventDashboard';
import React, { Component }  from 'react';
import NavBar from '../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
         <NavBar></NavBar>
          <Container className="main">
          <EventDashboard />
          </Container>
      </div>
    );
  }
}

export default App;
