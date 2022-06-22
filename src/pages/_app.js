import 'styles/globals.css';
import Layout from 'containers/Layout';
import Store from 'src/store/store';
import { Provider } from 'react-redux';

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
