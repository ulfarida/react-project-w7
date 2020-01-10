import React from 'react';
import '../style/bootstrap.min.css';
import '../style/home.css';
import { withRouter, Link } from "react-router-dom";


const ListRecipe = (props) => {
    return(
        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
            <div className="img-box">
                <img src={props.image} alt="recipe-image" width="100%"/>
                <div className="title-popup">
                    <Link onClick = {()=>props.history.push('/recipe/'+props.number)}>
                        <h4>{props.title}</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ListRecipe