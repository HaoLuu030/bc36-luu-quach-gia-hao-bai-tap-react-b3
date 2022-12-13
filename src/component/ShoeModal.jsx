import React, { Component } from "react";
import { connect } from "react-redux";
import "./styling/styles.css";
import { FaCartPlus } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

class ShoeModal extends Component {
  render() {
    const shoeDetails = this.props.shoeDetails;
    return (
      <div
        className="modal fade"
        id="shoeModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog shoeDetails" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Shoe Details</h5>
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
              <div className="row mt-4 d-flex align-items-center">
                <div className="col-4 text-center">
                  <img className="img-fluid" src={shoeDetails.image} />
                </div>
                <div className="col-8">
                  <table className="table">
                    <thead>
                      <tr>
                        <td colSpan={2} style={{ borderTop: "none" }}>
                          <h3>{shoeDetails.name}</h3>
                        </td>
                      </tr>
                      <tr>
                        <td className="tb-heading">Alias</td>
                        <td>{shoeDetails.alias}</td>
                      </tr>
                      <tr>
                        <td className="tb-heading">Price</td>
                        <td>$ {shoeDetails.price}</td>
                      </tr>
                      <tr>
                        <td className="tb-heading">In Stock</td>
                        <td>{shoeDetails.quantity}</td>
                      </tr>
                      <tr>
                        <td className="tb-heading">Description</td>
                        <td>{shoeDetails.description}</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger px-3 py-2" data-dismiss="modal">
                Close <FaWindowClose />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProp = (state) => {
  return {
    shoeDetails: state.shoeReducer.shoeDetails,
  };
};

export default connect(mapStatetoProp)(ShoeModal);
