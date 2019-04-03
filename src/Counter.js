import React, { Component } from 'react'
import store from './store';
//2019.3.28
//store 连接action和Reducer的一个对象
//action是一个对象,描述state的变化
//Reducer定义了如何响应action描述的state的变化,并发送到store

export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            num:store.getState().counter
        }
        // console.log(this.state);
        store.subscribe(()=>{//改变就更新
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd = () =>{    //+
        let action = {type:'ADD',value:1}
        store.dispatch(action);
        // console.log(store.getState());
    }
    handleDEC = () =>{    //—
        let action = {type:'DEC',value:1}
        store.dispatch(action);
        // console.log(store.getState());
    }
    handleOdd = () =>{    //incrementIfOdd
        if (store.getState().counter%2 !== 0) {
            let action = {type:'ADD',value:1}
            store.dispatch(action);
            // console.log(store.getState());
        }
    }
    handleAsync = () =>{    //incrementAsync
        setTimeout(function () {
            let action = {type:'ADD',value:1}
            store.dispatch(action);
        }, 1000)
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span id="value">{this.state.num}</span> times
                    <button id="increment" onClick={this.handleAdd}> + </button>&nbsp;
                    <button id="decrement" onClick={this.handleDEC}> - </button>&nbsp;
                    <button id="incrementIfOdd" onClick={this.handleOdd}>Increment if odd</button>&nbsp;
                    <button id="incrementAsync" onClick={this.handleAsync}>Increment async</button>
                </p>
            </div>
        )
    }
}
