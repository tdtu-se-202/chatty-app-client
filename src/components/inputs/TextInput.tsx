import { FC } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineInfoCircle } from 'react-icons/ai';

type Props = {
    label: string;
    placeholder: string;
    error: any;
    informations: string[];
    refs: any;
    Icon: IconType;
}

const TextInput: FC<Props> = ({ label, placeholder, error, informations, refs, Icon }) => {
    return (
        <div className={`${error ? 'text-red-500' : 'text-black dark:text-white'} w-[90%] md:w-[80%] mx-auto m-5`}>
            <label className='capitalize font-semibold dark:text-white' htmlFor={label.toLowerCase()}>
                {label}
            </label>
            <div className={`flex items-center border-b transition-all duration-100 ${error ? 'border-red-500' : 'border-neutral-500 dark:border-white focus-within:border-black dark:focus-within:border-white'}`}>
                <Icon className='text-2xl text-black dark:text-white' />
                <input
                    className= 'pl-3 text-black dark:text-white text-lg bg-transparent p-2 w-full outline-none placeholder-neutral-500 dark:placeholder-neutral-200'
                    placeholder={placeholder}
                    name={label.toLowerCase()}
                    type='text'
                    {...refs}
                />
                {
                    (error && informations)
                    &&
                    <div className='group'>
                        <AiOutlineInfoCircle className='text-2xl text-black dark:text-white' />
                        <div className='absolute hidden group-hover:block bg-neutral-800 p-2 shadow-xl dark:text-white'>
                            {
                                informations.map((info: string, index: number) => {
                                    return <p key={index}>* {info}</p>
                                })
                            }
                        </div>
                    </div>
                }
            </div>
            {
                error &&
                <p className='text-red-500 mt-2'>* {error}</p>
            }
        </div>
    )
}

export default TextInput;
