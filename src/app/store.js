import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter";

export const store = configureStore({
    // ... on mettra nos reducers ici
    reducer: {
        counter: counterReducer,
    //  user: userReducer,
    //  meteo: meteoReducer,
    // etc. etc..
    }
})