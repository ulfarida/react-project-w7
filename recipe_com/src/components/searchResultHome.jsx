import React from 'react'
import RecipeGenerator from './RecipeGenerate'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import '../styles/bootstrap.min.css'

class SearchResultHome extends React.Component {
    render() {
        console.log(this.props.listRecipe)
        const { listRecipe, isLoading } = this.props;
        // filter news yang ada content dan imagenya
        const filteredRecipe = listRecipe.filter(item => {
            if (item.recipe.label !== null && item.recipe.image !== null) {
                return item;
            }
            return false;
        });
        
        // USE FUNCTION FROM COMPONENT TO GENERATE RECIPE
        const ResultRecipe = filteredRecipe.map((item, key) => {
                return (
                        RecipeGenerator(item.recipe.image, item.recipe.label)
                    );
                });

        return (
            <div className="ResultHome">
                <div className="container-fluid mt-md-5">
                    <div className="row d-flex justify-content-center">
                        {isLoading ?<div style={{textAlign:"center"}}><img className="App-logo" src={require('../images/logo.svg')}/></div> : ResultRecipe }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect('listRecipe, isLoading',actions)(withRouter(SearchResultHome));
