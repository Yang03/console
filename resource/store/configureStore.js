import { createStore, applyMiddleware, compose } from 'redux'
// import createLogger from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'
import DevTools from '../components/devTools/index'
import rootReducer from '../reducers'



export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        sagaMiddleware,
        //createLogger()
      ),
     // DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}