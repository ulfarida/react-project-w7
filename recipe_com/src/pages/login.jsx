import React, { Component } from 'react';
// import Header from "../components/header"
import { withRouter } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"
import logo from '../images/logo-orange.svg'
import '../style/login.css'

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
                    store.setState({fullname : response.data.fullname})
                    store.setState({username : response.data.username})
                    store.setState({email : response.data.email})
                    store.setState({token : response.data.token})
                    store.setState({picture : response.data.picture})
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
                    <div className="login-container">
                        <div className="avatar">
                            <img style={{width:'90%'}} src={logo} alt=""/>
                            <h4 style={{ color:'#F28705', fontWeight:'900'}}>Recipe.com</h4>
                        </div>
                        <div className="form-box">
                            <form action="" method="" onSubmit={e => e.preventDefault()}>
                                <input name="username" type="text" placeholder="username" onChange={e => this.props.setInput(e)} />
                                <input type="password" placeholder="password"  onChange={e => this.props.setInput(e)} />
                                <button className="btn btn-info btn-block login" type="submit" onClick={() => this.afterSignin()}>Login</button>
                            </form>
                        </div>
                    </div>   
            </div>    
        );
    }
}

export default connect("username, password", actions)(withRouter(Login));