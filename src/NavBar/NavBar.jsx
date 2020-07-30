import React from 'react';
import './NavBar.css';

export default class Navbar extends React.Component{
    render() {
        return (
            <div class="container-fluid">
                <div class="row justify-content-between navbar-strip align-items-center">
			        <div class="logo-box col-auto shrink">
                        <a class="logo" href="#">
                            <img id="logo-img" src="logoBlack.png" class="d-inline-block align-top" alt=""/>
                        </a>
			        </div>
                    <div class="navbar-links-group col-9 col-sm-8 col-lg-8 col-xl-6">
                        <a class="navbar-link" href="#">Photography</a>
                        <a class="navbar-link" href="#">Film</a>
                        <a class="navbar-link" href="#">Sculpture</a>
                        <a class="navbar-link" id="software" href="#">Software</a>
                    </div>
                </div>
            </div>
        );
    }
}