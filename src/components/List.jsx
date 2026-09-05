import React from 'react'
import { useSelector } from 'react-redux'
import { selectPokemons } from '../redux/selectors'
import { Item } from './Item'
export const List = () => {
  const pokemons = useSelector(selectPokemons)
  return (
    <ul>
        {pokemons.map(pokemon => {
            return <Item pokemon={pokemon} key={pokemon.id} />
        })}
    </ul>
  )
}
