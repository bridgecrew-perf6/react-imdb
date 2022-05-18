import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/api/MovieApi";
import {APIKey} from "../../common/api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async (term)=>{
    const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=movie`
    ).catch((err)=>{
        console.log("Err: ",err)
    })
    return response.data;
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async (term)=>{
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${term}&type=series`
        ).catch((err)=>{
            console.log("Err: ",err)
        })
        return response.data;
    })
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',
    async (id)=>{
        const response = await movieApi.get(
            `?apiKey=${APIKey}&i=${id}&Plot=full`
        ).catch((err)=>{
            console.log("Err: ",err)
        })
        return response.data;
    })
const initialState = {
    movies: {},
    shows:{},
    selectedMovieOrShow:{}
}
const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeSelectedMovieOrShow:(state)=>{
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=> {
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=> {
            console.log('fulfilled');
            return {...state,movies:payload};
        },
        [fetchAsyncMovies.rejected]:()=> {
            console.log('rejected');
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=> {
            console.log('fulfilled');
            return {...state,shows:payload};
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=> {
            console.log('fulfilled');
            return {...state,selectedMovieOrShow:payload};
        },
    }
})
export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const setSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer
