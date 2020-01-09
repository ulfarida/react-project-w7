import React, { Component } from 'react';
import Header from "../components/Header"
import ListArticle from "../components/articleContent"
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"
import '../style/articles.css'

const apiKey = "58fecc904b4e40ef920ae5582000d89a";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=us&category=health&apiKey=" + apiKey;

class Articles extends Component {
    componentDidMount = () => { 
        axios
            .get(urlHeadline)
            .then(function(response) {
                store.setState({ listArticle: response.data.articles, isLoading: false})
            })
            .catch(function(error) {
                store.setState({ isLoading: false })
            })
        }
    render () {
        const listArticle = this.props.listArticle
        const isLoading = this.props.isLoading
        const articleItem = listArticle.filter(item => {
            if (item.content !== null && item.image !== null) {
                return item;
            }
            return false;
        })

        const fullArticle = articleItem.map((item, key) => {
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

        return (
            <div>
                <Header {...this.props} />
                <div className="row">
                    <div className="col-md-3 col-12"></div>
                    <div className="col-md-6 col-12">
                        <h2 className="text-center">Health News</h2>
                        {fullArticle}
                    </div>
                </div>
            </div>    
        );
    }
}

export default connect("listArticle, isLoading", actions)(Articles);