import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  render() {
    return (
      <div>
        <input value={this.state.title} onChange={this.changeHandler.bind(this)}></input>
        <button onClick={this.clickHandler.bind(this)}>submit</button>
      </div>
    )
  }
  changeHandler(e) {
    this.setState({
      title: e.target.value
    })
  }
  clickHandler(e) {
    const title = this.state.title
    // 把 title 添加金列表
    const addTitle = this.props.addTitle
    addTitle(title)
    this.setState({
      title: ''
    })
  }
}

/*
React.createElement(
  "div",
  null,
  React.createElement("input", { value: this.state.title, onChange: this.changeHandler.bind(this) }),
  React.createElement(
    "button",
    { onClick: this.clickHandler.bind(this) },
    "submit"
  )
);

*/

export default Input