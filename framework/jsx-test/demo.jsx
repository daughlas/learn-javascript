/* @jsx h */

// class Input extends Component {
//   render() {
//     return (
//       <div>
//         <input value="this.state.title" onChange={this.changeHandler.bind(this)}/>
//         <button onClick={this.clickHandler.bind(this)}>submit</button>
//       </div>
//     )
//   }
// }

// class Input extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       React.createElement("input", { value: "this.state.title", onChange: this.changeHandler.bind(this) }),
//       React.createElement(
//         "button",
//         { onClick: this.clickHandler.bind(this) },
//         "submit"
//       )
//     );
//   }
// }

// --------------- 注释之后的效果，自定义，可拓展的方式 ---------------

// class Input extends Component {
//   render() {
//     return h(
//       "div",
//       null,
//       h("input", { value: "this.state.title", onChange: this.changeHandler.bind(this) }),
//       h(
//         "button",
//         { onClick: this.clickHandler.bind(this) },
//         "submit"
//       )
//     );
//   }
// }

class List extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const list = this.props.data
    return (
      <ul>
        {
          list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    )
  }
}