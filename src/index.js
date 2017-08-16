import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers/rootReducer'

import App from './components/App'

const initialState = {
    startPage: {
        running: false,
    },
    threeApp: {

    },
}

const store = createStore(rootReducer, initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
