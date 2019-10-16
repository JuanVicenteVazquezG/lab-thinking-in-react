import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    const {
      product: { name, price, stocked }
    } = this.props;

    console.log(stocked);
    const visible = false;
    return (
      <div className={!visible && !stocked && "hide"}>
         <p><span className={!stocked && "red"} >{name}</span>
          {price}></p>
      </div>
    );
  }
}
