import { FC, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { IconType } from "react-icons/lib/esm/iconBase";

type Props = {
    label: string;
    placeholder: string;
    error: any;
    refs: any;
    Icon: IconType;
}

const PasswordInput: FC<Props> = ({ label, placeholder, error, refs, Icon }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className={`${error ? 'text-red-500' : 'text-black dark:text-white'} w-[90%] md:w-[80%] mx-auto m-5`}>
            <label className='capitalize font-semibold dark:text-white' htmlFor={label}>
                {label}
            </label>
            <div className={`flex items-center border-b transition-all duration-100 ${error ? 'border-red-500' : 'border-neutral-500 dark:border-white focus-within:border-black dark:focus-within:border-white'}`}>
                <Icon className='text-2xl text-black dark:text-white' />
                <input
                    type={isVisible ? 'text' : 'password'}
                    className='pl-3 text-black dark:text-white text-lg bg-transparent p-2 w-full outline-none placeholder-neutral-500 dark:placeholder-neutral-400'
                    placeholder={placeholder}
                    name={label}
                    {...refs}
                />
                {
                    isVisible
                        ?
                        <AiFillEye onClick={() => setIsVisible(prev => !prev)} className="text-2xl cursor-pointer text-black dark:text-white" />
                        :
                        <AiFillEyeInvisible onClick={() => setIsVisible(prev => !prev)} className="text-2xl cursor-pointer text-black dark:text-white" />
                }
            </div>
            {
                error &&
                <p className='text-red-500 mt-2'>* {error}</p>
            }
        </div>
    )
}

export default PasswordInput;
