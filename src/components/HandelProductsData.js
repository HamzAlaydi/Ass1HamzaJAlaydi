import React, { Component } from "react";
import Cart from "./Cart";
import axios from "axios";
import "./Items.css";
export default class HandelProductssData extends React.Component {
  state = {
    productsData: [],
    btnPrice: [],
    btnCat: [],
  };

  // fetch Data ////////////////////////////////////////////////////
  fetchData = async (_) => {
    const data = [];
    const products = await axios.get("https://fakestoreapi.com/products");

    products.data.map((p) => {
      data.push({
        id: p.id,
        title: p.title,
        price: p.price,
        des: p.description,
        img: p.image,
        cat: p.category,
      });
    });

    this.setState({
      productsData: data,
    });
    // console.log(this.state.productsData.map((p) => p.id));
    // this.selectId();
  };
  //////////////////////////////////////////////////////////////////

  //selectId ///////////////////////////////////////////
  // selectId = (_) => {
  //   const p = this.state.productsData;
  //   for (let i = 0; i < p.length; i++) {
  //     if (p[i].id === this.state.btnId) {
  //       console.log(p[i].id);
  //       console.log("das");
  //     }
  //   }
  // };

  //////////////////////////////////////////////////////////////////

  //handelClick ///////////////////////////////////////////
  handelClick = (e) => {
    this.setState({
      btnPrice: [...this.state.btnPrice, e.target.value],
      btnCat: [...this.state.btnCat, e.target.id],
    });
    // console.log(this.state.btnCat);
  };

  //handelDelete ///////////////////////////////////////////

  handelDelete = (e) => {
    let arr = this.state.btnPrice;
    for (let i = 0; i < arr.length; i++) {
      if (e.target.value == arr[i]) {
        arr.pop(arr[i]);
        this.setState({
          btnPrice: arr,
        });
      }
    }
  };
  //////////////////////////////////////////////////////////////////

  //handelDelete ///////////////////////////////////////////
  handelDeleteAll = (_) => {
    this.setState({
      btnPrice: [],
    });
  };
  //////////////////////////////////////////////////////////////////

  componentDidUpdate() {}
  //////////////////////////////////////////////////////////////////

  //handelDisplayProducts ///////////////////////////////////////////
  handelDisplayProducts = (p) => {
    return (
      <div key={p.id} className="item">
        <div className="image">
          <img src={p.img} />
        </div>
        <div className="txt">
          <h3>{p.title}</h3>
          <p>description: {p.des}</p>
          <h3 className="price">{p.price} $</h3>
          <span></span>
          <button
            className="btn"
            id={p.cat}
            value={`${p.price}`}
            onClick={this.handelClick}
          >
            Add to Cart
          </button>
          <button
            className="btn"
            id={p.cat}
            value={`${p.price}`}
            onClick={this.handelDelete}
          >
            Delete Item
          </button>
          <button
            className="btn"
            id={p.cat}
            value={`${p.price}`}
            onClick={this.handelDeleteAll}
          >
            Delete All
          </button>
        </div>
      </div>
    );
  };
  //////////////////////////////////////////////////////////////////

  //componentDidMount //////////////////////////////////////////////
  componentDidMount() {
    this.fetchData();
  }
  //////////////////////////////////////////////////////////////////
  render() {
    const product = this.state.productsData.map((p) =>
      this.handelDisplayProducts(p)
    );
    return (
      <div className="root">
        <div className="container">
          <div>{product}</div>
        </div>
        <div className="cart">
          <Cart
            btnPrice={this.state.btnPrice}
            productsData={this.state.productsData}
            productCat={this.state.btnCat}
          />
        </div>
      </div>
    );
  }
}
