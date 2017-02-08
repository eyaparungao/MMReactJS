'use strict';

var React = require('react');

var TextArea = React.createClass({
    render: function() {
        return (
            <textarea 
                className="form-control"
                name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.onChange}>
            </textarea>
        )
    }
});

module.exports = TextArea;