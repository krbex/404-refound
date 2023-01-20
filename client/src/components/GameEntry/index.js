import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

export default function GameEntry(game) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, description } = game;

  const { cart } = state;

  const addToCart = () => {
    const gameInCart = cart.find((cartGame) => cartGame._id === _id);
    if (gameInCart) {
      dispatch({
        type: ADD_TO_CART,
        game: { ...game },
      });
      idbPromise("games", "put", { ...game });
    }
  };

  return (
    <div>
      <Link to={`/game/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div>
        <span>About this title:</span>
        <div>{description}</div>
        <div>{name} is in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

console.log("hello world");
