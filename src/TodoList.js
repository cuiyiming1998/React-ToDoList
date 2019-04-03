import React, { Component } from 'react'
import store from './store';
import { connect } from 'react-redux';
//2019.3.28

export default class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            list:store.getState().todo.list
        }
        console.log(this.state.list)
        store.subscribe(()=>{//改变就更新
            this.setState({
                list:store.getState().todo.list
            })
        })
    }
    handleAdd=(e)=>{
        if (e.which !== 13) return;
        // if (e.keyCode === 13) {
        store.dispatch({
            type: 'add_item',
            value:e.target.value
        })
        // }
        e.target.value=''
    }
    handleDec=(index)=>{
        // console.log(index);
        store.dispatch({
            type: 'dec_item',
            value: index
        })
    }
    render() {
        return (
            <div>
                <input onKeyPress={(e)=>{this.handleAdd(e)}} type="text"/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li>
                                <span>{item}</span>
                                <input key={index} type="button" value="删除" onClick={()=>{this.handleDec(index)}}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
