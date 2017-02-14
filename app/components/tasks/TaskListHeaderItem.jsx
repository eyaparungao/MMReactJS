import React, { Component } from 'react';

export default class TaskListHeaderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOrder: props.sortOrder
        }
    }

    handleColumnHeaderClick(id) {
        let sortDirection = ""
          if (this.props.sortable && this.props.activeSortKey) {
            if (this.state.sortOrder === "ASC") {
                sortDirection = "DESC";
            } else {
                sortDirection = "ASC";
            }
            this.setState({ sortOrder: sortDirection });
        }
        this.props.onHeaderClick(id, sortDirection);
    }

    renderSortIcon() {
        if (this.props.sortable && this.props.activeSortKey) {
            if (this.state.sortOrder == "ASC") {
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
            <th 
                style={{textAlign: "center"}}
                onClick={ this.handleColumnHeaderClick.bind(this, this.props.id) }>                    
                <span>{ this.props.title } </span>
                { this.renderSortIcon() }
            </th>
        );
    }
}

TaskListHeaderItem.defaultProps = {
    title: "",            
    sortable: false,
    sortOrder: "ASC"
};