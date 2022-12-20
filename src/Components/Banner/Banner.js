import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import sree from '../../assets/sree2.png'

const Banner = () => {
    return (
            <div className='w-full h-screen'>
              {/* Container */}
              <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen'>
                <p className='text-fuchsia-500 leading-relaxed'>Hi, my name is</p>
                <h1 className='text-5xl font-bold text-teal-500 leading-relaxed'>
                 SREEMAYE CHAKRABORTTY
                </h1>
                <h2 className='text-fuchsia-500 text-5xl font-bold leading-relaxed'>
                  I'm a <span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
           words={['Frontend Developer', 'Software Engineer', 'React JS Developer', 'JavaScript Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
                </h2>
                <p className='text-slate-600 py-4 max-w-[700px]'>
                  I’m a full-stack developer specializing in building (and occasionally
                  designing) exceptional digital experiences. Currently, I’m focused on
                  building responsive full-stack web applications.
                </p>
                <div>
                  <button className='group border-2 px-6 py-3 my-2 flex items-center bg-teal-400 hover:bg-teal-500 hover:border-teal-600'>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                    </span>
                  </button>
                </div>
              </div>
            </div>
    );
};

export default Banner;