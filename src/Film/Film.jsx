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
                <div class="row justify-content-center align-items-center">
                    <NavBar/>
                </div>
                <div className="App">
                    <div class="film-container justify-content-center">
                        <div class="container-fluid" id="max-container">
                            <div class="row justify-content-center align-items-center">
                                <div class="card film-card col-10 col-sm-9 col-md-8 col-lg-5 col-xl-5">
                                    <img src="horizPhoto.jpg" alt=""/>
                                    <div class="card-back-image"></div>
                                    <div class="film-name">Hiking and Fishing the High Sierra</div>
                                    <div class="card-info-box">
                                        <div class="film-description">
                                            A five day trek through the southern high sierra, hiking 12,000' mountain passes and fishing beautiful high alpine lakes abundant with trout.
                                        </div>
                                        <div class="external-links-container">
                                            <img class="youtube" src="" alt=""/>
                                            <img class="vimeo" src="" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="card film-card col-10 col-sm-9 col-md-8 col-lg-5 col-xl-5">
                                    <img src="horizPhoto.jpg" alt=""/>
                                    <div class="card-back-image"></div>
                                </div>
                                <div class="card film-card col-10 col-sm-9 col-md-8 col-lg-5 col-xl-5">
                                    <img src="horizPhoto.jpg" alt=""/>
                                    <div class="card-back-image"></div>
                                </div>
                                <div class="card film-card col-10 col-sm-9 col-md-8 col-lg-5 col-xl-5">
                                    <img src="horizPhoto.jpg" alt=""/>
                                    <div class="card-back-image"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}