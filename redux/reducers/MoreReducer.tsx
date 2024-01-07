import { Data } from "@/app/types/types";
import { Dispatch, Store, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "../store/store";

export const initialState = {
    more: {} as Data,
    isLoading: false,
  };
  
export const getMore = createAsyncThunk("getMore", async () => {
    const api_key = "026c8ca6d2a0b5762bfaef064c38e699";
    const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`);
    return response.data as Data;
  });

const MoreSlice = createSlice({
    name:"items",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getMore.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(getMore.fulfilled,(state,action)=>{
            state.more=action.payload as Data
            state.isLoading=false
        })
        builder.addCase(getMore.rejected,(state)=>{
            state.isLoading=false
        })
    }
})

export type ItemAction = ReturnType<typeof MoreSlice.actions[keyof typeof MoreSlice.actions]>;

export type ItemState = typeof initialState;

export const selectItems = (state: RootState) => state.more;

export default MoreSlice.reducer