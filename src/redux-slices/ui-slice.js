import { createSlice } from '@reduxjs/toolkit';
import green from '../assets/green.png';
import { img1 } from '../assets/img';
import footerGreen from '../assets/footerGreen.png';

const initialState = {
    uiColor: {
        bgColor: 'bg-green-500',
        txtColor: 'text-green-500',
        border: 'border-green-500',
        from: 'from-[#c1dfc4]',
        to: 'to-[#deecdd]',

        logo: green,
        HeadingClr:'text-transparent bg-clip-text bg-gradient-to-r to-green-500 from-slate-800',
        bigHeroImg: img1,
        footerLogo: footerGreen,
    },
};

const uiSlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        setBgColor: (state, action) => {
            state.uiColor.bgColor = action.payload;
            console.log(action);
        },

        setTxtColor: (state, action) => {
            state.uiColor.txtColor = action.payload;
        },

        setBorderClr: (state, action) => {
            state.uiColor.border = action.payload;
        },

        setGradientFrom: (state, action) => {
            state.uiColor.from = action.payload;
        },

        setGradientTo: (state, action) => {
            state.uiColor.to = action.payload;
        },

        setLogo: (state, action) => {
            state.uiColor.logo = action.payload;
        },

        setHeadingClr: (state, action) => {
            state.uiColor.HeadingClr = action.payload;
        },

        setBigHeroImg: (state, action) => {
            state.uiColor.bigHeroImg = action.payload;
        },

        setFooterLogo: (state, action) => {
            state.uiColor.footerLogo = action.payload;
        },
    },
});

export const { setBgColor, setTxtColor, setBorderClr, setGradientFrom, setGradientTo, setLogo, setHeadingClr, setBigHeroImg, setFooterLogo, } = uiSlice.actions;

export default uiSlice.reducer;
