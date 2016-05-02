import React, { Component } from 'react-native'
import { Provider } from 'react-redux'
import Application from './Application'
import { createStore } from 'redux'
import { applyMiddleware, compose } from 'redux'
import devTools from 'remote-redux-devtools'
import thunk from 'redux-thunk'
import rootReducer from '../appState/reducers'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    devTools()
  )
)

export default class AppContainer extends Component {
  render () {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    )
  }
}
