import React from 'react'
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import '../styles/bootstrap.min.css'

class Header extends React.Component {
    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
				<Link to='/'  className="navbar-brand">
                        <img className='App-logo' src={require('../images/logo.svg')} width="50px"/><span>KabarKabar</span>
                </Link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
					<ul class='navbar-nav ml-auto'>
						<li class="nav-item">
							<Link to="/" className="nav-link">Movie</Link>
						</li>
						<li class="nav-item">
							<Link to="profile" className="nav-link">Profile</Link>
						</li>
                        <li class="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/logout" className="nav-link">Logout</Link>
                        </li>
					</ul>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
				</div>
			</nav>
		)
	}
}

export default connect('dummy',actions)(withRouter(Header));
