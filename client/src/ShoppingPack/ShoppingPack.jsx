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
                    <div class="col-11 col-sm-10 col-md-9 col-lg-7 col-xl-7" id="pack-header-container">
                        <div class="pack-header">Your pack is empty. Let's fill it up!</div>
                        <div id="pack-description">Hover over photos to select sizing options.</div>
                        <div id="continue-shopping-button">
                            <a href="/">Continue Shopping</a>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-11 col-sm-10 col-md-9 col-lg-7 col-xl-7" id="pack-container">
                        <div class="pack-header">Pack:</div>
                        <div id="photo-item-container">
                            <div class="photo-item row">
                                <div class="photo-item-img-container col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <img src="/photographyPhotos/Fossile_Lake.jpg" alt=""/>
                                </div>
                                <div class="photo-item-info-container container-fluid col-8 col-sm-9 col-md-9 col-lg-9 col-xl-9 ">
                                    <div class="photo-item-info-box row"> 
                                        <div class="size col-3">
                                            <div class="photo-item-info-label">Size:</div>
                                            <div class="photo-item-info-value">16'x24'</div>
                                        </div>
                                        <div class="item-price col-3">
                                            <div class="photo-item-info-label">Price:</div>
                                            <div class="photo-item-info-value">$24.00</div>
                                        </div>
                                        <div class="quantity-container col-3">
                                            <div class="photo-item-info-label">Count:</div>
                                            <div class="photo-item-info-value">2</div>
                                            <div class="photo-item-quantity-buttons-container">
                                                <span class="quantity-decrease">&nbsp;&nbsp;-&nbsp;</span>
                                                <span class="quantity-increase">+</span>
                                            </div>
                                        </div>
                                        <div class="total-price col-3">
                                            <div class="photo-item-info-label">Total:</div>
                                            <div class="photo-item-info-value">$48.00</div>
                                        </div>
                                    </div>   
                                </div>
                                <button type="button" class="remove-button btn btn-outline-danger col-1">x</button>
                            </div>
                            <div class="photo-item row">
                                <div class="photo-item-img-container col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <img src="/photographyPhotos/Onion_Valley_MilkyWay.jpg" alt=""/>
                                </div>
                                <div class="photo-item-info-container col-8 col-sm-9 col-md-9 col-lg-9 col-xl-9 ">
                                    <div class="photo-item-info-box row"> 
                                        <div class="size col-3">
                                            <div class="photo-item-info-label">Size:</div>
                                            <div class="photo-item-info-value">16'x24'</div>
                                        </div>
                                        <div class="item-price col-3">
                                            <div class="photo-item-info-label">Price:</div>
                                            <div class="photo-item-info-value">$24.00</div>
                                        </div>
                                        <div class="quantity-container col-3">
                                            <div class="photo-item-info-label">Count:</div>
                                            <div class="photo-item-info-value">2</div>
                                            <div class="photo-item-quantity-buttons-container">
                                                <span class="quantity-decrease">&nbsp;&nbsp;-&nbsp;</span>
                                                <span class="quantity-increase">+</span>
                                            </div>
                                        </div>
                                        <div class="total-price col-3">
                                            <div class="photo-item-info-label">Total:</div>
                                            <div class="photo-item-info-value">$48.00</div>
                                        </div>
                                    </div>   
                                </div>
                                <button type="button" class="remove-button btn btn-outline-danger col-1">x</button>
                            </div>
                            <div class="photo-item row">
                                <div class="photo-item-img-container col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <img src="/photographyPhotos/Fish_Bowl_Sunset.jpg" alt=""/>
                                </div>
                                <div class="photo-item-info-container col-8 col-sm-9 col-md-9 col-lg-9 col-xl-9 ">
                                    <div class="photo-item-info-box row"> 
                                        <div class="size col-3">
                                            <div class="photo-item-info-label">Size:</div>
                                            <div class="photo-item-info-value">16'x24'</div>
                                        </div>
                                        <div class="item-price col-3">
                                            <div class="photo-item-info-label">Price:</div>
                                            <div class="photo-item-info-value">$24.00</div>
                                        </div>
                                        <div class="quantity-container col-3">
                                            <div class="photo-item-info-label">Count:</div>
                                            <div class="photo-item-info-value">2</div>
                                            <div class="photo-item-quantity-buttons-container">
                                                <span class="quantity-decrease">&nbsp;&nbsp;-&nbsp;</span>
                                                <span class="quantity-increase">+</span>
                                            </div>
                                        </div>
                                        <div class="total-price col-3">
                                            <div class="photo-item-info-label">Total:</div>
                                            <div class="photo-item-info-value">$48.00</div>
                                        </div>
                                    </div>   
                                </div>
                                <button type="button" class="remove-button btn btn-outline-danger col-1">x</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-11 col-sm-10 col-md-9 col-lg-7 col-xl-7 justify-content-between align-items-center" id="order-total-container">
                        {/* <div id="checkout-button" class="col-6">
                            <a href="/">Checkout</a>
                        </div> */}
                        <button type="button" class="btn btn-primary col-6 col-sm-7 col-md-8" id="checkout-button">Checkout</button>
                        <div class="order-total-info-box col-auto">
                            <div class="order-total-header">Order Total:</div>
                            <div class="order-total-value">$128.00</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}