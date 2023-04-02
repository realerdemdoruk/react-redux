import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

// burada reducer adında bir store oluşturduk. Bu store bir fonksiyon. Bu fonksiyonun görevi state'i döndürmek.
function reducer(state, action) {
  if (action.type === 'changeTheState') {
    return action.payload.newState;
  }

  return 'state';
}

const store = createStore(reducer);
console.log(store.getState());
// getState() fonksiyonu store'un içindeki state'i döndürür.

const action = {
  type: 'changeTheState',
  payload: {
    newState: 'my new state',
  },
};

// dispatch() fonksiyonu store'a bir action gönderir.
store.dispatch(action);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
