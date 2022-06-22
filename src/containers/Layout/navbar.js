import Link from 'next/link';

const Navbar = () => {
   return (
      <>
         <nav className='navbar bg-base-100 container mx-auto'>
            <div className='flex-1'>
               <Link href={'/'}>
                  <a className='btn btn-ghost normal-case text-xl'>
                     Rick & Morty
                  </a>
               </Link>
            </div>
            <div className='flex-none'>
               <ul className='menu menu-horizontal p-0'>
                  <li>
                     <Link href={'/location'}>
                        <a>Locations</a>
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
