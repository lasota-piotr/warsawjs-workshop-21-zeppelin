import React from "react";
import { TextField, withStyles, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { login } from "./redux/actions";
import { withRouter } from "react-router-dom";
import * as urls from "./urls";
const styles = {
  form: {
    display: "flex",
    flexDirection: "column"
  },
  loginLayout: {
    maxWidth: 400,
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1rem"
  }
};

class LoginPage extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = type => event => {
    this.setState({ [type]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { login, history } = this.props;
    login({ username, password })
      .then(() => {
        history.push(urls.PROJECT_LIST);
      })
      .catch(() => {
        this.setState({
          username: "",
          password: ""
        });
      });
  };

  render() {
    const { classes, isPending } = this.props;
    const { username, password } = this.state;
    if (isPending) {
      return <div>Loading...</div>;
    }
    return (
      <div className={classes.loginLayout}>
        <h2>Login</h2>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <TextField
            id="username"
            label="User name"
            onChange={this.handleChange("username")}
            value={username}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            margin="normal"
            onChange={this.handleChange("password")}
            value={password}
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isPending: state.auth.isPending
});

const mapDispatchToProps = {
  login
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage))
);
