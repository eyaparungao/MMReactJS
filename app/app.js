'use strict';

var React = require('react');
var ReactDOM = require ('react-dom');
var Bootstrap = require('../node_modules/bootstrap/dist/js/bootstrap.js');
var ReactBootstrap = require('../node_modules/react-bootstrap/dist/react-bootstrap.js');

var Header = require('./components/header.js');
var Banner = require('./components/banner.js');
var Body = require('./components/body.js');
var Card = require('./components/card.js');
var Footer = require('./components/footer.js');

ReactDOM.render(
    <div className='container'>
        <Header/>
        <Banner/>
        <Body/>
        <div>
            <Card/><Card/><Card/>
        </div>
        <Footer/>
    </div>, 
    document.getElementById('app'));
