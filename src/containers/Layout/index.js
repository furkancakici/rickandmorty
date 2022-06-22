import Navbar from './navbar';
import Footer from './footer';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters } from 'src/store/slices/charactersSlice';
import { setLocations } from 'src/store/slices/locationsSlice';
import { useEffect } from 'react';
import { setTheme } from 'src/store/slices/themeSlice';

const Layout = ({ children }) => {
   const theme = useSelector((state) => state.theme);

   const dispatch = useDispatch();

   useEffect(() => {
      let theme = localStorage.getItem('rickmorty-theme');

      if (!theme) {
         theme = process.env.NEXT_PUBLIC_DEFAULT_THEME;
      }

      dispatch(setTheme(theme));
   }, []);

   useEffect(() => {
      const htmlElement = document.documentElement;
      htmlElement.setAttribute('data-theme', theme);
      localStorage.setItem('rickmorty-theme', theme);
      console.log(localStorage.getItem('rickmorty-theme'));
   }, [theme]);

   return (
      <div className='min-h-screen !w-screen '>
         <Navbar />
         <main className='container mx-auto'>{children}</main>
         <Footer />
      </div>
   );
};

export default Layout;
