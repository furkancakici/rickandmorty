import Card from 'components/Card';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Residents = () => {
   useEffect(() => {
      setCharacters([]);
   }, []);

   const router = useRouter();
   const { id } = router.query;
   const locations = useSelector((state) => state.locations);
   const [selectedLocation, setSelectedLocation] = useState(null);

   const fetchCharacter = async (url) => {
      let characterData = await fetch(url);
      characterData = await characterData.json();
      characterData = characterData;
      setCharacters((prevState) => [...prevState, characterData]);
   };

   useEffect(() => {
      setSelectedLocation(locations.find((l) => l.id === parseInt(id)));
   }, [locations]);

   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      if (selectedLocation) {
         selectedLocation.residents.forEach((r) => {
            fetchCharacter(r);
         });
      }
   }, [selectedLocation]);

   return (
      <div>
         <h3 className='text-3xl font-bold text-center text-green-500 mb-10 '>
            Location: {selectedLocation?.name}
         </h3>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-6'>
            {Array.from(new Set(characters))?.map((character) => (
               <Card key={character.id} {...character} />
            ))}
         </div>
      </div>
   );
};

export default Residents;
