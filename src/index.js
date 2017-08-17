import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers/rootReducer'

import App from './components/App'

const initialState = {
    running: false,
    timestamp: Date.now(),
    frame: 0,
}

const store = createStore(rootReducer, initialState)

const updateThreeApp =  () => {
    const timestamp = Date.now()
    requestAnimationFrame(() => store.dispatch({type: 'UPDATE', timestamp: timestamp}))
}

store.subscribe(updateThreeApp)

store.dispatch({type: 'UPDATE'})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
