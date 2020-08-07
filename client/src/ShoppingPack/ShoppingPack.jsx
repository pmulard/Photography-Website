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
                    <div></div>
                </div>
            </div>
        );
    }

}