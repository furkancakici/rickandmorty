import List from 'components/List';
import Status from 'components/Status';
import { useEffect } from 'react';

const Location = ({ allCharacters }) => {
   return (
      <div className='text-center'>
         <Status characters={allCharacters} />
         <List />
      </div>
   );
};

export default Location;
