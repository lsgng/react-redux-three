import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import rootReducer from './reducers/rootReducer'
// import { getThreeInitialState } from './threeApp/threeApp'

// const threeInitialState = getThreeInitialState();

const initialState = {
    running: false,
    timestamp: 0,
    lastAction: '',
//    ...threeInitialState
}

const store = createStore(rootReducer, initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)