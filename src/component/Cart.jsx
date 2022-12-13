import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  renderCart = () => {
    return this.props.cart.map((element) => {
      return (
        <tr key={element.id}>
          <td>{element.id}</td>
          <td>
            <img
              width={50}
              src={element.image}
              className="img-fluid"
              alt="shoe"
            />
          </td>
          <td>{element.name}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleQuantity(element, false);
              }}
              className="btn btn-warning"
            >
              -
            </button>
            <span className="mx-1">{element.cartQuantity}</span>
            <button
              onClick={() => {
                this.props.handleQuantity(element, true);
              }}
              className="btn btn-warning"
            >
              +
            </button>
          </td>
          <td>{element.price.toLocaleString()}</td>
          <td>{(element.price * element.cartQuantity).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleDelete(element);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end mb-2">
          <button
            type="button"
            className="btn btn-dark btn-lg"
            data-toggle="modal"
            data-target="#gioHang"
          >
            Cart ({this.props.cart.length})
          </button>
        </div>
        <div
          className="modal fade"
          id="gioHang"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cart</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProp = (state) => {
  return {
    cart: state.shoeReducer.cart,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    handleQuantity(shoe, isIncreased) {
      dispatch({
        type: "HANDLE_QUANTITY",
        payload: { shoe, isIncreased },
      });
    },
    handleDelete(shoe) {
      dispatch({
        type: "HANDLE_DELETE",
        payload: shoe,
      });
    },
  };
};

export default connect(mapStatetoProp, mapDispatchToProp)(Cart);
