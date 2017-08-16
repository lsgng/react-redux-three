import './index.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import App from './App'

import runThreeApp from './runThreeApp';

const runAction = { type: 'RUN' }

const app = (state, action) => {
    switch (action.type) {
        case 'RUN':
            runThreeApp()
            return { running: true };
        default:
            return state
    }
}

const initialState = { running: false }

const store = createStore(app, initialState)

const mapStateToProps = (state) => {
    return {
        running: state.running,
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        run: () => dispatch(runAction)
    }
}

const MainApp = connect(
    mapStateToProps,
    mapDispatchTopProps
)(App)

render(
    <Provider store={store}>
        <MainApp />
    </Provider>,
    document.getElementById('root')
)
