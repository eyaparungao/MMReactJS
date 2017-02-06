'use strict';

import React from 'react';
import { Link } from 'react-router';
import { PageHeader } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header><PageHeader>Header</PageHeader></header>                  
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><Link to="Tasks" activeClassName="active-menu">Tasks</Link></li>
                            <li><Link to="About" activeClassName="active-menu`">About</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
};


module.exports = Header;