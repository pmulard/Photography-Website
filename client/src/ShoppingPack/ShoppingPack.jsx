import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingPack.css';
import NavBar from '../NavBar/NavBar';

import { connect } from 'react-redux';
import { getPackItems, deletePackItem } from '../actions/packItemsActions';

class ShoppingPack extends React.Component {

    componentDidMount() {
        this.props.getPackItems();
    }

    render() {

        const packItems = this.props.packItems.map(packItem => (
            <div class="photo-item row" key={packItem._id}>
                <div class="photo-item-img-container col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <img src={`/photographyPhotos/${packItem.url}`} alt={packItem._id}/>
                </div>
                <div class="photo-item-info-container col-8 col-sm-9 col-md-9 col-lg-9 col-xl-9 ">
                    <div class="photo-item-info-box row"> 
                        <div class="size col-3">
                            <div class="photo-item-info-label">Size:</div>
                            <div class="photo-item-info-value">{packItem.size}</div>
                        </div>
                        <div class="item-price col-3">
                            <div class="photo-item-info-label">Price:</div>
                            <div class="photo-item-info-value">${packItem.price.toFixed(2)}</div>
                        </div>
                        <div class="quantity-container col-3">
                            <div class="photo-item-info-label">Count:</div>
                            <div class="photo-item-info-value">{packItem.quantity}</div>
                            <div class="photo-item-quantity-buttons-container">
                                <span class="quantity-decrease">&nbsp;&nbsp;-&nbsp;</span>
                                <span class="quantity-increase">+</span>
                            </div>
                        </div>
                        <div class="total-price col-3">
                            <div class="photo-item-info-label">Total:</div>
                            <div class="photo-item-info-value">${(packItem.price*packItem.quantity).toFixed(2)}</div>
                        </div>
                    </div>   
                </div>
                <button 
                    type="button" 
                    class="remove-button btn btn-outline-danger col-1" 
                    onClick={() => {
                        this.props.deletePackItem(packItem._id);
                    }}
                >x</button>
            </div>
        ));

        const packShowAndHeaderInfo = () => {
            // At least one pack item to display
            const numberOfPrints = this.props.packItems.reduce((total, packItem) => {
                return total + packItem.quantity
            }, 0);

            if (this.props.packItems.length > 0) {
                return (
                    <div>
                        <div class="row justify-content-center align-items-center">
                            <div class="col-11 col-sm-10 col-md-9 col-lg-7 col-xl-7" id="pack-header-container">
                                <div class="pack-header">You currently have {numberOfPrints} print(s) in your pack.</div>
                                <div id="pack-description">Browse more photos. Or checkout below.</div>
                                <div id="continue-shopping-button">
                                    <a href="/">Continue Shopping</a>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center align-items-center">
                            <div class="col-11 col-sm-10 col-md-9 col-lg-7 col-xl-7" id="pack-container">
                                <div class="pack-header">Pack:</div>
                                <div id="photo-item-container">
                                    {packItems}
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center align-items-center">
                            <div class="col-11 col-sm-10 col-md-9 col-lg-7 col-xl-7 justify-content-between align-items-center" id="order-total-container">
                                <button type="button" class="btn btn-primary col-6 col-sm-7 col-md-8" id="checkout-button">Checkout</button>
                                <div class="order-total-info-box col-auto">
                                    <div class="order-total-header">Order Total:</div>
                                    <div class="order-total-value">${this.props.packItems.reduce((total, packItem) => {
                                        return total + (packItem.price * packItem.quantity);
                                        }, 0).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                )
            } else { // Assertion: no pack items to display
                return (
                    <div class="row justify-content-center align-items-center">
                        <div class="col-11 col-sm-10 col-md-9 col-lg-7 col-xl-7" id="pack-header-container">
                            <div class="pack-header">Your pack is empty. Let's fill it up!</div>
                            <div id="pack-description">Hover over photos to select sizing options.</div>
                            <div id="continue-shopping-button">
                                <a href="/">Continue Shopping</a>
                            </div>
                        </div>
                    </div>
                )
            }
        }

        return (
            <div class="container-fluid" id="max-container">
                <div class="row justify-content-center align-items-center" id="navbar-row">
                    <NavBar/>
                </div>
                {packShowAndHeaderInfo()}
            </div>
        );
    }
}

//Add props to proptypes
ShoppingPack.propTypes = {
    getPackItems: PropTypes.func.isRequired,
    deletePackItem: PropTypes.func.isRequired,
    packItems: PropTypes.array.isRequired,
    packItem: PropTypes.object.isRequired
}

// Get items from redux state and map to properties of the component
const mapStateToProps = state => ({
    // 2nd packItems matches with reducer key in index.js
    // 3rd packItems is from payload ID in the reducer (packItemsReducer.js)
    packItems: state.packItems.packItems,
    packItem: state.packItems.packItem
});

export default connect(mapStateToProps, { getPackItems, deletePackItem })(ShoppingPack);