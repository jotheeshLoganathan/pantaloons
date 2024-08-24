import { configureStore } from "@reduxjs/toolkit";
import Cardslice from "./cardslice/Cardslice";

export const store = configureStore({
    reducer : {
        cart : Cardslice
    },
    devTools : true
})