import React from 'react';
import './Photography.css';

export default class Photography extends React.Component {
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
                    <div class="image-container col-10 col-md-8 col-lg-6">
                        <div class="card">
                            <img src="vertPhoto.jpg" alt="" class="img-fluid mx-auto d-block"/>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="scrolling-wrapper col-8 col-md-7 col-lg-6 col-xl-5" align="center">
                        <div class="card card-start"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card"><img src="logoBlack.png" alt=""/></div>
                        <div class="card card-end"><img src="logoBlack.png" alt=""/></div>
                    </div>
                </div>
            </div>
        );
    }

}