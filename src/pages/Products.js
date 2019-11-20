import React from "react";
import ProductList from "../components/Products/ProductList";
import { ProductContext } from "../context/products";
export default function Products() {
  const { loading, products } = React.useContext(ProductContext);

  if (loading) {
    return <p className="loading">loading data...</p>;
  }
  return <ProductList title="our products" products={products} />;
}
