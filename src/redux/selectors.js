import { useSelector } from "react-redux";
import { filterValue } from "./constants";


// export const selectVisiblePokemons = () => {}

export const selectPokemons = (state) => state.pokemons