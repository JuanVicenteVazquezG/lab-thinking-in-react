import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    const {
      product: { name, price, stocked },
      visibleStock
    } = this.props;

    return (
      <div className={!visibleStock && !stocked && "hide"}>
        <p>
          <span className={!stocked && "red"}>{name}</span>
          {price}>
        </p>
      </div>
    );
  }
}
