import React, { Component } from 'react';
import Header from './common/header';
import Footer from './common/footer';

const Layout = function(props) {
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

export default Layout;