import React, { Component } from "react";
import data from "../data/data.json";
import Shoe from "./Shoe";

export default class ShoeList extends Component {
  renderShoeList = () => {
    return data.map((element) => {
      return (
        <div className="col-4" key={element.id}>
          <Shoe element={element} />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderShoeList()}</div>;
  }
}
