import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Count } from "./Pages/Count"
import { Provider } from "react-redux"
import { store } from "../app/store"

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Count />
            </BrowserRouter>
        </Provider>
    )
}