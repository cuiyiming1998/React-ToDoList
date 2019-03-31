import React, { Component,Fragment } from 'react';
import './App.css';
import TodoItem from './TodoItem';

// TodoList知识点：
// js的this绑定，写在dom上的方法this会指向dom元素，需要用bind绑定this到class
// 父组件通过参数的形式向子组件传递参数
// 子组件通过props接收父组件传递过来的参数
// 父子组件通信，子组件通过父组件传递过来的方法，触发父组件上绑定的方法，达到通信的目的

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemClick(index) {
    console.log(index);
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list
    })
  }

  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接收父组件传递过来的参数

  handleDelete(index) {
    console.log(index);
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list
    })
  }

  getTodoItem() {
    return this.state.list.map((item,index)=>{
      return (
        <TodoItem deleteItem={this.handleDelete} key={index} content={item} index={index} />
      )
    })
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.handleInputChange} />
        <button className="red-btn" onClick={this.handleBtnClick}>Add!</button>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
