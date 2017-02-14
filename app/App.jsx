import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import Routes from './Routes';
import About from './components/About';
import TaskApi from './api/taskApi';
import Style from '../public/css/style.css';
import FontAwesome from 'font-awesome/css/font-awesome.css';

TaskApi.initializeTasks();
TaskApi.getAllTasks();

ReactDOM.render((
    <Router history={ hashHistory }>
        { Routes }
    </Router>
), document.getElementById("app"));
