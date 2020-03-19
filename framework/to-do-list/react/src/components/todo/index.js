import React, { Component } from 'react'
import List from './list/index.js'
import Input from './input/index.js'

// class Component {
//   constructor(props) {

//   }
//   renderComponent() {
//     const preVnode = this._vnode
//     const newVnode = this.render()
//     patch(preVnode, newVnode)
//     this._vnode = newVnode
//   }
// }

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['a', 'b', 'c'],
      list2: [1, 2, 3],
      list3: [',', '.', ';'],
      title: ''
    }
  }
  render() {
    return (
      <div>
        <Input addTitle={this.addTitle.bind(this)}/>
        <List data={this.state.list}></List>
        {/* <List data={this.state.list2}></List>
        <List data={this.state.list3}></List> */}
      </div>
    )
  }
  addTitle(title) {
    const currentList = this.state.list
    // console.log(this.state.list)
    this.setState({
      list: currentList.concat(title)
    }
      // ,() => {
      //   this.renderComponent()
      // }
    )
  }
}


/* 
  React.createElement(
    "div",
    null,
    React.createElement(Input, { addTitle: this.addTitle.bind(this) }),
    React.createElement(List, { data: this.state.list })
  );
  var input = new Input({ addTitle: this.addTitle.bind(this) })
  return input.render()
  var list = new List({ data: this.state.list })
  return list.render()
*/

export default Todo