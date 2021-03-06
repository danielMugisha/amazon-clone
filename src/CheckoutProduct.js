import React, { forwardRef } from "react";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = forwardRef(
  ({ id, title, image, price, rating }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };

    return (
      <div className="checkoutProduct" ref={ref}>
        <img src={image} alt="" className="checkoutProduct__image" />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>

          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
