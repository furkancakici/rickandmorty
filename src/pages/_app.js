import 'styles/globals.css';
import Layout from 'containers/Layout';
import Store from 'src/store/store';
import { Provider, useSelector } from 'react-redux';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
   return (
      <Provider store={Store}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </Provider>
   );
}

export default MyApp;
