import React from "react";

class Head extends React.Component {
  state = {
    showModal: true
  };
  onShow = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };
  render() {
    return (
      <div>
        {this.state.showModal ? <h1>Title</h1> : null}
        <h2>Yes</h2>
        <button onClick={this.onShow}>Открыть/Закрыть Title</button>
        <button onClick={() => this.props.close()}>Закрыть общее</button>
      </div>
    );
  }
}

export default Head;
