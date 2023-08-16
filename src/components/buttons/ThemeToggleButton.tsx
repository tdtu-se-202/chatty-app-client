import React, { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { toggleTheme, setTheme } from '../../redux/features/themeSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTheme';
import { selectIsLoggedIn } from "../../redux/features/authSelector";
import { useSelector } from "react-redux";
import {FiMoon, FiSun} from "react-icons/fi";

const ThemeToggleButton: React.FC = () => {
    const themeValue = useAppSelector((state) => state.theme.value);
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    const dispatch = useAppDispatch();

    // Read theme from localStorage and set it in the redux state
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            dispatch(setTheme(savedTheme as 'light' | 'dark'));
        }
    }, [dispatch]);

    // Toggle theme class in document and save to localStorage
    useEffect(() => {
        document.documentElement.classList.toggle('dark', themeValue === 'dark');
        localStorage.setItem('theme', themeValue);
    }, [themeValue]);

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            {
                isLoggedIn ?
                    <button
                        onClick={() => dispatch(toggleTheme())}
                        className='w-full hover:bg-neutral-300 dark:hover:bg-neutral-700 duration-200 p-3 px-8 flex items-center'
                    >
                        {isDarkMode ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />}
                        {isDarkMode ? "Light" : "Dark"} Mode
                    </button>
                    :
                    <button onClick={() => dispatch(toggleTheme())} className="py-2 px-4 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white flex items-center">
                        {isDarkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
                    </button>
            }
        </>

    );
};

export default ThemeToggleButton;
