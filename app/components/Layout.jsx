'use strict';

var React = require('react');

var Layout = function(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
};

module.exports = Layout;