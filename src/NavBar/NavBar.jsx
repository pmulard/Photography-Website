import React from 'react';
import './NavBar.css';

export default class Navbar extends React.Component{
    render() {
        return (
            <div class="container-fluid">
                <div class="row justify-content-between navbar-strip align-items-center">
			        <div class="logo-box col-auto shrink">
                        <a class="logo" href="/">
                            <img id="logo-img" src="logoColor2.png" class="d-inline-block align-top" alt="Peter Mulard" onMouseOver="this.src='logoColor4.png'"/>
                            <img id="logo-img-2" src="logoColor3.png" class="d-inline-block align-top" alt="Peter Mulard" onMouseOver="this.src='logoColor4.png'"/>
                        </a>
			        </div>
                    <div class="navbar-links-group col-8 col-sm-8 col-lg-8 col-xl-8">
                        <a class="navbar-link" href="/">Photography</a>
                        <a class="navbar-link" href="/film">Film</a>
                        <a class="navbar-link" href="/sculpture">Sculpture</a>
                        <a class="navbar-link" id="software" href="https://petermulard.me">Software</a>
                    </div>
                </div>
            </div>
        );
    }
}