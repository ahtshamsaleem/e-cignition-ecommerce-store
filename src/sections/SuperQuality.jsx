import { Button } from '../components';
import { sec1 } from '../assets/img/sections';

const SuperQuality = () => {
    return (
        <section id='about-us' className={`flex bg-gray-100 px-20 py-14 max-md:px-0 max-md:pb-0 max-md:pt-8 w-full justify-center shadow-md `}>
            <div className='flex justify-around items-center max-lg:flex-col max-md:gap-10 w-full overflow-hidden'>
                <div className='flex flex-col max-md:px-8'>
                    <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
                        We Provide You
                        <span className='text-coral-red'> Super </span>
                        <span className='text-coral-red'>Quality </span> Shoes
                    </h2>
                    <p className='mt-4 lg:max-w-lg info-text'>
                        Ensuring premium comfort and style, our meticulously
                        crafted footwear is designed to elevate your experience,
                        providing you with unmatched quality, innovation, and a
                        touch of elegance.
                    </p>
                    <p className='mt-6 lg:max-w-lg info-text'>
                        Our dedication to detail and excellence ensures your
                        satisfaction
                    </p>
                    <div className='mt-11'>
                        <Button label='View details' />
                    </div>
                </div>

                <div className='flex'>
                    <img
                        src={sec1}
                        alt='product detail'
                        width={570}
                        height={522}
                        className='object-cover rounded-[3rem] shadow-sm shadow-slate-900 max-md:rounded-none '
                    />
                </div>
            </div>
        </section>
    );
};

export default SuperQuality;
