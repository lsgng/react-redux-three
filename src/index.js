import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as THREE from 'three'

import rootReducer from './reducers/rootReducer'

import App from './components/App'

import threeInitialState from './threeApp/threeInitialState'

const initialState = {
    running: false,
    timestamp: Date.now(),
    frame: 0,
    ...threeInitialState
}

const store = createStore(rootReducer, initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

const container = document.getElementById('container');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(0xf0ffff)
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const updateThreeApp = () => {
    renderer.render(store.getState().scene, store.getState().camera)
    const timestamp = Date.now()
    requestAnimationFrame(() => store.dispatch({ type: 'UPDATE', timestamp: timestamp }))
}

store.subscribe(updateThreeApp)

store.dispatch({ type: 'UPDATE' })