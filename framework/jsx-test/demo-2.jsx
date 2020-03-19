
import List from './list/index.js'
import Input from './input/index.js'

function render() {
  return (
    <div>
      <p>this is a demo</p>
      <Input addTitle={this.addTitle.bind(this)}/>
      <List data={this.state.list}></List> 
    </div>
  )
  // React.createElement(List, { data: this.state.list }) 的执行
  var list = new List({data: this.state.list})
  var vnode = list.render()
}