import React from "react";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom";
import EmptyCart from "../components/Cart/EmptyCart";
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe
} from "react-stripe-elements";
import submitOrder from "../strapi/submitOrder";
function CheckoutPage(props) {
  // cart context
  const { cart, total, clearCart } = React.useContext(CartContext);

  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext);
  const history = useHistory();
  // name field
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  // handle submit
  const isEmpty = !name || alert.show;
  async function handleSubmit(e) {
    showAlert({ msg: "submitting order... please wait!" });
    e.preventDefault();
    const response = await props.stripe
      .createToken()
      .catch(error => console.log(error));
    console.log(response);

    const { token } = response;
    if (token) {
      setError("");

      const { id } = token;
      let order = await submitOrder({
        name,
        total: total,
        items: cart,
        stripeTokenId: id,
        userToken: user.token
      });

      if (order) {
        showAlert({ msg: "your order is complete" });
        clearCart();
        history.push("/");
        return;
      } else {
        showAlert({
          msg: "there was an error with your order. please try again!",
          type: "danger"
        });
      }
    } else {
      hideAlert();
      setError(response.error.message);
    }
  }

  if (cart.length === 0) return <EmptyCart />;

  return (
    <section className="section form">
      <h2 className="section-title">checkout</h2>
      <form className="checkout-form">
        <h3>
          order total : <span> ${total}</span>
        </h3>
        {/* single input */}
        <div className="form-control">
          <label htmlFor="name">your name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>
        {/* end of single input  */}
        {/* card element */}
        <div className="stripe-input">
          <label htmlFor="card-element">Credit or Debit Card</label>
          <p className="stripe-info">
            Test using this credit card : <span>4242 4242 4242 4242</span>
            <br />
            enter any 5 digits for the zip code
            <br />
            enter any 3 digits for the CVC
          </p>
        </div>
        {/* card element */}
        <CardElement className="card-element"></CardElement>
        {/*end of  card element */}
        {/* stripe errors */}
        {error && <p className="form-empty">{error}</p>}
        {/* empty value */}
        {isEmpty ? (
          <p className="form-empty">please fill out name field</p>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary btn-block"
          >
            submit
          </button>
        )}
      </form>
    </section>
  );
}

const CardForm = injectStripe(CheckoutPage);

const StripeWrapper = () => {
  return (
    <StripeProvider apiKey="pk_test_u98wkoUC9x1zM28B8icCPH1y008TT9DFrS">
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  );
};

export default StripeWrapper;
