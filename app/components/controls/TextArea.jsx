import React, { Component } from 'react';

export default class TextArea extends Component {
    render() {
        const textAreaAttributes = {
            className: 'form-control',
            name: this.props.name, 
            placeholder: this.props.placeholder,
            value: this.props.value,
            onChange: this.props.onChange
        };

        return (
            <textarea { ...textAreaAttributes }></textarea>
        )
    } 
}