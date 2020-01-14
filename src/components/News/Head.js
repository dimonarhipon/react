import React from "react";

class Head extends React.Component {
  // state = {
  //   showModal: true
  // };
  // onShow = () => {
  //   this.setState({
  //     showModal: !this.state.showModal
  //   });
  // };
  render() {
    return (
      <div>
        {/* <button onClick={this.onShow}>Показать заголовок</button>
        {this.state.showModal ? <h1>Да</h1> : null} */}
        <h2>Yes</h2>
        <button onClick={() => this.props.close()}>
          Да я смог, начинай сначала
        </button>
      </div>
    );
  }
}

export default Head;
