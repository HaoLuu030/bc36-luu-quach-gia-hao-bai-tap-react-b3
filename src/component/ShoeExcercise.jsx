import React, { Component } from "react";
import ShoeList from "./ShoeList";
import ShoeModal from "./ShoeModal";
import Cart from "./Cart";

export default class ShoeExcercise extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="py-5">Shoes Shop</h1>
          <Cart />
          <ShoeList></ShoeList>

          <ShoeModal />
        </div>
      </div>
    );
  }
}
