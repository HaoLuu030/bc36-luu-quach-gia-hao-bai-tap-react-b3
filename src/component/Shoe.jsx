import React, { Component } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { connect } from "react-redux";

class Shoe extends Component {
  render() {
    const element = this.props.element;
    return (
      <div className="card my-3">
        <img className="card-img-top" src={element.image} alt="#" />
        <div className="card-body">
          <h5 className="card-title">{element.name}</h5>
          <p className="card-text priceTag">$ {element.price}</p>
          <p className="card-text">{element.shortDescription}</p>
          <button
            type="button"
            className="btn btn-light px-3 py-3 mr-2"
            data-toggle="modal"
            data-target="#shoeModal"
            onClick={() => {
              this.props.viewDetails(element);
            }}
          >
            View Details <FaInfo />
          </button>
          <button
            className="btn btn-dark px-3 py-3"
            onClick={() => {
              this.props.addToCart(element);
            }}
          >
            Add to cart <FaCartPlus />
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    viewDetails(shoe) {
      dispatch({
        type: "VIEW_DETAILS",
        payload: shoe,
      });
    },
    addToCart(shoe) {
      dispatch({
        type: "ADD_TO_CART",
        payload: shoe,
      });
    },
  };
};

export default connect(null, mapDispatchToProp)(Shoe);
