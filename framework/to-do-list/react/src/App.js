import React from 'react';
import './App.css';
import Todo from './components/todo/index';

function App() {
  // const name = 'lvjiawen'
  // const show = true
  // const list = [1, 2, 3, 4, 5]
  // const styleConfig = {
  //   fontSize: '40px',
  //   color: 'blue'
  // }
  return (
    <div>
      <Todo/>
      {/* <p>{name || 'lisi'}</p>
      {show ?
        <img src="https://www.imooc.com/static/img/index/logo_new.png" alt=""/> :
        ''
      }
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      <p style={styleConfig}>this is a p tag.</p>
      <p style={{fontSize: '60px', color: 'red'}}>this is another p tag.</p>
      <p className="container"></p> */}
    </div>
  );
}

/*
  React.createElement(
    "div",
    null,
    React.createElement(Todo, null)
  );
  var todo = new Todo()
  return todo.render()
*/

export default App;
