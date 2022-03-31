// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <p>Hello React</p>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css'

// 10.变量定义应改为变量 state
// const selectColor = false
// let num = 1

export default class App extends Component {
  // 10.变量定义应改为变量 state, 引用使用 this.state.num, 修改使用 this.setState({num: this.state.num + 1})
  state = {
    selectColor: false,
    num: 1
  }
  render() {
    return (
      // 1.此处注释 // 而非 {/* */}; 2.HTML class 改为 className; 3.CSS由 import 引入, 语法未变
      <div className="App">
        {/* 4.内部 style 用 React {style} 语法, 如 {backgroundColor: selectColor ? 'blue' : 'green'} */}
        {/* 5.三元运算符判断: backgroundColor: selectColor ? 'blue' : 'green' */}
        <div style={{width: '100%', height: '50px', backgroundColor: this.state.selectColor ? 'blue' : 'green'}}></div>
        {/* 6.HTML label 标签的 for 改为 htmlFor 与 for 循环区别 */}
        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' />
        {/* 7.变量传递 HTML 中的 JS 用 {} 包含，即遵循 JSX 语法*/}
        <p>Num: {this.state.num}</p>
        {/* 8.单句函数: () => function() */}
        <button onClick={() => this.setState({num: this.state.num + 1})}>Button</button>
        {/* 9.完整函数: () => {function()}, 注意改变变量需要赋值*/}
        <button onClick={() => {
          this.setState({num: this.state.num + 1})
        }}>
          Button
        </button>
      </div>
    )
  }
}