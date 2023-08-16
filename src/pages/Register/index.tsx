import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormSuccess from '../../components/loading/FormSuccess';
import Divider from './components/Divider';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(true);

  return (
    <div className='flex justify-center items-center w-full h-[100vh] dark:bg-black text-black dark:text-white'>
      <div className='py-10 md:py-5 w-full h-full sm:h-auto sm:w-[400px] bg-neutral-200 dark:bg-neutral-800 shadow-lg rounded-md text-white dark:text-black'>
        {
          isFormOpen
            ?
            <>
              <h1 className='text-3xl font-semibold text-center sm:hidden mb-10'>Create Account</h1>
              <RegisterForm setIsFormOpen={setIsFormOpen} />
              <div className='text-center mb-3'>
                <Divider />
                <Link className='hover:text-neutral-700 dark:hover:text-neutral-300 text-neutral-800 dark:text-neutral-100' to='/login'>Have an account? Login</Link>
              </div>
            </>
            :
            <FormSuccess message='Account created' redirectTo='login' />
        }
      </div>
    </div>
  );
};

export default Register;
