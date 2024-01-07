import { configureStore } from "@reduxjs/toolkit";
import DataSliceReducer from "../reducers/DataSliceReducer";
import MovieListReducer from "../reducers/MovieListReducer";
import DetailsReducer from "../reducers/DetailsReducer";
import MoreReducer from "../reducers/MoreReducer";

export const store = configureStore({
    reducer: {
        items: DataSliceReducer,
        nowPlaying:MovieListReducer,
        details:DetailsReducer,
        more:MoreReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;