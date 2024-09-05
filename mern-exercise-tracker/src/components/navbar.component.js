import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            // Navbar from Bootstrap documentation with minor changes (special classes for style using bootstrap styles)
            <nav className= "navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ExerTracker</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to = "/" className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Create Exercise</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to = "/" className="nav-link">Create User</Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}