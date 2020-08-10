import React from 'react';
import './Photography.css';
import NavBar from '../NavBar/NavBar';

export default class Photography extends React.Component {

    render() {
        return (
            <div class="container-fluid" id="max-container">
                <div class="row justify-content-center align-items-center" id="navbar-row">
                    <NavBar/>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="image-container col-10 col-md-8 col-lg-6">
                        <div id="image-location">California</div>
                        <a href="/pack"><div id="main-image-box">
                            <img src="photographyPhotos/Glen_Pass_Tent_MilkyWay.jpg" alt="" class="img-fluid mx-auto d-block" id="main-image"/>
                            <div id="add-pack-button" class="container-fluid"><img src="/icons/plusSign.svg" alt=""/></div>
                        </div></a>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="trapezoid col-9 col-md-8 col-lg-7 col-xl-6" align="center"></div>
                    <div class="scrolling-wrapper col-8 col-md-7 col-lg-6 col-xl-5" align="center">
                        <div class="card"><img src="photographyPhotos/WindAndSea_Beach.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Canyonlands_MilkyWay.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Genie_Lamp_Rock.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Yosemite_Aspens.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Fish_Bowl_Sunset.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Cape_Flattery_Sunset.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Lake_Louise_Panorama.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Beartooths_Wildflowers_Creek.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Beartooth_Peak.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Fossile_Lake.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Granite_Peak.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Sky_Top_Lakes.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Swirling_Waterfall.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Devils_Churn.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Dark_Canyon_Ruins.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Canyon_Waterfall.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Maroon_Bells.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Temple_Craig.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Temple_Craig_Sunrise.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Fifth_Lake_Flowers.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Fifth_Lake_Sunset.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Fifth_Lake_MilkyWay.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Onion_Valley_MilkyWay.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Glen_Pass_Tent_MilkyWay.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Rae_Lakes_Sunset.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Kearsarge_Lakes_MilkyWay.jpg" alt=""/></div>
                        <div class="card"><img src="photographyPhotos/Kearsarge_Lakes_Sunrise.jpg" alt=""/></div>
                    </div>
                </div>

            </div>
        );
    }

}