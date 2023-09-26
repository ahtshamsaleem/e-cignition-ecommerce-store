import { Button } from "../components";
import { IoCall } from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'

const Subscribe = ({bgColor, txtColor, border}) => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold max-lg:text-center'>
        Sign Up for
        <span className={`${txtColor}`}> Updates </span>& Newsletter
      </h3>

      <div className=' lg:max-w-[40%]  w-full flex items-center flex-col gap-2 p-2  rounded-full bg-transparent '>
        <h1 className="text-4xl leading-[60px]  font-palanquin font-bold py-4">Contact Us</h1>
        <h2 className="text-xl   font-palanquin font-semibold  "><MdEmail className="inline max-lg:mb-1"/> {" "} iqwebdev600@gmail.com</h2>
        <h2 className="text-xl   font-palanquin font-semibold"><IoCall className="inline"/>  +923016667656</h2>

      </div>

      
      <div className='lg:max-w-[40%]  w-full flex items-center max-md:flex-col gap-5 p-2 md:border md:border-slate-gray rounded-full bg-transparent md:bg-white'>
        <input type='text' placeholder='subscribe@ecignition.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth  backgroundColor={bgColor} textColor='text-white' borderColor={border}/>
        </div>
      </div>

      
    </section>
  );
};

export default Subscribe;
