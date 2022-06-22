import React from 'react';

const Card = ({ name, status, gender, species, image, origin, type }) => {
   return (
      <div className='card w-96 bg-base-100 shadow-xl'>
         <figure>
            <img src={image} alt='Shoes' />
         </figure>
         <div className='card-body'>
            <h2 className='card-title'>{name}</h2>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Origin: {origin.name}</p>
            {type && <p>Type: {type}</p>}
            <div className='card-actions justify-end'>
               <div
                  className={`badge ${
                     status === 'Alive'
                        ? 'bg-green-400'
                        : status === 'Dead'
                        ? 'bg-red-400'
                        : 'bg-yellow-400'
                  } text-black p-3 `}
               >
                  {status}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;
