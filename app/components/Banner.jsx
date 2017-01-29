var React = require('react');
var ReactBootstrap = require('../../node_modules/react-bootstrap/dist/react-bootstrap.js');
var PageHeader = ReactBootstrap.PageHeader;

var Banner = React.createClass({
    render: function() {
        return (
            <div className='banner'>
                <PageHeader>Banner</PageHeader>
            </div>
        );
    }
});

module.exports = Banner;