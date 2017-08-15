import './App.css';

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
    };
  }

  render() {
    return(
      <div>
        {!this.state.running ? (
          <div id='loading-screen' onClick={() => this.setState({running: true})}>
            Loading
          </div>
        ) : (
            <div id='container'>Hello</div>
          )}
      </div>
    );
  }
}

export default App;
