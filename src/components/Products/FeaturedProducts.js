import React from "react";
import ProductList from "./ProductList";
import { ProductContext } from "../../context/products";
import Loading from "../Loading";
export default function FeaturedProducts() {
  const { loading, featured } = React.useContext(ProductContext);

  if (loading) {
    return <Loading></Loading>;
  }
  return <ProductList title="featured products" products={featured} />;
}
