import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import data from "./data/data.json";

import "./App.css";

class App extends Component {
  state = {
    stock: data.data,
    filteredList: data.data,
    visibleStock:true,
  };


  HandleFilteredList = list => {
    this.setState({ filteredList: [...list] });
  };

  handleVisibleStock = (newState) =>{
    this.setState({visibleStock: newState});
  }
  render() {
    const { stock, filteredList } = this.state;
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar stock={stock} filteredList={this.HandleFilteredList} visible={this.handleVisibleStock} />
        <div> Name product </div>
        {filteredList.map((element, index) => {
          return (
            <div key={index}>
              <ProductList product={element}  />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
