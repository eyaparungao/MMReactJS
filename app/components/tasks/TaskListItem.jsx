'use strict';

var React = require('react');
var priorityEnum = require("../../enums/priorityEnum");
var statusEnum = require("../../enums/statusEnum");

var InputText = require("../controls/InputText");
var DropDownList = require("../controls/DropDownList");

var TaskListItem = React.createClass({ 
    getInitialState: function() {
        return {
            isReadOnly: false
        };
    },
    handleDeleteTask: function() {
        this.props.onDeleteTask();
    },
    handleEditTask: function() {
        this.setState({ isReadOnly: true });
    },
    renderPriorityColumn: function() {
        if (this.state.isReadOnly) {
            return (
                <td className="task-priority">{priorityEnum.toString(this.props.task.priority)}</td>
            );
        }
        else {
            return (
                <td className="task-priority">
                    <DropDownList 
                        name="priority"
                        defaultValue={this.props.task.priority}
                        items={priorityEnum.getAllPriorities()} 
                        onChange={this.setState}/>
                </td>
            );
        }
    },
    renderStatusColumn: function() {
        if (this.state.isReadOnly) {
            return (
                <td className="task-status">{statusEnum.toString(this.props.task.statusId)}</td>
            );
        }
        else {
            return (
                <td className="task-priority">
                    <DropDownList 
                        name="status"
                        defaultValue={this.props.task.statusId}
                        items={statusEnum.getAllStatuses()} 
                        onChange={this.setState}/>
                </td>
            );
        }
    },
    renderTaskDetailColumn: function() {
        if (this.state.isReadOnly) {
            return (
                <td className="task-detail">
                    <div className="task-name">{this.props.task.name}</div>
                    <div className="task-description">&nbsp;&nbsp;&nbsp;{this.props.task.description}</div>
                </td>
            );
        } else {
            return (
                <td className="task-detail">
                    <div>
                        <InputText 
                            className="task-name"
                            value={this.props.task.name}
                            onChange={this.setState}/>
                    </div>
                    <div>
                        <InputText 
                            className="task-description"
                            value={this.props.task.description}
                            onChange={this.setState}/>
                    </div>
                </td>
            );
        }
    },
    renderButtonsColumn: function() {
        if (this.state.isReadOnly) {
            return (
                <td>
                    <button className="btn btn-sm"
                        title="Edit Task"
                        onClick={this.handleEditTask}>
                        <i className="fa fa-pencil"></i>
                    </button>&nbsp;
                    <button className="btn btn-sm"
                        title="Delete Task"
                        onClick={this.handleDeleteTask}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            );
        }
        else {
            return (
                <td>
                    <button className="btn btn-sm"
                        title="Save Task">
                        <i className="fa fa-save"></i>
                    </button>&nbsp;
                    <button className="btn btn-sm"
                        title="Cancel">
                        <i className="fa fa-remove"></i>
                    </button>
                </td>
            );
        }
    },
    setTaskState: function(event) {
        console.log(event);
        this.setState({ task: this.state.task })
    },
    render: function() {
        return (
            <tr>
                {this.renderTaskDetailColumn()}
                {this.renderPriorityColumn()}
                {this.renderStatusColumn()}
                {this.renderButtonsColumn()}
            </tr> 
        )
    }
});

module.exports = TaskListItem;