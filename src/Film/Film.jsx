import React from 'react';
import './Film.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar/NavBar';

function Film (props) {
    return (
        <div className="App">
            <div class="film-container justify-content-center">
                <div class="container-fluid" id="max-container">
                    <div class="row justify-content-center align-items-center">
                        <div class="film-card-wrapper col-10 col-md-9 col-lg-8 col-xl-8" align="center">
                            <div class="card film-card col-10 col-md-9 col-lg-8 col-xl-8"><img src="horizPhoto.jpg" alt=""/></div>
                            <div class="card film-card col-10 col-md-9 col-lg-8 col-xl-8"><img src="horizPhoto.jpg" alt=""/></div>
                            <div class="card film-card col-10 col-md-9 col-lg-8 col-xl-8"><img src="horizPhoto.jpg" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Film;