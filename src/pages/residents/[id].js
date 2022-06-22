import Card from 'components/Card';
import Status from 'components/Status';
import residentsFetch from 'src/services/residentsFetch';
import Head from 'next/head';

const Residents = ({ locationResidents, locationName }) => {
   return (
      <div className='w-full flex items-center flex-col '>
         <Head>
            <title>{locationName && locationName} - Residents</title>
            <meta name='description' content='Location Residents' />
         </Head>
         <Status characters={locationResidents} />
         <h3 className='text-3xl font-bold text-center text-green-500 mb-10 '>
            Location: {locationName}
         </h3>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-6 w-full'>
            {locationResidents?.map?.((resident) => (
               <Card key={resident.id} {...resident} />
            ))}
         </div>
      </div>
   );
};

export default Residents;

export const getServerSideProps = async ({ query }) => {
   const { id } = query;
   const { locationResidentsData, locationName } = await residentsFetch(id);
   return {
      props: {
         locationResidents: locationResidentsData,
         locationName,
      },
   };
};
