import React from 'react'

export const Item = ({pokemon}) => {
  return (
    <li>
        <h3>{pokemon.name}</h3>
        <h4>{pokemon.element}</h4>
    </li>
  )
}
