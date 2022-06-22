import Link from 'next/link';
import { useSelector } from 'react-redux';

const List = () => {
   const locations = useSelector((state) => state.locations);
   return (
      <div>
         <div className='overflow-x-auto grid grid-cols-12 md:grid-cols-1'>
            <table className='table table-compact w-full  '>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Dimension</th>
                     <th>Resident Count</th>
                     <th>Type</th>
                  </tr>
               </thead>

               <tbody>
                  {locations.map(({ id, name, dimension, residents, type }) => {
                     return (
                        <Link href={'/residents/' + id} key={id}>
                           <tr className='cursor-pointer'>
                              <th>{name}</th>
                              <th>{dimension}</th>
                              <th>{residents.length}</th>
                              <th>{type}</th>
                           </tr>
                        </Link>
                     );
                  })}
               </tbody>

               <tfoot>
                  <tr>
                     <th>Name</th>
                     <th>Dimension</th>
                     <th>Resident Count</th>
                     <th>Type</th>
                  </tr>
               </tfoot>
            </table>
         </div>
      </div>
   );
};

export default List;
