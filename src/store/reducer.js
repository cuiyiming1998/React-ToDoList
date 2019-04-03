import { combineReducers } from 'redux';

let counter=(state=0,action)=>{
    switch(action.type){
        case 'ADD':
            return state + action.value;//原来的＋1
        case 'DEC':
            return state - action.value;
        default:
            return state;
    }
}

let initValue = {
    list:[1,2,3]
}
let todo=(state=initValue,action)=>{
    switch(action.type){
        case 'add_item':
            let newState = JSON.parse(JSON.stringify(state))//方法1
            // let obj = Object.assign({},state) //方法2
            newState.list.push(action.value);
            return newState;
        case 'dec_item':
            let deleteState = JSON.parse(JSON.stringify(state));
            deleteState.list.splice(action.index,1);
            return deleteState;
        default:
            return state;
    }
}
export default combineReducers({
    counter,todo
})