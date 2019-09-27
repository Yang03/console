import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, browserHistory } from "react-router-dom";
import ReactDOM from 'react-dom'
import routes from './router'
import configureStore from './store/configureStore'
import rootSaga from './sagas'

const store = configureStore()
store.runSaga(rootSaga)
ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} >
        <Switch>
          {routes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
      </Router>
    </Provider>,
    document.getElementById("root")
  );