import React from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import '../styles/bootstrap.min.css'

class SearchHome extends React.Component {
    render () {
        return (
            <div className="container-fluid mt-5">
                <form class="form-inline md-form form-sm active-purple-2 mt-5">
                    <input class="form-control form-control-sm mr-3 w-75" name="keywords" type="text" placeholder="Search"
                        aria-label="Search"
                        onChange={this.props.inputChange}
                        />
                    <button class="btn btn-outline-warning btn-rounded btn-sm my-0" onClick={this.submitSearchHandler}>Search</button>
                </form>
            </div>
        )
    }
}

export default connect('keywords, listRecipe',actions)(withRouter(SearchHome));