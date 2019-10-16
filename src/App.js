import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import data from "./data/data.json";

import "./App.css";

class App extends Component {
  state = {
    stock: [data],
    filteredList:[]
  };

  HandleFilteredList = (products)=>{

  }
  render() {
    const { stock } = this.state;
    return (
      <div className="App">
        <h1>IronStore</h1>
        <h2>Search Bar</h2>
        <SearchBar stock={stock} filteredList={this.HandleFilteredList}/>
        <ProductList />
      </div>
    );
  }
}

export default App;
