var React = require('react');

var Layout = require('./Layout.jsx');
var Header = require('./Header.jsx');
var Banner = require('./Banner.jsx');
var Body = require('./Body.jsx');
var CardCollection = require('./CardCollection.jsx');
var Footer = require('./Footer.jsx');

var App = React.createClass({
    render: function() {
        return(
            <Layout>
                <Header/>
                <Banner/>
                <Body title="Task Master List" columns={this.props.columns} data={this.props.data}/>
                <CardCollection/>
                <Footer/>
            </Layout>
        );
    }
});

module.exports = App;