import React, { Component } from 'react';
// import Header from "../components/header"
import { withRouter } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"

class Login extends Component {
    afterSignin = () => {
        const self = this
        const input = {
            username : this.props.username,
            password : this.props.password
        }
        axios
            .post("https://recipecom.free.beeceptor.com/login", input)
            .then(function(response) {
                if(response.data.hasOwnProperty("token")) {
                    store.setState({username : response.data.username})
                    store.setState({email : response.data.email})
                    store.setState({token : response.data.token})
                    store.setState({auth : true})
                    self.props.history.push("/profile")
                }
            })
            .catch(function(error) {
                console.log(error)
            })
    }
    
    render () {
        return (
            <div>
                {/* <Header {...this.props} /> */}
                <div class="container">
                    <div className="login-container">
                        <div id="output"></div>
                        <div className="avatar"></div>
                        <div className="form-box">
                            <form action="" method="">
                                <input name="user" type="text" placeholder="username"/>
                                <input type="password" placeholder="password"/>
                                <button className="btn btn-info btn-block login" type="submit">Login</button>
                            </form>
                        </div>
                    </div>   
                </div>
            </div>    
        );
    }
}

export default connect("username, password", actions)(withRouter(Login));