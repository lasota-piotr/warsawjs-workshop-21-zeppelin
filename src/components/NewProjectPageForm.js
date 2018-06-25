import React, { Component } from "react";
import { connect } from 'react-redux';

class NewProjectPageForm extends Component {
  state = {
    title: ""
  };

  handleChange = type => event => {
    this.setState({ [type]: event.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault()
  };

  fileInput = React.createRef();

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Project title"
          onChange={this.handleChange("title")}
          value={title}
        />
        <input type="file" ref={this.fileInput} />
        <button type="submit">create</button>
      </form>
    );
  }
}

NewProjectPageForm.propTypes = {};

// const mapDispatchToProps = {
//
// }

export default connect()(NewProjectPageForm);
