import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
   return (
      <div className='min-h-screen'>
         <Navbar />
         <main className='container mx-auto'>{children}</main>
         <Footer />
      </div>
   );
};

export default Layout;
