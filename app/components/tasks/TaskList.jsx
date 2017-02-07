'use strict';

var React = require('react');
var ReactBootstrap = require('../../../node_modules/react-bootstrap/dist/react-bootstrap.js');
var Table = ReactBootstrap.Table;
var Panel = ReactBootstrap.Panel;
var TaskApi = require("../../api/taskApi");
var TaskListItem = require('./TaskListItem');

var TaskList = React.createClass({    
    getInitialState: function() {
        return {
            tasks: TaskApi.getAllTasks()
        }
    },
    handleDeleteTask: function(taskId) {
        if (taskId) {
            TaskApi.deleteTask(taskId);
            this.handleUpdateAllTasks();
        }
    },
    handleUpdateAllTasks: function() {
        this.setState({ tasks: TaskApi.getAllTasks() });
    },
    renderColumnHeaders: function() {
        return (
            <tr>
                <th className="task-header col-lg-4">Task Details</th>
                <th className="task-header col-lg-2">Priority</th>
                <th className="task-header col-lg-2">Status</th>
                <th className="task-header col-lg-1"></th>
            </tr>
        );
    },
    renderTasks: function() {
        return this.state.tasks.map(function(task) {
            return (
                <TaskListItem
                    key={task.taskId}
                    task={task}
                    onDeleteTask={this.handleDeleteTask.bind(this, task.taskId)}  />
            );
        }, this);
    },
    render: function() {
        return (    
            <section> 
                <Panel header="Task Master List" bsStyle="primary">
                    <Table striped bordered condensed hover>
                        <thead>{ this.renderColumnHeaders() }</thead>
                        <tbody>{ this.renderTasks() }</tbody>
                    </Table>
                    <div>
                        <button className="btn btn-primary">Add New Task</button>
                    </div>
                </Panel>
            </section>
        );
    }
});

module.exports = TaskList;