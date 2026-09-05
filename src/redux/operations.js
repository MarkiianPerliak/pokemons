import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemons = createAsyncThunk("pokemons/get", async (_, thunkApi) => {
    try {
        const pokemons = await axios.get(`https://6a8edbd1a12b7de8cc0f0f15.mockapi.io/pokemons`)
        return pokemons.data
    } catch (error) {
        
    }
})