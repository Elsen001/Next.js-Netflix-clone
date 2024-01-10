import { Data } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "../store/store";

export const initialState = {
    details: {} as Data,
    isLoading: false,
    
};


const api_key = "026c8ca6d2a0b5762bfaef064c38e699"


export const getDetails = (createAsyncThunk("getDetails", async (id:number) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US&page=1`)
    return response.data
}))

const DetailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDetails.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getDetails.fulfilled, (state, action) => {
            state.details = action.payload
            state.isLoading = false
        })
        builder.addCase(getDetails.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export type ItemAction = ReturnType<typeof DetailsSlice.actions[keyof typeof DetailsSlice.actions]>;

export type ItemState = typeof initialState;

export const selectItems = (state: RootState) => state.details;

export default DetailsSlice.reducer