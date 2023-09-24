import { createSlice } from '@reduxjs/toolkit' 


const initialState = {
    isToast: false,
    uiColor: {
        bgColor: 'bg-green-500',
        txtColor: 'text-green-500'
    }
}

const uiSlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        setIsToast : (state, action) => {
           
                 state.isToast = !state.isToast;
        },

        setBgColor : (state, action) => {
                state.uiColor.bgColor = action.payload;
        },

        setTxtColor : (state, action) => {
            state.uiColor.txtColor = action.payload;
        }
    }
})


export const  { setIsToast, setBgColor, setTxtColor  } = uiSlice.actions;


export default uiSlice.reducer;