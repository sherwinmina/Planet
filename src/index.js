import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, enhancer)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
