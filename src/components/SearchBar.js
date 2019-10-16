import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    product: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFilteredList = () => {
    this.props.filteredList(
      this.props.stock.filter(element => {
        return (
          (element.name.toLowerCase() === this.state.product.toLowerCase()) !==
          -1
        );
      })
    );
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <label htmlFor="product"></label>
        <input
          type="product"
          name="product"
          value={product}
          onChange={this.handleChange}
        />

        <h3>Only Show Product in stock(checklist)</h3>
      </div>
    );
  }
}
