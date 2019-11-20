import React from "react";
import ProductList from "./ProductList";
import { ProductContext } from "../../context/products";
export default function FeaturedProducts() {
  const { loading, featured } = React.useContext(ProductContext);

  if (loading) {
    return <p className="loading">loading data...</p>;
  }
  return <ProductList title="featured products" products={featured} />;
}
