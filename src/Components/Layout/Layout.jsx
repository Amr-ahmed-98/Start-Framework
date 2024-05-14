import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Layout = () => {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
        <footer className='text-white'>
          <div className='min-h-[30vh] bg-slate-700 '>
            <div className='container min-h-[15vh]'>
              <div className='flex items-center h-[30vh]  justify-center  gap-16  text-center'>
              <div>
                <h2 className='text-2xl font-bold mb-2'>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className='flex flex-col items-center'>
                <h2 className='text-2xl font-bold mb-2'>AROUND THE WEB</h2>
                <div>
                <i className="fa-brands fa-facebook p-3 text-lg border border-white  rounded-full mx-1 cursor-pointer"></i>
                <i className="fa-brands fa-twitter p-3 text-lg border border-white  rounded-full mx-1 cursor-pointer"></i>
                <i className="fa-brands fa-linkedin p-3 text-lg border border-white  rounded-full mx-1 cursor-pointer"></i>
                <i className="fa-solid fa-globe p-3 text-lg border border-white  rounded-full mx-1 cursor-pointer"></i>
                </div>
              </div>
              <div>
                <h2 className='text-2xl font-bold mb-2'>ABOUT FREELANCER</h2>
                <p>
                Freelance is a free to use, licensed Bootstrap theme created by Route
                </p>
              </div>
              </div>
            </div>
            <div className='bg-slate-900 text-center'>
           <p className='py-5'> Copyright © Your Website 2021</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Layout;
