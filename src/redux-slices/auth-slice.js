import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'












const initialState = {
    user: null,
    
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser : (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            //console.log(action.payload)
        },

        removeUser : (state) => {
            
            state.user = null;
        }
    },
    

 
    
})





export const {addUser, removeUser} = authSlice.actions;

export default authSlice.reducer;