import React, { Component } from 'react';
import Header from "../components/Header"
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"
import '../style/recipeAnalysis.css'
import '../style/recipe.css'

class RecipeAnalysis extends Component {
    // input ingredients json body, method post
    nutritionGetApi = () => {
        const self = this
        // format input ingredients for api
        const input = {
            ingr : this.props.ingredients.split(',')
        }
        console.log('cek input',input)
        axios
            .post("https://api.edamam.com/api/nutrition-details?app_id=8615d785&app_key=7fa308a07eadeecabb5e58925396a331", input)
            .then(async function(response) {
                console.log('cek response sblm if',response)
                if(response.data.hasOwnProperty("calories")) {
                    console.log('props masuk if axios',self.props)
                    console.log('cek response',response.data.calories)
                    console.log('cek total nutri',response.data.totalNutrients)
                    await store.setState({calories : response.data.calories})
                    const totalNutrients =  response.data.totalNutrients

                    const selectedNutritiensData = {
                        [totalNutrients.ENERC_KCAL.label] :  Math.round(totalNutrients.ENERC_KCAL.quantity)+' '+totalNutrients.ENERC_KCAL.unit,
                        [totalNutrients.CHOLE.label] :  Math.round(totalNutrients.CHOLE.quantity)+' '+totalNutrients.CHOLE.unit,
                        [totalNutrients.FAT.label] :  Math.round(totalNutrients.FAT.quantity)+' '+totalNutrients.FAT.unit,
                        [totalNutrients.PROCNT.label] :  Math.round(totalNutrients.PROCNT.quantity)+' '+totalNutrients.PROCNT.unit
                        }

                    console.log('cek sesuatu',selectedNutritiensData)
                    store.setState({selectedNutritiens: selectedNutritiensData})
                    }
                }
                
            )
            .catch(function(error) {
                console.log(error)
                // if error show to user try agian
                store.setState({calories : 'try again'})
            })
        }
    render() {
        console.log('this props selectedNutritiens',this.props.selectedNutritiens)
        if(this.props.auth==false){
            return(
                <Redirect to={{pathname:'/login'}}/>
            )
        } else{
            return (
                <React.Fragment>
                    <Header/>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-sm-12">
                                <div className="form-box">
                                    <form action="" method="" onSubmit={e => e.preventDefault()}>
                                        <div class="form-group">
                                            <div className="brief-box" style={{marginTop:"-0.8em", marginBottom:"1em"}}>
                                                <h1 className="text-center">Input Ingredients</h1>
                                            </div>
                                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="6" placeholder="ingredients separate with comma (,)" name="ingredients" onChange={e => this.props.setInput(e)}></textarea>
                                        </div>
                                        <button className="btn btn-info btn-block login" type="submit" onClick={() => this.nutritionGetApi()}>Analyze your meal</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-sm-12 mt-5 mb-5">
                                <div className="wrapper-anlyzeresult d-flex flex-row">
                                    <div className="calories ml-3" style={{fontSize:'20px'}}>Energy :</div>
                                    <div className="calories ml-3" style={{fontSize:'20px'}}>{this.props.selectedNutritiens.Energy}</div>
                                </div>
                                <div className="wrapper-anlyzeresult d-flex flex-row">
                                    <div className="calories ml-3" style={{fontSize:'20px'}}>Cholesterol :</div>
                                    <div className="calories ml-3" style={{fontSize:'20px'}}>{this.props.selectedNutritiens.Cholesterol}</div>
                                </div>
                                <div className="wrapper-anlyzeresult d-flex flex-row">
                                    <div className="calories ml-3" style={{fontSize:'20px'}}>Fat :</div>
                                    <div className="calories ml-3" style={{fontSize:'20px'}}>{this.props.selectedNutritiens.Fat}</div>
                                </div>
                                <div className="wrapper-anlyzeresult d-flex flex-row">
                                    <div className="calories ml-3" style={{fontSize:'20px'}}>Protein :</div>
                                    <div className="calories ml-3" style={{fontSize:'20px'}}>{this.props.selectedNutritiens.Protein}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default connect("selectedNutritiens, ingredients, calories, auth", actions)(withRouter(RecipeAnalysis));
