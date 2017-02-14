import React, { Component } from 'react';
import { Link } from 'react-router';
import { PageHeader } from 'react-bootstrap';

export default class Header extends Component {
    renderAboutLink() {
        return (
            <li>
                <Link 
                    to="About" 
                    activeClassName="active-menu`">
                    About
                </Link>
            </li>
        );
    }

    renderTasksLink() {
        return (
            <li>
                <Link 
                    to="Tasks" 
                    activeClassName="active-menu">
                    Tasks
                </Link>
            </li>
        );
    }

    render() {
        return (
            <div>
                <header>
                    <PageHeader>Header</PageHeader>
                </header>                  
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            { this.renderTasksLink() }
                            { this.renderAboutLink() }
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
};