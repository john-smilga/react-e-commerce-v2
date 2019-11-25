import React from "react";
import ProductList from "../components/Products/ProductList";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
export default function Products() {
  const { loading, products } = React.useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }
  return <ProductList title="our products" products={products} />;
}
