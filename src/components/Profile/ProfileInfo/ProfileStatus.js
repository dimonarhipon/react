import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: true
  };
  activateEditMode = () => {
    this.setState({ editMode: false });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: true });
  };
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        ) : (
          <input
            autoFocus={true}
            onBlur={this.deactivateEditMode.bind(this)}
            value={this.props.status}
          />
        )}
      </div>
    );
  }
}
export default ProfileStatus;
