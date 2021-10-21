import React, { Component } from "react";
import Cart from "../components/Cart";
import HandelProductsData from "../components/HandelProductsData";
export class HomeScreen extends Component {
  render() {
    return (
      <div className="root">
        <HandelProductsData />
      </div>
    );
  }
}

export default HomeScreen;
