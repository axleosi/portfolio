'use client';

import TypedWrapper from './TypedWrapper';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex justify-between flex-col items-center gap-5 w-full [@media(min-width:700px)]:flex-row mt-12'>
      <div className='text-2xl [@media(min-width:500px)]:text-4xl text-center [@media(min-width:700px)]:text-left p-3 font-bold [@media(min-width:700px)]:w-[60%] w-full'>
        <h1>HI, I&apos;M OSI,</h1>
        <h1 className="mt-2 text-blue-400">
          <TypedWrapper
            strings={['A FULL STACK DEVELOPER', 'REACT ENTHUSIAST', 'NODE.JS LOVER']}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h1>

        <p className="text-lg mt-4 text-gray-600">
          I build scalable and modern web apps using the MERN stack and more.
        </p>

        
      </div>

      <div className='w-[60%] [@media(min-width:700px)]:w-[40%]'>
        <Image
          src="/img.JPG"
          alt="Portrait of Osi, Full Stack Developer"
          width={400}
          height={400}
          className='aspect-square w-full object-top object-cover rounded'
        />
      </div>
    </div>
  );
};

export default Hero;
