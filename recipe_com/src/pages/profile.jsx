import React, { Component } from 'react';
import Header from "../components/Header"
import { withRouter } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"
import logo from '../images/logo-orange.svg'

class Profile extends Component {
    render () {
        return (
            <div>
                <Header/>
                <div className="container" style={{marginTop:'20%'}}>
                    <div className="row">
                        <div className=" col-lg-offset-3 col-lg-6">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                                                    <img className="img-circle img-responsive" src={this.props.picture}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="centered-text col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                                                    <div itemscope="" itemtype="http://schema.org/Person">
                                                        <h2> <span itemprop="name">{this.props.fullname}</span></h2>
                                                        <p itemprop="jobTitle">{this.props.username}</p>
                                                        <p itemprop="email"><a href="#">{this.props.email}</a> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default connect("username, fullname, email, picture", actions)(Profile);