// Count Alive, Dead, Robots, Ailens, Humans

import { useSelector } from 'react-redux';

const Status = () => {
   const characters = useSelector((state) => state.characters);

   const countAlive = characters.filter(
      (character) => character.status === 'Alive'
   ).length;
   const countDead = characters.filter(
      (character) => character.status === 'Dead'
   ).length;
   const countUnknown = characters.filter(
      (character) => character.status === 'unknown'
   ).length;
   const countAliens = characters.filter(
      (character) => character.species === 'Alien'
   ).length;

   const countHumans = characters.filter(
      (character) => character.species === 'Human'
   ).length;

   return (
      <div className='stats shadow mb-10 !font-bold'>
         <div className='stat place-items-center text-green-500'>
            <div className='stat-title'>Alive</div>
            <div className='stat-value '>{countAlive}</div>
         </div>

         <div className='stat place-items-center text-red-400'>
            <div className='stat-title'>Dead</div>
            <div className='stat-value '>{countDead}</div>
         </div>

         <div className='stat place-items-center text-yellow-400'>
            <div className='stat-title'>Unknown</div>
            <div className='stat-value '>{countUnknown}</div>
         </div>
      </div>
   );
};

export default Status;
