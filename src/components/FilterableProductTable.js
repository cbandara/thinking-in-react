import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import products from "../products";

export default class FilterableProductTable extends React.Component {
  state = {
    products,
    filterText: "",
    inStockOnly: false
  };

  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText
    });
  };

  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
