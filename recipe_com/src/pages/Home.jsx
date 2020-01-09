import React from 'react'
import Header from '../components/header'
import SearchHome from '../components/searchHome'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import '../styles/bootstrap.min.css'
import  SearchResultHome from '../components/searchResultHome'

class Home extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="bg-black mt-5">
                    <SearchHome />
                </div>
                <SearchResultHome />
            </React.Fragment>

        )
    }
}
export default connect('dummy',actions)(withRouter(Home));
