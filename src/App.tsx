import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchPokemonData } from "./modules/actions/PokemonAction";
import { RootReducerType } from "./modules/store/configureStore";

const App = () => {
  const { pokemon, success } = useSelector(
    (state: RootReducerType) => state.PokemonReducer,
  );
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const handlePokemonName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchPokemonData(pokemonName));
  };
  return (
    <div className="App">
      <input value={pokemonName} onChange={handlePokemonName} />
      <button onClick={handleSearch}>포켓몬 검색</button>
      <div>
        {success && (
          <div>
            xw
            <h1>{pokemonName}</h1>
            {pokemon?.abilities.map((ability) => {
              return (
                <div>
                  <p>{ability.ability.name}</p>
                  <p>{ability.slot}</p>
                </div>
              );
            })}
            <img src={pokemon?.sprites.front_default} alt="pokemon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
