import React, { useEffect } from "react";
import GameEntry from "../GameEntry";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_GAMES } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_GAMES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";

export default function GameList() {
  const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(QUERY_GAMES);

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch({
        type: UPDATE_GAMES,
        products: data.games,
      });
      data.games.forEach((game) => {
        idbPromise("games", "put", game);
      });
    } else if (!loading) {
      idbPromise("games", "get").then((games) => {
        dispatch({
          type: UPDATE_GAMES,
          games: games,
        });
      });
    }
  }, [data, loading, dispatch]);

  function showGames() {
    return state.games;
  }

  return (
    <div>
      <h2>Games we 100% made ourselves</h2>
      {state.games.length ? (
        <div>
          {showGames().map((game) => (
            <GameEntry
              key={game._id}
              _id={game._id}
              name={game.name}
              image={game.image}
              description={game.description}
              price={game.price}
            />
          ))}
        </div>
      ) : (
        <h3>
          We either haven't added any games yet or something went wrong, please
          refresh the page
        </h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}
