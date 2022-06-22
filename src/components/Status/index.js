// Count Alive, Dead, Robots, Ailens, Humans

import { useEffect, useState } from 'react';

const Status = ({ characters }) => {
   const [counts, setCounts] = useState({
      species: {},
      status: {},
   });
   useEffect(() => {
      let species = new Set();
      let status = new Set();
      if (characters && characters.length > 0 && characters instanceof Array) {
         characters.forEach((character) => {
            species.add(character.species);
            status.add(character.status);
         });

         species = Array.from(species);
         status = Array.from(status);
         const countObject = { species: {}, status: {} };

         species.forEach((kind) => {
            const kindCount = characters.filter(
               (c) => c.species === kind
            ).length;
            countObject.species[kind] = kindCount;
         });

         status.forEach((stat) => {
            const statCount = characters.filter(
               (c) => c.status === stat
            ).length;
            countObject.status[stat] = statCount;
         });
         setCounts(countObject);
      }
   }, [characters]);

   return (
      <div className=' shadow mb-10 !font-bold flex flex-col w-full'>
         <div className='flex flex-wrap w-full'>
            {Object.keys(counts.status).map((stat) =>
               counts.status[stat] ? (
                  <div
                     key={stat}
                     className='stat w-max place-items-center text-green-500'
                  >
                     <div className='stat-title'>{stat}</div>
                     <div className='stat-value '>{counts.status[stat]}</div>
                  </div>
               ) : (
                  ''
               )
            )}
         </div>
         <div className='flex flex-wrap w-full'>
            {Object.keys(counts.species).map((kind) =>
               counts.species[kind] ? (
                  <div
                     key={kind}
                     className='stat w-max place-items-center text-orange-500'
                  >
                     <div className='stat-title'>{kind}</div>
                     <div className='stat-value '>{counts.species[kind]}</div>
                  </div>
               ) : (
                  ''
               )
            )}
         </div>
      </div>
   );
};

export default Status;
