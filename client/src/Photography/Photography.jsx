import React from 'react';
import './Photography.css';
import NavBar from '../NavBar/NavBar';
import { Modal, Button, Form, Col, Table }from 'react-bootstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPackItem, getPackItems } from '../actions/packItemsActions';
import { getPhotoItems } from '../actions/photoItemsActions';

class Photography extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            sizesPrices: {
                '8"x12"': 28.00,
                '16"x24"': 42.00,
                '24"x32"': 56.00
            },
            url: 'Onion_Valley_MilkyWay.jpg',
            size: '8"x12"',
            price: 28.00,
            quantity: 1
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getPackItems();
        this.props.getPhotoItems();
    }

    modalShow = () => {
        this.setState({modalShow: true});
    } 

    modalHide = () => {
        this.setState({modalShow: false});
    }

    onChange = (e) => {
        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value });
        if (e.target.name === 'size') {
            this.setPriceState(e.target.value);
        }
    }
        
    onSubmit = (e) => {
        e.preventDefault();

        const packItem = {
            url: this.state.url,
            size: this.state.size,
            price: this.state.price,
            quantity: this.state.quantity
        }

        this.props.createPackItem(packItem);
    }


    render() {
        const photoItems = this.props.photoItems.map(photoItem => (
            <div class="card" id={photoItem._id}><img src={"photographyPhotos/"+photoItem.url} alt={photoItem.name}/></div>
        ));

        return (
            <div class="container-fluid" id="max-container">
                <div class="row justify-content-center align-items-center" id="navbar-row">
                    <NavBar/>
                </div>
                <Modal modalClassName="modalContainer"
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.modalShow}
                    onHide={this.modalHide}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Prints
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col xs={8}>
                        <Table borderless hover size="sm">
                            <thead>
                                <tr>
                                <th>
                                    <span class="thName">Size</span>
                                    <span class="thUnit">(in)</span>
                                </th>
                                <th>
                                    <span class="thName">Price</span>
                                    <span class="thUnit">(USD)</span>
                                </th>                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(this.state.sizesPrices).map((size) => (
                                    <tr>
                                        <td>{size}</td>
                                        <td>${this.state.sizesPrices[size].toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        </Col>
                        <hr></hr>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Row>
                                <Col xs={4} id="sizeColumn">
                                    <Form.Group controlId="formPrintSize">
                                        <Form.Label>Size</Form.Label>
                                        <Form.Control as="select" value={this.state.size} name="size" onChange={this.onChange}>
                                            {Object.keys(this.state.sizesPrices).map((size) => (
                                                <option>{size}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xs={2}>
                                    <Form.Group controlId="formPrintQuantity">
                                        <Form.Label>Qty</Form.Label>
                                        <Form.Control type="number" value={this.state.quantity} min={1} name="quantity" onChange={this.onChange}></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xs={1}></Col>
                                <Col xs={5}>
                                    <Form.Group controlId="formAddToPack">
                                        <Button variant="primary" type="submit" id="addToPackModalButton">Add to pack</Button>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Modal.Body>
                </Modal>
                <div class="row justify-content-center align-items-center">
                    <div class="image-container col-10 col-md-8 col-lg-6">
                        <div id="image-location">Wyoming</div>
                        <div id="align-button-image">
                            <Button variant="primary" onClick={this.modalShow} id="ADD-PACK-BUTTON"><div id="main-image-box">
                                <img src="photographyPhotos/Cirque_Fall_Colors.jpg" alt="" class="img-fluid mx-auto d-block" id="main-image"/>
                                <div id="add-pack-button" class="container-fluid"><img src="/icons/plusSign.svg" alt=""/></div>
                            </div></Button>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="trapezoid col-9 col-md-8 col-lg-7 col-xl-6" align="center"></div>
                    <div class="scrolling-wrapper col-8 col-md-7 col-lg-6 col-xl-5" align="center">
                        {photoItems}
                    </div>
                </div>
            </div>
        );
    }


    setPriceState = (size) => {
        const price = this.state.sizesPrices[size];
        this.setState({ 'price': price });
    }

}

// Get items from redux state and map to properties of the component
const mapStateToProps = state => ({
    // 2nd packItems matches with reducer key in index.js
    // 3rd packItems is from payload ID in the reducer (packItemsReducer.js)
    packItems: state.packItems.packItems,
    packItem: state.packItems.packItem,
    photoItems: state.photoItems.photoItems,
    photoItem: state.photoItems.photoItem
});

Photography.propTypes = {
    // Pack Items props
    createPackItem: PropTypes.func.isRequired,
    getPackItems: PropTypes.func.isRequired,
    packItems: PropTypes.array.isRequired,
    packItem: PropTypes.object.isRequired,
    // Photo Items props
    getPhotoItems: PropTypes.func.isRequired,
    photoItems: PropTypes.array.isRequired,
    photoItem: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, { createPackItem, getPackItems, getPhotoItems })(Photography);