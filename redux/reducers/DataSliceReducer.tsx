import { Data } from "@/types/types";
import { Dispatch, Store, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { AppDispatch, RootState } from "../store/store";

export const initialState = {
    items: {} as Data,
    isLoading: false,
  };
  
export const getItems = createAsyncThunk("getItems", async () => {
    const api_key = "026c8ca6d2a0b5762bfaef064c38e699";
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
    return response.data as Data;
  });

const itemSlice = createSlice({
    name:"items",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getItems.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(getItems.fulfilled,(state,action)=>{
            state.items=action.payload as Data
            state.isLoading=false
        })
        builder.addCase(getItems.rejected,(state)=>{
            state.isLoading=false
        })
    }
})

export type ItemAction = ReturnType<typeof itemSlice.actions[keyof typeof itemSlice.actions]>;

export type ItemState = typeof initialState;

export const selectItems = (state: RootState) => state.items;

export default itemSlice.reducer