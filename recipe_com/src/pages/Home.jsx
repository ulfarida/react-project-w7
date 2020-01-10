import React from 'react';
import Header from '../components/Header'; 
import ListRecipe from '../components/ListRecipe';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import '../style/bootstrap.min.css'
import '../style/home.css'
import background from '../images/background.jpg'
import logo from '../images/logo-orange.svg'

const urlHeadLine = "https://api.edamam.com/search?app_id=7173ea48&app_key=609f58237cd3b846b334f7b7e3f681b2&q="

class Home extends React.Component {
    handleSearch = async () =>{
        const keyword = await this.props.search
        console.log(keyword)
        console.log(this.props)
        await this.props.handleGetApi(urlHeadLine+keyword)
        this.props.history.replace({pathname: '/search', search: '?q='+keyword})
        const data = await this.props.data
        const dict = {
            isLoading: false,
            listRecipe: data.hits
        }
        await this.props.setManyChanges(dict)
        console.log(this.props.listRecipe)
    }

    render () {
        let recipeToShow;
        if(this.props.listRecipe!==undefined){
            const listRecipe = this.props.listRecipe;
            console.log(listRecipe)
            recipeToShow = listRecipe.map((item, key)=>{
                return(
                    <ListRecipe
                    key={key}
                    number={key}
                    image={item.recipe.image}
                    title={item.recipe.label}
                    {...this.props}/>
                )
            })
        }
        return (
            <React.Fragment>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 title">
                            <img src={background} alt="ingredient"/>
                            <div className="title-overlay"></div>
                            <div className="title-logo">
                                <img src={logo} alt="logo-recipe"/>
                                <h1>Recipe.com</h1>
                            </div>
                            <form className="form-inline my-2 my-lg-0 search">
                                <input className="form-control search-form"
                                    type="search" 
                                    name="search"
                                    placeholder="Search"
                                    aria-label="Search" 
                                    value={this.props.search}
                                    onChange={event => this.props.setInput(event)}
                                    />
                                <Link className="btn my-2 my-sm-0 search-btn"
                                    onClick={this.handleSearch}>
                                    <i className='material-icons'>search</i>
                                </Link>
                            </form>
                        </div>
                    </div>
                    {this.props.isLoading?
                    null
                    :
                    <div className="row search-result">
                        {recipeToShow}
                    </div>
                    }

                </div>
            </React.Fragment>

        )
    }
}
export default connect('isLoading, data, search, listRecipe',actions)(withRouter(Home));
