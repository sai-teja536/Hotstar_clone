import {createSlice} from '@reduxjs/toolkit';

const initialState={
 recommended:null,
 NewDisney:null,
 Original:null,
 Trending:null,
}

const movieSlice=createSlice({
  name:'movie',
  initialState,
  reducers:{
    setMovies:(state,action)=>{
     state.recommended=action.payload.recommended;
     state.NewDisney=action.payload.newDisney; 
     state.Original=action.payload.original;
     state.Trending=action.payload.trending;
    }, 
  },
});

export const {setMovies}=movieSlice.actions;

export const selectRecommended=(state)=>state.movie.recommended;
export const selectNewDisney=(state)=>state.movie.NewDisney;
export const selectOriginal=(state)=>state.movie.Original;
export const selectTrending=(state)=>state.movie.Trending;

export default movieSlice.reducer;



