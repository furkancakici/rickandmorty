import LocationComponent from 'containers/Location';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import characterFetch from 'src/services/characterFetch';
import locationsFetch from 'src/services/locationsFetch';
import { setLocations } from 'src/store/slices/locationsSlice';

const Location = ({ allCharacters, locations }) => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setLocations(locations));
   });

   return (
      <div>
         <Head>
            <title>Locations</title>
            <meta name='description' content='Locations' />
         </Head>
         <LocationComponent allCharacters={allCharacters} />
      </div>
   );
};

export default Location;

export const getStaticProps = async () => {
   const allCharactersData = await characterFetch();
   const locations = await locationsFetch();

   return {
      props: {
         allCharacters: allCharactersData,
         locations,
      },
   };
};
