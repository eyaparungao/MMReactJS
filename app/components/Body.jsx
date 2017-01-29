var React = require('react');
var ReactBootstrap = require('../../node_modules/react-bootstrap/dist/react-bootstrap.js');
var Panel = ReactBootstrap.Panel;
var TaskList = require('./TaskList.jsx');

var Body = React.createClass({
    render: function() {
        return (   
            <section> 
                <Panel header={this.props.title} bsStyle="primary">
                    <TaskList columns={this.props.columns} data={this.props.data}/>
                </Panel>
            </section>
        );
    }
});

module.exports = Body;