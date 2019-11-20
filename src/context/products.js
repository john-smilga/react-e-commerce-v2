import React from "react";
import url from "../utils/URL";
import { featuredProducts, flattenProducts } from "../utils/helpers";
const ProductContext = React.createContext();
// Provider,Consumer,useContext
export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetch(`${url}/products`)
      .then(response => response.json())
      .then(storeProducts => {
        const products = flattenProducts(storeProducts);
        const featured = featuredProducts(products);
        setProducts(products);
        setFeatured(featured);
        setLoading(false);
      });
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
