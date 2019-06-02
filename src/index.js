import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import Store from  "./store"

function fancyLog() {
  console.log("%c the state is :", "background: purple; color: #fff")
  console.log(Store.getState())
}

function render(){
  fancyLog()
  ReactDOM.render(<App />, document.getElementById('root'));
}

render()

Store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
