import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    product: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, this.handleFilteredList);
  };

  handleCheckedChange = () => {
    this.props.visible();
  };

  handleFilteredList = () => {
    const { stock, filteredList } = this.props;
    const { product } = this.state;
    const filterList = stock.filter(element => {
      return element.name.toLowerCase().indexOf(product.toLowerCase()) !== -1;
    });
    filteredList([...filterList]);
  };

  render() {
    const { product } = this.state;

    return (
      <div>
        <div className="searchbar">
          <label htmlFor="product">Search</label>
          <input
            placeholder="...Introduce your product."
            type="product"
            name="product"
            value={product}
            onChange={this.handleChange}
          />
        </div>

        <div className="checking">
          <label htmlFor="checking">
            Only Show Product in stock(checklist)
          </label>
          <input
            className="ios_toggle"
            type="checkbox"
            name="checking"
            onChange={this.handleCheckedChange}
          />
        </div>
      </div>
    );
  }
}
