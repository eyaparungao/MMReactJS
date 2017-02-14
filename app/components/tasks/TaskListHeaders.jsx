import React, { Component } from 'react';
import TaskListHeaderItem from './TaskListHeaderItem';

export default class TaskListHeaders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSortKey: this.props.activeSortKey,
            columns: this.props.columns
        };
    }

    handleHeaderClick(id, sortOrder) {
        this.props.onSetActiveSortKey(id, sortOrder);
        this.setState({ activeSortKey: id });
    }
    
    renderHeaderItems() {
        //TODO
        return this.state.columns.map(function(column) {      
            const headerItemAttributes = {
                className: column.className,
                title: column.title,
                key: column.id,
                id: column.id,
                sortable: column.sortable,
                activeSortKey: column.id == this.state.activeSortKey,
                onHeaderClick: this.handleHeaderClick
            };   
            return (
                <TaskListHeaderItem { ...headerItemAttributes } />
            );
        }, this);        
    }

    renderSortIcon() {
        if (this.props.sortable && this.state.activeSortKey) {
            if (this.props.sortOrder == "ASC") {
                return (
                    <i 
                        className="fa fa-sort-asc" 
                        style={{verticalAlign: "middle"}}>
                    </i>
                );
            } else {
                return (
                    <i 
                        className="fa fa-sort-desc" 
                        style={{verticalAlign: "middle"}}>
                    </i>
                );
            }
        }        
        return;
    }
    
    render() {
        return (    
            <tr>
                { this.renderHeaderItems() }
            </tr>
        );
    }
}

TaskListHeaders.defaultProps = {
    title: "",            
    sortable: false,
    sortOrder: "ASC"
};