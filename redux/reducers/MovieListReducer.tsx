import { Data } from "@/app/types/types";
import { Store, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "../store/store";

export const initialState = {
    nowPlaying: {} as Data,
    isLoading: false,
  };

  const api_key = "026c8ca6d2a0b5762bfaef064c38e699"
  

export const getNowPlaying = (createAsyncThunk("getNowPlaying",async()=>{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
        return response.data
}))

const playingSlice = createSlice({
    name:"nowPlaying",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getNowPlaying.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(getNowPlaying.fulfilled,(state,action)=>{
            state.nowPlaying=action.payload
            state.isLoading=false
        })
        builder.addCase(getNowPlaying.rejected,(state)=>{
            state.isLoading=false
        })
    }
})

export type ItemAction = ReturnType<typeof playingSlice.actions[keyof typeof playingSlice.actions]>;

export type ItemState = typeof initialState;

export const selectItems = (state: RootState) => state.nowPlaying;

export default playingSlice.reducer