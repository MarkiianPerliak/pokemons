import React from 'react'

export const Form = () => {
  const addPokemon = (e) => {
    e.preventDefault()
    const name = e.target.elements.name.value
    const element = e.target.elements.element.value

    console.log(name, element)
    e.target.reset()
  }
  return (
    <>
      <form onSubmit={addPokemon} action="">
        <input placeholder='Name' name='name' type="text" />
        <input placeholder='Element' name='element' type="text" />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}
