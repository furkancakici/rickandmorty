import List from 'components/List';
import Status from 'components/Status';

const Location = ({ locations }) => {
   return (
      <div className='text-center'>
         <Status />
         <List />
      </div>
   );
};

export default Location;
