import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { update } from './actions'
import App from './components/App'
import rootReducer from './reducers/rootReducer'
import { getThreeInitialState, getThreeRenderer } from './threeApp/threeApp'

const threeInitialState = getThreeInitialState();

const initialState = {
    lastAction: '',
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

// TODO: Move three renderer and rendering loop into ThreeApp component? Will this affect performance?
const threeRenderer = getThreeRenderer()

const updateThreeApp = () => {
    if (store.getState().lastAction === 'UPDATE') {
        threeRenderer.render(store.getState().scene, store.getState().camera)
        requestAnimationFrame(() => store.dispatch(update()))
    }
}

store.subscribe(updateThreeApp)

store.dispatch(update())