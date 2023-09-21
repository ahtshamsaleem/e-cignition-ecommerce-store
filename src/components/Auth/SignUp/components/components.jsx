import React from 'react';

export const InputCmp = ({
    label,
    type,
    placeholder,
    name,
    value,
    onChange,
    isValid,
    forwardRef
}) => {


    // const ref = useRef()
    return (
        <div className='flex py-2 justify-between w-full items-center max-lg:flex-col max-lg:items-start'>
            <label className='font-semibold text-lg  '>{label}</label>
            <input
                ref={forwardRef}
                onChange={onChange}
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`outline-none px-4 py-2 bg-gray-200 rounded-lg max-lg:w-full w-[70%] ${!isValid ? 'border-2 border-red-500' : 'border-2 border-transparent'}`}
            ></input>
        </div>
    );
};






export const RadioInputGender = ({gender, changeHandler}) => {
   

    return (
        <div className='flex py-2 justify-between w-full items-center max-lg:flex-col max-lg:items-start'>
            <label className='font-semibold text-lg  '>Gender</label>
            <div className='flex flex-row justify-around w-[calc(100%-80px)] max-lg:flex-col max-lg:items-start'>
                <label className='font-semibold text-lg flex items-center  '>
                    <input
                        name='gender'
                        onChange={changeHandler}
                        checked={gender === 'male'}
                        type='radio'
                        value='male'
                        
                        className='outline-none px-4 py-2 mr-1 bg-gray-200 rounded-md max-lg:w-full w-[70%]'
                    />
                    Male
                </label>

                <label className='font-semibold text-lg flex items-center  '>
                    <input
                    name='gender'
                     onChange={changeHandler}
                        checked={gender === 'female'}
                        type='radio'
                        value='female'
                        className='outline-none px-4 py-2 mr-1 bg-gray-200 rounded-md max-md:w-full w-[70%]'
                    />
                    Female
                </label>
            </div>
        </div>
    );
};
