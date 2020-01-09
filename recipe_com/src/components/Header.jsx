import React from 'react';
import '../style/bootstrap.min.css';
import '../style/header.css';
import logo from '../images/logo.svg';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../store/store";

class Header extends React.Component{
    handleLogout = () => {
        this.props.setChange('auth', false);
        this.props.history.push('/');
        alert('You have succesfully logged out!')

    }

    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-orange">
                    <Link className="navbar-brand mr-5" to="/">
                        <img src={logo} alt="logo-web" style={{height:'40px'}}/>
                        <span className="logo-name">Recipe.com</span>
                        </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        { this.props.auth? 
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Article</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" id="categoryToogle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</Link>
                                <div class="dropdown-menu bg-warning" aria-labelledby="categoryToogle">
                                    <Link class="dropdown-item">Breakfast</Link>
                                    <Link class="dropdown-item">Lunch</Link>
                                    <Link class="dropdown-item">Dinner</Link>
                                    <Link class="dropdown-item">Dessert</Link>
                                </div>
                            </li>
                        </ul>
                        : null
                        }
                        {this.props.auth?
                        <div className="dropdown nav-item">
                            <Link className="nav-link dropdown-toggle" role="button" id="othersToggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>Profile</span>
                                <img className="small-profile-pic ml-2" src={require("../images/avatar1.png")} alt="profile"/>
                            </Link>
                            <div class="dropdown-menu bg-warning profile-dropdown" aria-labelledby="categoryToogle">
                                <Link class="dropdown-item" to="/profile">Profile</Link>
                                <Link class="dropdown-item">Check Recipe</Link>
                                <Link class="dropdown-item" onClick={this.handleLogout}>Logout</Link>
                            </div>
                        </div>
                        :
                        <ul className="navbar-nav ml-auto mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item mr-0">
                                <Link className="nav-link">Register</Link>
                            </li>
                        </ul>
                        }
                    </div>
                    </nav>
            </React.Fragment>
        )
    }
}

export default connect("auth, image", actions)(withRouter(Header))