import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        navigationParam: null,

    },
    reducers: {
       setNavigationInfo: (state, action) => {
           state.navigationParam = action.payload.navigationParam
       }

    },
});

export const { setNavigationInfo } = navigationSlice.actions;



export const selectNavigationParam = (state) => state.navigation.navigationParam;


export default navigationSlice.reducer;
