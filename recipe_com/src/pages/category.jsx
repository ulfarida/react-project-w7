import React from 'react';
import Header from '../components/Header'; 
import ListRecipe from '../components/ListRecipe';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import '../style/bootstrap.min.css'
import '../style/home.css'
import '../style/recipe.css'
import background from '../images/background.jpg'
import logo from '../images/logo-orange.svg'

const urlHeadLine = "https://api.edamam.com/search?app_id=7173ea48&app_key=609f58237cd3b846b334f7b7e3f681b2&q="

class Category extends React.Component {
    getRecipe = async () => {
        const category = await this.props.match.params.category
        this.props.setChange('category', category)
        await this.props.handleGetApi(urlHeadLine+category)
        const data = await this.props.data
        if(data.hits!==undefined){
            const dict = {
                isLoading: false,
                listRecipe: data.hits
            }
            await this.props.setManyChanges(dict)
        }
    }

    componentDidMount = async () =>{
        await this.getRecipe()
    }

    componentDidUpdate = async () => {
        console.log('this is inside will update')
        const category = await this.props.match.params.category
        console.log(category, this.props.category)
        if(this.props.category!==category){
            await this.props.setChange('isLoading', true)
            console.log('check change', this.props.isLoading)
        }
    }

    componentWillUpdate = async () =>{
        console.log('this is inside update')
        const category = await this.props.match.params.category
        if(this.props.category!==category){
            await this.getRecipe()
            await this.props.setChange('category', category)
        }
    }


    render () {
        console.log(this.props.isLoading)
        let recipeToShow;
        if(this.props.listRecipe!==undefined && this.props.listRecipe!==null){
            const listRecipe = this.props.listRecipe;
            console.log(listRecipe)
            recipeToShow = listRecipe.map((item, key)=>{
                return(
                    <ListRecipe
                    key={key}
                    number={key}
                    image={item.recipe.image}
                    title={item.recipe.label}
                    {...this.props}
                    />
                )
            })
        }
        return (
            <React.Fragment>
                <Header />
                <div className="container-fluid">
                    {this.props.isLoading?
                    null
                    :
                    <React.Fragment>
                        <Link onClick = {()=>this.props.history.push('/recipe/'+this.props.number)}>
                            <div className="category-title text-center brief-box">
                                <h1>{this.props.category}</h1>
                            </div>
                        </Link>
                        <div className="row search-result" style={{marginTop:'20px'}}>
                            {recipeToShow}
                        </div>
                    </React.Fragment>
                    }
                </div>
            </React.Fragment>

        )
    }
}
export default connect('isLoading, data, search, listRecipe, category',actions)(withRouter(Category));
