import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBgColor, setBigHeroImg, setBorderClr, setFooterLogo, setGradientFrom, setGradientTo, setHeadingClr, setLogo, setTxtColor } from '../redux-slices/ui-slice';
import { CustomerReviews, Footer, Hero, Services, SpecialOffer, Subscribe, SuperQuality, } from '../sections';
import Header from './Header';
import PopularProducts from './PopularProducts';
import green from '../assets/green.png';
import blue from '../assets/blue.png';
import orange from '../assets/orange.png';
import footerGreen from '../assets/footerGreen.png';
import footerBlue from '../assets/footerBlue.png';
import footerOrange from '../assets/footerOrange.png';
import { img1, img2, img3 } from '../assets/img';

const Home = () => {

    const from = useSelector(state => state.ui.uiColor.from)
    const to = useSelector(state => state.ui.uiColor.to);
   
    const  bgColor = useSelector(state=> state.ui.uiColor.bgColor);
    const  txtColor = useSelector(state=> state.ui.uiColor.txtColor);
    const  border = useSelector(state=> state.ui.uiColor.border);

    const HeadingClr = useSelector(state => state.ui.uiColor.HeadingClr);
    const bigHeroImg = useSelector(state => state.ui.uiColor.bigHeroImg);




    const dispatch = useDispatch();


    const change2Green = () => {
        dispatch(setBgColor('bg-green-500'));
        dispatch(setTxtColor('text-green-500'));
        dispatch(setBorderClr('border-green-500'));

        dispatch(setGradientFrom('from-[#c1dfc4]'));
        dispatch(setGradientTo('to-[#deecdd]'));

        dispatch(setLogo(green));
        dispatch(setHeadingClr('text-transparent bg-clip-text bg-gradient-to-r to-green-500 from-slate-800'));

        dispatch(setBigHeroImg(img1));

        dispatch(setFooterLogo(footerGreen));
    }

    const change2Blue = () => {
        dispatch(setBgColor('bg-blue-500'));
        dispatch(setTxtColor('text-blue-500'));
        dispatch(setBorderClr('border-blue-500'));

        dispatch(setGradientFrom('from-[#c1d4df]'));
        dispatch(setGradientTo('to-[#dde7ec]'));

        dispatch(setLogo(blue));
        dispatch(setHeadingClr('text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-slate-800'));

        dispatch(setBigHeroImg(img2));

        dispatch(setFooterLogo(footerBlue));
    }

    const change2Orange = () => {
        dispatch(setBgColor('bg-orange-500'));
        dispatch(setTxtColor('text-orange-500'));
        dispatch(setBorderClr('border-orange-500'));

        dispatch(setGradientFrom('from-[#dfd4c1]'));
        dispatch(setGradientTo('to-[#ece8dd]'));

        dispatch(setLogo(orange));
        dispatch(setHeadingClr('text-transparent bg-clip-text bg-gradient-to-r to-orange-500 from-slate-800'));

        dispatch(setBigHeroImg(img3));

        dispatch(setFooterLogo(footerOrange));
    }


    







    
    
    return (
        <main className={`relative bg-gradient-to-r ${from} ${to}`}>
            <Header />
            <section className='xl:padding-l wide:padding-r padding-b'>
                <Hero  from={from} to={to} bgColor={bgColor} txtColor={txtColor} border={border} HeadingClr={HeadingClr} bigHeroImg={bigHeroImg}  change2Green={change2Green}  change2Blue={change2Blue}  change2Orange={change2Orange} />
            </section>
            <section className='padding'>
                <PopularProducts txtColor={txtColor}/>
            </section>
            <section className='py-12 sm:py-20'>
                <SuperQuality bgColor={bgColor} txtColor={txtColor} border={border}/>
            </section>
            <section className='padding-x py-10'>
                <Services bgColor={bgColor}/>
            </section>
            <section className='padding'>
                <SpecialOffer bgColor={bgColor} txtColor={txtColor} border={border}/>
            </section>
            <section className='bg-pale-blue/[0.5] padding shadow-md'>
                <CustomerReviews txtColor={txtColor}/>
            </section>
            <section className='padding-x sm:py-32 py-16 w-full'>
                <Subscribe bgColor={bgColor} txtColor={txtColor} border={border}/>
            </section>
            <section className=' bg-black padding-x padding-t pb-8'>
                <Footer />
            </section>
        </main>
    );
};

export default Home;
