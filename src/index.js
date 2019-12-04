import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'
import { Provider } from 'react-redux' //เพื่อให้ app เชื่อมกับstore
import store from './redux/store/store' //เพื่อให้ app เชื่อมกับstore

ReactDOM.render(
    //เพื่อให้ app เชื่อมกับstore
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));