import Hero from 'components/Hero';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home({ data }) {
   useEffect(() => {
      console.log(data);
   }, []);
   return (
      <div>
         <Head>
            <title>Rick & Morty - Next.js App</title>
            <meta name='description' content='Rick & Morty - Next.js App' />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Hero />
      </div>
   );
}
