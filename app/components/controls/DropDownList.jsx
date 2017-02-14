import React, { Component } from 'react';

export default class DropDownList extends Component {
    renderItems() {
        //TODO
        return this.props.items.map((item) => {
            return(
                <option
                    key = { item.key }
                    value = { item.key }>
                    { item.value }
                </option>
            );
        }, this);
    }

    render() {
        const dropdownListAttributes = {
            className: 'form-control',
            name: this.props.name,
            defaultValue: this.props.defaultValue,
            onChange: this.props.onChange
        };

        return (
            <select { ...dropdownListAttributes }>
                { this.renderItems() }
            </select>
        )
    }
}