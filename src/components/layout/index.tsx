import { FC, ReactNode, useEffect  } from 'react'
import { useLocation } from 'react-router-dom';
import ContentArea from './ContentArea';
import Sidebar from './Sidebar';
import { useAppSelector, useAppDispatch } from '../../hooks/useTheme';
import { toggleTheme, setTheme } from "../../redux/features/themeSlice";



type Props = {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    const location = useLocation();

    const theme = useAppSelector((state) => state.theme.value);
    const dispatch = useAppDispatch();

    // Read theme from localStorage and set it in the redux state
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            dispatch(setTheme(savedTheme));
        }
    }, [dispatch]);

    // Toggle theme class in document and save to localStorage
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'light');
        localStorage.setItem('theme', theme);
    }, [theme]);

    if (location.pathname === '/login' || location.pathname === '/register') {
        return (
            <>
                <div className="bg-white dark:bg-black text-black dark:text-white">
                    <button onClick={() => dispatch(toggleTheme())} className="py-2 px-4 bg-blue-500 text-white">
                        Toggle Dark Mode
                    </button>
                    {children}
                </div>
            </>
        )
    }

    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-5 xl:grid-cols-7 lg:w-[90%] lg:h-[90%] max-w-[1600px] w-full h-full md:max-h-[1000px] bg-neutral-800 rounded-md'>
                <Sidebar />
                <ContentArea>
                {children}
                </ContentArea>
            </div>
        </div>
    )


}

export default Layout;
