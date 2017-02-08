'use strict';

var React = require('react');
var priorityEnum = require("../../enums/priorityEnum");
var statusEnum = require("../../enums/statusEnum");
var TaskApi = require("../../api/taskApi");

var InputText = require("../controls/InputText");
var TextArea = require("../controls/TextArea");
var DropDownList = require("../controls/DropDownList");

var TaskListItem = React.createClass({ 
    getInitialState: function() {
        return {
            isReadOnly: true,
            task: this.props.task
        };
    },
    handleDeleteTask: function() {
        this.props.onDeleteTask();
    },
    handleEditTask: function() {
        this.setState({ isReadOnly: false });
    },
    handleSaveTask: function() {
        TaskApi.saveTask(this.state.task);
        this.setState({ isReadOnly: true });
    },
    handleCancelTask: function() {
        this.setState({ isReadOnly: true });
    },
    renderPriorityColumn: function() {
        if (this.state.isReadOnly) {
            return (
                <td className="task-priority">{priorityEnum.toString(this.state.task.priority)}</td>
            );
        }
        else {
            return (
                <td className="task-priority-edit">
                    <DropDownList 
                        name="priority"
                        defaultValue={this.state.task.priority}
                        items={priorityEnum.getAllPriorities()} 
                        onChange={this.setTaskState}/>
                </td>
            );
        }
    },
    renderStatusColumn: function() {
        if (this.state.isReadOnly) {
            return (
                <td className="task-status">{statusEnum.toString(this.state.task.status)}</td>
            );
        }
        else {
            return (
                <td className="task-status-edit">
                    <DropDownList 
                        name="status"
                        defaultValue={this.state.task.status}
                        items={statusEnum.getAllStatuses()} 
                        onChange={this.setTaskState}/>
                </td>
            );
        }
    },
    renderTaskDetailColumn: function() {
        if (this.state.isReadOnly) {
            return (
                <td className="task-detail">
                    <div className="task-name">{this.state.task.name}</div>
                    <div className="task-description">&nbsp;&nbsp;&nbsp;{this.state.task.description}</div>
                </td>
            );
        } else {
            return (
                <td className="task-detail">
                    <div>
                        <InputText 
                            name="name"
                            className="task-name"
                            value={this.state.task.name}
                            onChange={this.setTaskState}/>
                    </div>
                    <div>
                        <TextArea 
                            name="description"
                            className="task-description"
                            value={this.state.task.description}
                            onChange={this.setTaskState}/>
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
                        title="Save Task"
                        onClick={this.handleSaveTask}>
                        <i className="fa fa-save"></i>
                    </button>&nbsp;
                    <button className="btn btn-sm"
                        title="Cancel"
                        onClick={this.handleCancelTask}>
                        <i className="fa fa-remove"></i>
                    </button>
                </td>
            );
        }
    },
    setTaskState: function(event) {
        if (event.target.nodeName === "SELECT") {
            this.state.task[event.target.name] = Number(event.target.value);
        } else {
            this.state.task[event.target.name] = event.target.value;
        }
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