import React, { Component } from 'react';
import InputText from '../controls/InputText';
import TextArea from '../controls/TextArea';
import DropDownList from '../controls/DropDownList';
import TaskApi from '../../api/taskApi';
import priorityEnum from '../../enums/priorityEnum';
import statusEnum from '../../enums/statusEnum';

export default class TaskListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReadOnly: true,
            task: props.task
        };
    }

    handleCancelTask() {
        this.setState({ isReadOnly: true });
    }

    handleDeleteTask() {
        this.props.onDeleteTask();
    }

    handleEditTask() {
        this.setState({ isReadOnly: false });
    }

    handleSaveTask() {
        TaskApi.saveTask(this.state.task);
        this.setState({ isReadOnly: true });
    }

    renderPriorityColumn() {
        if (this.state.isReadOnly) {
            return (
                <td className="task-priority">
                    { priorityEnum.toString(this.state.task.priority) }
                </td>
            );
        }
        else {
            const priorityAttributes = {
                name: 'priority',
                defaultValue: this.state.task.priority,
                items: priorityEnum.getAllPriorities(),
                onChange: this.setTaskState
            };
            return (
                <td className="task-priority-edit">
                    <DropDownList { ...priorityAttributes } />
                </td>
            );
        }
    }

    renderStatusColumn() {
        if (this.state.isReadOnly) {
            return (
                <td className="task-status">
                    { statusEnum.toString(this.state.task.status) }
                </td>
            );
        }
        else {
            const statusAttributes = {
                name: 'status',
                defaultValue: this.state.task.status,
                items: statusEnum.getAllStatuses(),
                onChange: this.setTaskState
            };
            return (
                <td className="task-status-edit">
                    <DropDownList { ...statusAttributes } />
                </td>
            );
        }
    }

    renderTaskDetailColumn() {
        if (this.state.isReadOnly) {
            return (
                <td className="task-detail">
                    <div className="task-name">
                        {this.state.task.name}
                    </div>
                    <div className="task-description">
                        &nbsp;&nbsp;&nbsp;{this.state.task.description}
                    </div>
                </td>
            );
        } else {
            const taskNameAttributes = {
                name: 'name',
                className: 'task-name',
                value: this.state.task.name,
                onChange: this.setTaskState
            };
            const taskDescriptionAttributes = {
                name: 'description',
                className: 'task-description', 
                value: this.state.task.description,
                onChange: this.setTaskState
            };
            return (
                <td className="task-detail">
                    <div>
                        <InputText { ...taskNameAttributes } />
                    </div>
                    <div>
                        <TextArea { ...taskDescriptionAttributes } />
                    </div>
                </td>
            );
        }
    }

    renderButtonsColumn() { //TODO
        if (this.state.isReadOnly) {
            return (
                <td>
                    <button className="btn btn-sm btn-primary"
                        title="Edit Task"
                        onClick={this.handleEditTask}>
                        <i className="fa fa-pencil"></i>
                    </button>&nbsp;
                    <button className="btn btn-sm btn-danger"
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
                    <button className="btn btn-sm btn-success"
                        title="Save Task"
                        onClick={ this.handleSaveTask }>
                        <i className="fa fa-save"></i>
                    </button>&nbsp;
                    <button className="btn btn-sm btn-danger"
                        title="Cancel"
                        onClick={ this.handleCancelTask }>
                        <i className="fa fa-remove"></i>
                    </button>
                </td>
            );
        }
    }

    setTaskState(event) {
        if (event.target.nodeName === "SELECT") {
            this.state.task[event.target.name] = Number(event.target.value);
        } else {
            this.state.task[event.target.name] = event.target.value;
        }
        this.setState({ task: this.state.task })
    }
    
    render() {
        return (
            <tr>
                { this.renderTaskDetailColumn() }
                { this.renderPriorityColumn() }
                { this.renderStatusColumn() }
                { this.renderButtonsColumn() }
            </tr> 
        )
    }
}