import React, { Component } from 'react';
import { Table, Panel } from '../../../node_modules/react-bootstrap/dist/react-bootstrap.js'
import TaskList from './TaskList';
import TaskApi from '../../api/taskApi';

const columns = [{
        id: 1,
        title: "Task Details",
        sortField: "name",
        className: "task-header col-lg-4",
        sortable: true
    }, {
        id: 2,
        title: "Priority",
        sortField: "priority",
        className: "task-header col-lg-2",
        sortable: true
    }, {
        id: 3,
        title: "Status",
        sortField: "status",
        className: "task-header col-lg-2",
        sortable: true
    }, {
        id: 4,
        title: "",
        className: "task-header col-lg-1",
        sortable: false
    }
];

export default class TaskContainer extends Component {
    render() {
        const panelAttributes = {
            header: this.props.title,
            bsStyle: 'primary'
        };
        const taskListAttributes = {
            data: TaskApi.getAllTasks(),
            columns: columns
        };
        return (    
            <section> 
                <Panel { ...panelAttributes }>
                    <TaskList { ... taskListAttributes } />
                </Panel>
            </section>
        );
    }
}