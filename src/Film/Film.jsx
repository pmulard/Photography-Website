import React from 'react';
import './Film.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar';

export default class Film extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            array: []
        };
    }

    // When app loads for the first time
    componentDidMount() {
        
    }

    render() {
        return (
            <div class="container-fluid" id="max-container">
                <div class="row justify-content-center align-items-center" id="navbar-row">
                    <NavBar/>
                </div>
                <div className="App">
                    <div class="film-container justify-content-center">
                        <div class="container-fluid" id="max-container">
                            <div class="row justify-content-center align-items-center">
                                <div class="card film-card col-10 col-sm-9 col-md-8 col-lg-5 col-xl-5">
                                    <img class="card-image" src="horizPhoto.jpg" alt=""/>
                                    <div class="film-name">Hiking and Fishing the High Sierra</div>
                                    <div class="card-info-box justify-content-between">
                                        <div class="film-description col-10">
                                            A five day trek in the California High Sierra, hiking 12,000' mountain passes and fishing alpine lakes abundant with trout.
                                        </div>
                                        <div class="external-links-container col-2">
                                            <a href="https://youtube.com" target="_blank"><img class="youtube" src="youtube.svg" alt=""/></a>
                                            <a href="https://vimeo.com" target="_blank"><img class="vimeo" src="vimeo.svg" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card film-card col-10 col-sm-9 col-md-8 col-lg-5 col-xl-5">
                                <img class="card-image" src="horizPhoto.jpg" alt=""/>
                                    <div class="film-name">Hiking and Fishing the High Sierra</div>
                                    <div class="card-info-box justify-content-between">
                                        <div class="film-description col-10">
                                            A five day trek in the California High Sierra, hiking 12,000' mountain passes and fishing alpine lakes abundant with trout.
                                        </div>
                                        <div class="external-links-container col-2">
                                            <a href="https://youtube.com" target="_blank"><img class="youtube" src="youtube.svg" alt=""/></a>
                                            <a href="https://vimeo.com" target="_blank"><img class="vimeo" src="vimeo.svg" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card film-card col-10 col-sm-9 col-md-8 col-lg-5 col-xl-5">
                                <img class="card-image" src="horizPhoto.jpg" alt=""/>
                                    <div class="film-name">Hiking and Fishing the High Sierra</div>
                                    <div class="card-info-box justify-content-between">
                                        <div class="film-description col-10">
                                            A five day trek in the California High Sierra, hiking 12,000' mountain passes and fishing alpine lakes abundant with trout.
                                        </div>
                                        <div class="external-links-container col-2">
                                            <a href="https://youtube.com" target="_blank"><img class="youtube" src="youtube.svg" alt=""/></a>
                                            <a href="https://vimeo.com" target="_blank"><img class="vimeo" src="vimeo.svg" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card film-card col-10 col-sm-9 col-md-8 col-lg-5 col-xl-5">
                                <img class="card-image" src="horizPhoto.jpg" alt=""/>
                                    <div class="film-name">Hiking and Fishing the High Sierra</div>
                                    <div class="card-info-box justify-content-between">
                                        <div class="film-description col-10">
                                            A five day trek in the California High Sierra, hiking 12,000' mountain passes and fishing alpine lakes abundant with trout.
                                        </div>
                                        <div class="external-links-container col-2">
                                            <a href="https://youtube.com" target="_blank"><img class="youtube" src="youtube.svg" alt=""/></a>
                                            <a href="https://vimeo.com" target="_blank"><img class="vimeo" src="vimeo.svg" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}