import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import {addTodo, completeTodo, showComplete} from "./redux/actions";
import ReduxContext from "./contexts/ReduxContext";
import { Provider } from 'react-redux';

// store.subscribe(() => {
//     const state = store.getState();
//     console.log('changed', state);
// });
//
// // store.dispatch(액션)
// store.dispatch(addTodo("할일"));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ReduxContext.Provider value={store}>
          <App />
      </ReduxContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
