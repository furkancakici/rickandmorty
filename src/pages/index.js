import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
   return (
      <div>
         <Head>
            <title>Rick & Morty - Next.js App</title>
            <meta name='description' content='Rick & Morty - Next.js App' />
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            veritatis ea quia praesentium repellat, sit doloremque dignissimos
            rem minima quae corporis temporibus porro perferendis illum, ullam
            dolor eligendi distinctio maiores.
         </div>
      </div>
   );
}
