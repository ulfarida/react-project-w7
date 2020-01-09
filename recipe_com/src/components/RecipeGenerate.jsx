import React from 'react'
import '../styles/bootstrap.min.css'

function RecipeGenerator(urlImage, title){
    return (
        <div className="col-md-4">
            <div class="card" style={{width: '70%'}}>
                <img src={urlImage} class="card-img-top"/>
                <div class="card-body">
                    <div className="card-title">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    )
}
    
    

export default RecipeGenerator;