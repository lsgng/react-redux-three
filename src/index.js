import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import rootReducer from './reducers/rootReducer'
import { getInitialSceneState } from './threeApp/threeApp'

const threeInitialState = getInitialSceneState();

const initialState = {
    running: false,
    timestamp: 0,
    lastAction: '',
    scene: threeInitialState
}

const store = createStore(rootReducer, initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)