import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    const {
      product: { name, price, stocked },
      visibleStock
    } = this.props;

    return (
      <div className={!visibleStock && !stocked && "hide"}>
        <div className="productList">
          <div className="name">
            <span className={!stocked && "red"}>{name}</span>
          </div>
          <div className="product">{price}</div>
        </div>
      </div>
    );
  }
}
