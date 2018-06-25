import React from "react";
import { connect } from "react-redux";
import { readProjectList } from "./redux/actions";
import ProjectListItem from "./components/ProjectListItem";

class ProjectListPage extends React.Component {
  componentDidMount() {
    this.props.readProjectList();
  }
  render() {
    const {
      projects: { items, isPending }
    } = this.props;
    if (isPending) {
      return <div>Loading...</div>;
    }
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <ProjectListItem project={item} />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = {
  readProjectList
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListPage);
