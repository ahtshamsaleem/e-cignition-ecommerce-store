import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'












const initialState = {
    user: null,
    isAdmin: false
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser : (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            //console.log(action.payload)
            if (action.payload.email === 'umershah@gmail.com') {
                state.isAdmin = true;
            }
        },

        removeUser : (state) => {
            
            state.user = null;
        }
    },
    

 
    
})





export const {addUser, removeUser} = authSlice.actions;

export default authSlice.reducer;