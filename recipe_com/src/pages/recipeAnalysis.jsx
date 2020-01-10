import React, { Component } from 'react';
// import Header from "../components/header"
import { withRouter } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"
import logo from '../images/logo-orange.svg'

class RecipeAnalysis extends Component {
    // input ingredients json body, method post
    nutritionGetApi = () => {
        const self = this
        const input = {
            ingr : this.props.ingredients.split(',')
        }
        console.log('cek input',input)
        axios
            .post("https://api.edamam.com/api/nutrition-details?app_id=8615d785&app_key=7fa308a07eadeecabb5e58925396a331", input)
            .then(function(response) {
                console.log('cek response',response)
                if(response.data.hasOwnProperty("calories")) {
                    console.log('cek response',response.data.calories)
                    store.setState({calories : response.data.calories})
                }
            })
            .catch(function(error) {
                console.log(error)
                store.setState({calories : 'coba lagi'})
            })
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                        <div className="form-box">
                            <form action="" method="" onSubmit={e => e.preventDefault()}>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Input ingredients</label>
                                    <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="10" placeholder="ingredients" name="ingredients" onChange={e => this.props.setInput(e)}></textarea>
                                </div>
                                <button className="btn btn-info btn-block login" type="submit" onClick={() => this.nutritionGetApi()}>Analyze your meal</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                        <h1>
                            {this.props.calories}
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect("ingredients, calories", actions)(withRouter(RecipeAnalysis));
