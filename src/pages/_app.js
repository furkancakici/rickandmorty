import 'styles/globals.css';
import Layout from 'containers/Layout';

function MyApp({ Component, pageProps }) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
}

export default MyApp;
