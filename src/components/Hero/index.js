import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
   return (
      <div className='hero bg-base-200 mt-16 p-5 rounded-lg'>
         <div className='hero-content flex-col lg:flex-row  w-full md:w-[unset] !px-10'>
            <Image
               src={'/images/wallpaper.jpg'}
               className='max-w-lg rounded-lg shadow-2xl'
               alt='walpaper'
               width={350}
               height={400}
            />
            <div>
               <h1 className='text-5xl font-bold'>
                  Rick And Morty - Next.js App
               </h1>
               <p className='py-6 w-auto md:w-[500px]'>
                  Rick and Morty, Justin Roiland ve Dan Harmon tarafından Adult
                  Swim için yaratılan bir yetişkin animasyon televizyon
                  dizisidir. Dizi, kendi zamanlarını aile hayatı ve boyutlar
                  arası yolculuk arasında bölüştürmüş alkolik bilim insanı Rick
                  ve onun torunu Morty{`'`}nin maceralarını anlatır.
               </p>
               <Link href='/location'>
                  <a className='btn btn-primary'>Keşfet</a>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Hero;
