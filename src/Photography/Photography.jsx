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
            <div class="container-fluid align-items-center" id="max-container">
                <div class="row justify-content-center align-items-center">
                    <div class="image-container col-10 col-md-8 col-lg-6">
                        <img src="logoBlack.png" alt="" class="img-fluid mx-auto d-block"/>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="thumbnail-slider-container col-10 col-md-8 col-lg-8">
                        <img src="logoBlack.png" alt=""/>
                        <img src="logoBlack.png" alt=""/>
                        <img src="logoBlack.png" alt=""/>
                        <img src="logoBlack.png" alt=""/>
                        <img src="logoBlack.png" alt=""/>
                        <img src="logoBlack.png" alt=""/>
                        <img src="logoBlack.png" alt=""/>
                        <img src="logoBlack.png" alt=""/>
                        <img src="logoBlack.png" alt=""/>
                        <img src="logoBlack.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }

}