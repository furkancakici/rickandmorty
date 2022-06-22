import { html } from 'daisyui/dist/base';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'src/store/slices/themeSlice';

const Navbar = () => {
   const dispatch = useDispatch();
   const theme = useSelector((state) => state.theme);

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

            <input
               type='checkbox'
               checked={theme === process.env.NEXT_PUBLIC_DARK_THEME}
               className='toggle'
               onChange={(e) => {
                  let defaultTheme = process.env.NEXT_PUBLIC_DEFAULT_THEME;
                  let darkTheme = process.env.NEXT_PUBLIC_DARK_THEME;
                  dispatch(
                     setTheme(
                        e.currentTarget.checked ? darkTheme : defaultTheme
                     )
                  );
               }}
            />
         </nav>
      </>
   );
};

export default Navbar;
