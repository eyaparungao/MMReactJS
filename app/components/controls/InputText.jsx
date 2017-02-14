import React, { Component } from 'react';

export default class InputText extends Component {
    render() {
        const inputTextAttributes = {
            type: 'text',
            className: 'form-control', 
            name: this.props.name,
            placeholder: this.props.placeholder,
            value: this.props.value,
            onChange: this.props.onChange
        };

        return (
            <input { ...inputTextAttributes }/>
        )
    }
}