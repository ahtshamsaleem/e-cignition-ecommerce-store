import { Heroproducts, statistics } from '../constants';
import { Button, ShoeCard } from '../components';
import { arrowRight } from '../assets/icons';
import { Typewriter } from 'react-simple-typewriter';

const Hero = ({ from, to, bgColor, txtColor, border, HeadingClr, bigHeroImg, change2Green, change2Blue, change2Orange, }) => {
    return (
        <section
            id='home'
            className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
        >
            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
                <p className={`text-xl font-montserrat ${txtColor}`}>
                    Our Latest Collection
                </p>

                <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                    <span
                        className={`xl:bg-gradient-to-r ${from} ${to} px-4 xl:whitespace-nowrap relative z-10 pr-10 text-slate-800`}
                    >
                        <span className={`${HeadingClr}`}>Voopoo</span> Drag 4
                    </span>
                    <br />
                    <span className={`inline-block mt-3 ${'text-slate-800'}`}>
                        G
                        <Typewriter
                            words={['unmetal', 'ene Fan 2.0']}
                            typeSpeed={90}
                            deleteSpeed={90}
                            loop={3}
                        />
                    </span>{' '}
                </h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                    Discover the new era of Pods, try our most selling Pods and
                    Flavors!
                </p>

                <Button
                    label='Shop now'
                    iconURL={arrowRight}
                    backgroundColor={bgColor}
                    textColor={'text-white'}
                />

                <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className='text-4xl font-palanquin font-bold'>
                                {stat.value}
                            </p>
                            <p className='leading-7 font-montserrat text-slate-gray'>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className={`relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40   bg-cover bg-center`}
            >
                <div className='relative'>
                    <img
                        src={bigHeroImg}
                        alt='pods collection'
                        width={610}
                        height={502}
                        className='object-cover relative z-5 -translate-y-5 shadow-md rounded-3xl   '
                    />

                    <div className='flex sm:gap-6 gap-4  absolute -bottom-[40%]  max-sm:px-6 md:-bottom-[20%] md:left-[20%]'>
                        {Heroproducts.map((item, index) => (
                            <div key={index}>
                                <ShoeCard
                                    id={item.id}
                                    index={index}
                                    img={item.imgURL}
                                    bigHeroImg={bigHeroImg}
                                    change2Green={change2Green}
                                    change2Blue={change2Blue}
                                    change2Orange={change2Orange}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
