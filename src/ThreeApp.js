import React from 'react';

import runThreeApp from './runThreeApp';

class ThreeApp extends React.Component {

    componentDidMount() {
        runThreeApp();
    }

    render() {
        return (
            <div id='container'></div>
        );
    }
}

export default ThreeApp;