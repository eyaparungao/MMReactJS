'use strict';

var React = require('react');
var Header = require('./common/Header');
var Footer = require('./common/Footer');

var Layout = function(props) {
    return (
        <div>
            <Header/>
            <div className="container">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
};

module.exports = Layout;