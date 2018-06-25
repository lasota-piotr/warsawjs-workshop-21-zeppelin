import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as urls from "./urls";
import { CssBaseline } from "@material-ui/core";
import LoginPage from "./LoginPage";
import Layout from "./Layout";
import reducer from "./redux/reducers";
import { applyMiddleware, createStore, compose } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <CssBaseline>
              <Switch>
                <Route path={urls.LOGIN} component={LoginPage} exact />
                <Route path={urls.LAYOUT} component={Layout} />
              </Switch>
            </CssBaseline>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
