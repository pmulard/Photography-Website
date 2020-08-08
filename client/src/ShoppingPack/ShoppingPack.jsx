import React from 'react';
import './ShoppingPack.css';
import NavBar from '../NavBar/NavBar';

export default class ShoppingPack extends React.Component {
    constructor(props) {
        super(props)
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
                <div class="row justify-content-center align-items-center">
                    <div class="col-11 col-sm-10 col-md-9 col-lg-5 col-xl-5" id="pack-header-container">
                        <div id="pack-header">Your pack is empty. Let's fill it up!</div>
                        <div id="pack-description">Hover over photos to select sizing options.</div>
                        <div id="continue-shopping-button">
                            <a href="/">Continue Shopping</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}