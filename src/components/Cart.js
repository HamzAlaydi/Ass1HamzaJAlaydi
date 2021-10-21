import React, { Component } from "react";
import "./cart.css";
export default class Cart extends Component {
  state = {
    value: this.props.btnPrice,
  };
  getTotal = (_) => {
    const sumReducer = (previousValue, currentValue) =>
      parseFloat(previousValue) + parseFloat(currentValue);

    const sum =
      this.props.btnPrice.length > 0
        ? this.props.btnPrice.reduce(sumReducer)
        : 0;
    return (Math.round(sum * 100) / 100).toFixed(2);
  };
  sayHello = (_) => {
    return "<p>hello</p>";
  };
  render() {
    return (
      <div className="cartContainer">
        <div className="cartTxt">
          <h2>Cart</h2>
          <div className="data">
            <div className="price">
              {this.props.btnPrice.map((p) => {
                return <p key={Math.random}>{p}$</p>;
              })}
            </div>
            {/* <div className="category">
              {this.props.productCat.map((c) => {
                return <p>{c}</p>;
              })}
            </div> */}
          </div>
          <h3 hidden={this.getTotal() > 0 ? "" : "false"}>
            Not =
            <del>
              {" "}
              {this.getTotal()} <br></br>
            </del>
            Total = {Math.round(this.getTotal() - 1)}
          </h3>
        </div>
      </div>
    );
  }
}
