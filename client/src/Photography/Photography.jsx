import React, { useState } from 'react';
import './Photography.css';
import NavBar from '../NavBar/NavBar';
import { Modal, Button }from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default class Photography extends React.Component {
    
    // const [modalShow, setModalShow] = React.useState(false);
    constructor(props) {
        super(props);
        this.state = {
          modalShow: true,
          setModalShow: false
        }
    }

    modalShow = () => {
        this.setState({modalShow: true});
    } 

    modalHide = () => {
        this.setState({modalShow: false});
    }
    
    render() {
        return (
            <div class="container-fluid" id="max-container">
                <div class="row justify-content-center align-items-center" id="navbar-row">
                    <NavBar/>
                </div>
                <MyVerticallyCenteredModal
                    show={this.state.modalShow}
                    onHide={this.modalHide}
                />
                <div class="row justify-content-center align-items-center">
                    <div class="image-container col-10 col-md-8 col-lg-6">
                        <div id="image-location">California</div>
                        <Button variant="primary" onClick={this.modalShow} id="ADD-PACK-BUTTON"><div id="main-image-box">
                            <img src="photographyPhotos/Sky_Top_Lakes.jpg" alt="" class="img-fluid mx-auto d-block" id="main-image"/>
                            <div id="add-pack-button" class="container-fluid"><img src="/icons/plusSign.svg" alt=""/></div>
                        </div></Button>
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