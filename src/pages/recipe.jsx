import React from 'react';
import Header from '../components/Header'; 
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import '../style/bootstrap.min.css'
import '../style/recipe.css'

class Recipe extends React.Component{
    componentDidMount = async () => {
        const index = await this.props.match.params.index;
        const listRecipe = await this.props.listRecipe;
        const currentRecipe = listRecipe[index];
        if(currentRecipe==null){
            this.props.history.replace('/not_match')
        }
        await this.props.setChange('recipeData', currentRecipe)
    }

    render() {
        const recipe = this.props.recipeData
        let recipeDetail;
        if(recipe!==undefined){
            recipeDetail = recipe.recipe
            console.log(recipeDetail)
        }
        return(
            <React.Fragment>
                <Header/>
                {recipeDetail!==undefined?
                <div className="container mt-lg-5 mb-5">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 outer-box pr-0 pl-0">
                            <div className="col-12 img-action-box pr-0 pl-0">
                                <img src={recipeDetail.image} alt="recipe-outcome"/>
                                <div className="list-action bg-light-orange">
                                    <Link to="">
                                        <i className="material-icons">favorite</i>
                                    </Link>
                                    <Link to="">
                                        <i className="material-icons">share</i>
                                    </Link>
                                    <Link to="">
                                        <i className="material-icons">thumb_down</i>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-12 brief-box">
                                <h1>{recipeDetail.label}</h1>
                                <br/>
                                <div className="row nutrition-brief shadow-sm">
                                    <div className="col-md-3 col-6">
                                        <h4>Calories</h4>
                                        <p>{Math.round(recipeDetail.calories)}kcal</p>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <h4>Total Fat</h4>
                                        <p>{Math.round(recipeDetail.totalNutrients.FAT.quantity)}gr</p>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <h4>Total Protein</h4>
                                        <p>{Math.round(recipeDetail.totalNutrients.PROCNT.quantity)}gr</p>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <h4>Total Weight</h4>
                                        <p>{Math.round(recipeDetail.totalWeight)}gr</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 ingredient-box">
                                <h2>Ingredient List</h2>
                                <ul>
                                    {
                                        recipeDetail.ingredientLines.map((item)=>{
                                            return(
                                                <li>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            
                            <div className="row link-box">
                                <div className="col-lg-6 col-md-6 col-sm-6 video-btn">
                                    <Link>
                                        <i className="material-icons">visibility</i>
                                        <h2>Watch Video</h2>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 more-btn">
                                    <a href={recipeDetail.url}>
                                        <i className="material-icons">image_search</i>
                                        <h2>View Instruction</h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
                :
                null
                }
            </React.Fragment>
        )
    }
}

export default connect("listRecipe, recipeData", actions)(withRouter(Recipe))