import React from "react";
import Header from "./components/Header";
import { Route, Switch, withRouter } from "react-router-dom";
import * as urls from "./urls";
import ProjectListPage from "./ProjectListPage";
import { connect } from 'react-redux';
import NewProjectPage from './NewProjectPage';

const Layout = ({ isLogged, history }) => {
  if (!isLogged) {
    history.replace(urls.LOGIN);
  }
  return (
    <div>
      <Header />
      <Switch>
        <Route path={urls.PROJECT_CREATE} component={NewProjectPage} />
        <Route path={urls.PROJECT_LIST} component={ProjectListPage} exact />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  isLogged: !!state.auth.username
});

export default connect(mapStateToProps)(withRouter(Layout));
