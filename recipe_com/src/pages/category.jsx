import React, { Component } from 'react';
import Header from "../components/Header"
import ListArticle from "../components/articleContent"
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"
import '../style/articles.css'

const app_key = "609f58237cd3b846b334f7b7e3f681b2";
const app_id = "7173ea48";
const baseUrl = "https://api.edamam.com/search";
const urlHeadline = baseUrl + "?app_key" + app_key + "&app_id=" + app_id;

class Category extends Component {
    componentDidMount = async () => { 
        await this.props.handlePostApi(urlHeadline + '&q=' + this.props.category);
    }

    render () {
        let listRecipe;
        const listArticle = this.props.data.articles
        if(listArticle!==undefined){
            console.warn('masuk')
            const articleItem = listArticle.filter(item => {
                if (item.content !== null && item.image !== null) {
                    return item;
                }
                return false;
            })
    
            listRecipe = articleItem.map((item, key) => {
                return (
                    <ListArticle 
                        key={key} 
                        title={item.title} 
                        img={item.urlToImage} 
                        content={item.description}
                        url={item.url}
                        publishedAt={item.publishedAt} />
                );
            });
        }

        return (
            <div>
                <Header {...this.props} />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-3 col-12"></div>
                        <div className="col-md-6 col-12">
                            <h2 className="text-center">Health News</h2>
                            {/* {fullArticle} */}
                        </div>
                        <div className="col-md-3 col-12"></div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default connect("isLoading, data", actions)(Category);