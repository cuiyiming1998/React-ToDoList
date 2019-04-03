import React, { Component } from 'react'
import store from './store';

export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd = () =>{    //+
        let action = {type:'ADD',value:1}
        store.dispatch(action);
    }
    handleDEC = () =>{    //—
        let action = {type:'DEC',value:1}
        store.dispatch(action);
    }
    handleOdd = () =>{    
        if (store.getState().counter%2 !== 0) {
            let action = {type:'ADD',value:1}
            store.dispatch(action);
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
