'use strict';

var React = require('react');
var ReactBootstrap = require('../../../node_modules/react-bootstrap/dist/react-bootstrap.js');
var Table = ReactBootstrap.Table;
var Panel = ReactBootstrap.Panel;
var TaskApi = require("../../api/taskApi");

var TaskList = React.createClass({    
    getInitialState: function() {
        return {
            tasks: TaskApi.getAllTasks()
        }
    },
    renderColumnHeaders: function() {
        return (
            <tr>
                <th className="task-header">Task Details</th>
                <th className="task-header">Priority</th>
                <th className="task-header">Status</th>
            </tr>
        );
    },
    renderTasks: function() {
        return this.state.tasks.map(function(task) {
            var priorityText = "None";
            var statusText = "None";
            
            switch (task.priority) {
                case 1: priorityText = "High"; break;
                case 2: priorityText = "Medium"; break;
                case 3: priorityText = "Low"; break;
            }   
            
            switch(task.statusId) {
                case "ToDo":
                    statusText = "To Do"; 
                    break;
                case "InProgress": 
                    statusText = "In Progress"; 
                    break;
                case "Done": 
                    statusText = "Done"; 
                    break;
            }   

            return (
                <tr key = {task.taskId}>
                    <td className="task-detail">
                        <div className="task-name">{task.name}</div>
                        <div className="task-description">&nbsp;&nbsp;&nbsp;{task.description}</div>
                    </td>
                    <td className="task-priority">{priorityText}</td>
                    <td className="task-status">{statusText}</td>
                </tr>
            );
        });
    },
    render: function() {
        return (    
            <section> 
                <Panel header="Task Master List" bsStyle="primary">
                    <Table striped bordered condensed hover>
                        <thead>{ this.renderColumnHeaders() }</thead>
                        <tbody>{ this.renderTasks() }</tbody>
                    </Table>
                </Panel>
            </section>
        );
    }
});

module.exports = TaskList;