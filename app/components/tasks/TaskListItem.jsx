'use strict';

var React = require('react');
var priorityEnum = require("../../enums/priorityEnum");
var statusEnum = require("../../enums/statusEnum");

var TaskListItem = React.createClass({   
    handleDeleteTask: function() {
        this.props.onDeleteTask();
    },
    render: function() {
        return (
            <tr>
                <td className="task-detail">
                    <div className="task-name">{this.props.task.name}</div>
                    <div className="task-description">&nbsp;&nbsp;&nbsp;{this.props.task.description}</div>
                </td>
                <td className="task-priority">{priorityEnum.toString(this.props.task.priority)}</td>
                <td className="task-status">{statusEnum.toString(this.props.task.statusId)}</td>
                <td>
                    <button className="btn btn-sm"
                        title="Edit Task">
                        <i className="fa fa-pencil"></i>
                    </button>&nbsp;
                    <button className="btn btn-sm"
                        title="Delete Task"
                        onClick={this.handleDeleteTask}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr> 
        )
    }
});

module.exports = TaskListItem;