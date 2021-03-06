import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  hideButton,
  price1,
  price2,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>$</strong>
          <strong>{price2}</strong>
        </p>
        {!hideButton && <button onClick={removeFromBasket}>Remove</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
