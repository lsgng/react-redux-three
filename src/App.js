import './App.css';

import ThreeApp from './ThreeApp';

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
    };
  }

  render() {
    return (
      <div>
        {!this.state.running ? (
          <div id='loading-screen' onClick={() => this.setState({ running: true })}>
            Click to start!
          </div>
        ) : (
            <ThreeApp />
          )}
      </div>
    );
  }
}

export default App;
