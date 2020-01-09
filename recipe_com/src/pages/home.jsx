import React from 'react'
import Header from '../components/Header'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import '../style/bootstrap.min.css'
import '../style/home.css'
import background from '../images/background.jpg'
import logo from '../images/logo-orange.svg'

class Home extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 title">
                            <img src={background} alt="ingredient"/>
                            <div className="title-overlay"></div>
                            <div className="title-logo">
                                <img src={logo} alt="logo-recipe"/>
                                <h1>Recipe.com</h1>
                            </div>
                            <form className="form-inline my-2 my-lg-0 search">
                                <input className="form-control search-form"
                                    type="search" 
                                    name="search"
                                    placeholder="Search"
                                    aria-label="Search" 
                                    value={this.props.search}
                                    onChange={event => this.props.setInput(event)}
                                    />
                                <button className="btn my-2 my-sm-0 search-btn" type="submit">
                                    <i className='material-icons'>search</i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
export default connect('dummy',actions)(withRouter(Home));
