import { FC, ReactNode } from 'react'
import { useLocation } from 'react-router-dom';
import ContentArea from './ContentArea';
import Sidebar from './Sidebar';
import ThemeToggleButton from "../buttons/ThemeToggleButton";

type Props = {
    children: ReactNode;
}

declare global {
    interface Window {
        electron: {
            showNotification(title: string, body: string): void;
        }
    }
}
const Layout: FC<Props> = ({ children }) => {
    const location = useLocation();
    const handleShowNotification = () => {
        const title = 'title';
        const body = 'body';

        window.electron.showNotification(title, body);
    };

    if (location.pathname === '/login' || location.pathname === '/register') {
        return (
            <>
                <div className="bg-white dark:bg-black text-black dark:text-white">
                    <ThemeToggleButton/>
                    <button onClick={handleShowNotification}>
                        Click me
                    </button>
                    <div className="flex items-center justify-center flex-col pb-12 min-h-screen md:min-h-fit overflow-auto">
                        {children}
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-5 xl:grid-cols-7 lg:w-[90%] lg:h-[90%] max-w-[1600px] w-full h-full md:max-h-[1000px] bg-neutral-300 dark:bg-neutral-700 rounded-md'>
                <Sidebar />
                <ContentArea>
                {children}
                </ContentArea>
            </div>
        </div>
    )


}

export default Layout;
