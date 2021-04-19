import React from 'react'

export default function Home() {
    return (
        <div className = 'container'>
            <div class="row mt-3">
                <h1 className = 'display-1'> Louis Martin: An aspiring software developer</h1>
            </div>
            <div className = "row mt-4 projectBox">
                <div className = "col-4">
                    <img src = "https://i.redd.it/w3kr4m2fi3111.png" className = " projectImage" alt = "this image represents project 1"></img>
                </div>
                <h5 className = " display-5 col-2 projectTitle">Project1</h5>
                <p className = "col-6 projectText"> Example Project 1: Testing text wrapping do not disturb sleeping time hello world please help yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada</p>
            </div>
            <div className = "banner ">

            </div>
            <div className = "row mt-4 projectBox">
                <h5 className = " display-5 col-2 projectTitle">Project2</h5>
                <p className = "col-6 projectText"> Example Project 2: Testing text wrapping do not disturb sleeping time hello world please help yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada</p>
                <div className = "col-4">
                    <img src = "https://i.redd.it/w3kr4m2fi3111.png" className = " projectImage" alt = "this image represents project 2"></img>
                </div>
            </div>
            
            
        </div>
    )
}
