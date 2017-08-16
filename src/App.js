import './App.css';

import ThreeApp from './ThreeApp';

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        {!this.props.running ? (
          <div id='loading-screen' onClick={this.props.run}>
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
