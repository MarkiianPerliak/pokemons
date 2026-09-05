import { createSlice } from "@reduxjs/toolkit"
import { getPokemons } from "./operations"

const initialState = {
    pokemons: []
}


const pokemonsSlice = createSlice({
    initialState,
    name: "pokemonsSlice",
    extraReducers: (builder) => {
        builder.addCase(getPokemons.fulfilled, (state, action) => {
            console.log(action.payload)
            state.pokemons = action.payload
        })
    }
})

export const pokemonsReducer = pokemonsSlice.reducer