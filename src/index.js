import 'core-js'
import 'regenerator-runtime'
import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MainReducer from './reducers'

const initialState = { data: 'default' }
const store = createStore(MainReducer, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
