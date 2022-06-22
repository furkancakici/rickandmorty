import Navbar from './navbar';
import Footer from './footer';
import { useDispatch } from 'react-redux';
import { setCharacters } from 'src/store/slices/charactersSlice';
import { setLocations } from 'src/store/slices/locationsSlice';
import { useEffect } from 'react';

const Layout = ({ children }) => {
   const dispatch = useDispatch();
   const fetchDatas = async () => {
      let locationsData = await fetch(
         'https://rickandmortyapi.com/api/location'
      );
      locationsData = await locationsData.json();
      locationsData = locationsData.results;

      let charactersData = await fetch(
         'https://rickandmortyapi.com/api/character'
      );
      charactersData = await charactersData.json();
      charactersData = charactersData.results;
      dispatch(setCharacters(charactersData));
      dispatch(setLocations(locationsData));
   };

   useEffect(() => {
      fetchDatas();
   }, []);

   return (
      <div className='min-h-screen !w-screen '>
         <Navbar />
         <main className='container mx-auto'>{children}</main>
         <Footer />
      </div>
   );
};

export default Layout;
