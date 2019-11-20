import React from "react";
import localCart from "../utils/localCart";

function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(getCartFromLocalStorage());

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // cart total
  let cartItems = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount * cartItem.price);
  }, 0);
  total = parseFloat(total.toFixed(2));
  //  helper function

  const remove = (id, items) => {
    return items.filter(item => item.id !== id);
  };
  const toggleAmount = (id, items, action) => {
    return items.map(item => {
      let newAmount;
      if (action === "inc") {
        newAmount = item.amount + 1;
      } else if (action === "dec") {
        newAmount = item.amount - 1;
      } else {
        newAmount = item.amount;
      }
      return item.id === id ? { ...item, amount: newAmount } : { ...item };
    });
  };
  // global functions
  const removeItem = id => {
    let newCart = remove(id, [...cart]);
    setCart(newCart);
  };
  const increaseAmount = id => {
    let newCart = toggleAmount(id, [...cart], "inc");
    setCart(newCart);
  };
  const decreaseAmount = (id, amount) => {
    let newCart;
    if (amount === 1) {
      newCart = remove(id, [...cart]);
    } else {
      newCart = toggleAmount(id, [...cart], "dec");
    }
    setCart(newCart);
  };
  const addToCart = product => {
    const { id, image, title, price } = product;
    let item = [...cart].find(item => item.id === id);
    let newCart;
    if (item) {
      newCart = toggleAmount(id, [...cart], "inc");
    } else {
      let newItem = { id, image, title, price, amount: 1 };
      newCart = [...cart, newItem];
    }
    setCart(newCart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        total,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
