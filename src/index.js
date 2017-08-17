import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as THREE from 'three'

import rootReducer from './reducers/rootReducer'

import App from './components/App'

import { getThreeInitialState, getThreeRenderer } from './threeApp/threeApp'

const threeInitialState = getThreeInitialState();

const initialState = {
    running: false,
    ...threeInitialState
}

const store = createStore(rootReducer, initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

const threeRenderer = getThreeRenderer()

const updateThreeApp = () => {
    threeRenderer.render(store.getState().scene, store.getState().camera)
    const timestamp = Date.now()
    requestAnimationFrame(() => store.dispatch({ type: 'UPDATE', timestamp: timestamp }))
}

store.subscribe(updateThreeApp)

store.dispatch({ type: 'UPDATE' })

document.addEventListener('click', () => store.dispatch({ type: 'CHANGE_MATERIAL' }));