import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {combineReducers, legacy_createStore as createStore} from 'redux';
//import rootReducer from "./reducers/rootReducer";

// let store = createStore(()=>{
// return [
//   {id : 0, name : '멋진신발', quan : 2}
//   ]

// });

let 초기값 = [
 
  {id : 0, name : '멋진신발', quan : 2}
  ,{id : 1, name : '멋진신발2', quan : 10}
  ,{id : 2, name : '멋진신발3', quan : 30}
 
 ];


function reducer(state = 초기값, 액션){

  //
  if(액션.type === '항목추가') {

    //
    let findIndex = state.findIndex((a)=>{
      return a.name === 액션.payload.name;
    })

    if(findIndex>=0){
      let copy = [...state];
      copy[findIndex].quan = copy[findIndex].quan + 액션.payload.quan;
      console.log("copy1",copy);
      return copy;
    }else{
      let copy = [...state];
      copy.push(액션.payload);
     // console.log(copy);
    //console.log("payload",액션.payload);
    console.log("copy2",copy);
      return copy;
    }
    

 
  }else if (액션.type === '수량증가') {
    let copy = [...state];
    copy[액션.idx].quan++; 
    return copy
  }else if (액션.type === '수량감소') {
    let copy = [...state];
    copy[액션.idx].quan--; 
    return copy
  }
  else {
    return state
  }
}
 


let alertDefault = true;

function reducer2(state = alertDefault, action){

  if(action.type==='close'){
    state=false;
    return state;
  }else{
    return state;
  }  
}

//let mystore = createStore(reducer);
let mystore = createStore( combineReducers({reducer, reducer2}));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <BrowserRouter>
      <Provider store={mystore}>
        <App />
      </Provider>
    </BrowserRouter>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
