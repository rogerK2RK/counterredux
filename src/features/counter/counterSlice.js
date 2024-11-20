import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: { 
        increment: (state) => { 
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

// Exporter uniquement les actions (fonctions pour modifier les valeurs de mon état compteur)
export const {  increment, decrement } = counterSlice.actions;

// Exporter le reducer pour l'injecter dans mon store.js
export default counterSlice.reducer;