'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

type AnimationProps = {
  rotate: string;
  top: number;
  left: number;
};

type AnimationPropsTwo = {
  rotate: string;
  bottom: number;
  right: number;
};

export const AboutImages = () => {
  const [animationProps, setAnimationProps] = useState<AnimationProps>({
    rotate: '-3deg',
    top: 32,
    left: 90,
  });

  const [animationPropsTwo, setAnimationPropsTwo] = useState<AnimationPropsTwo>({
    rotate: '3deg',
    bottom: 32,
    right: 90,
  });


  useEffect(() => {
    const updateAnimationProps = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        // For smaller screens
        setAnimationProps({ rotate: '-1deg', top: 10, left: 40 });
        setAnimationPropsTwo({ rotate: '1deg', bottom: 10, right: 40 });
      } else {
        // For larger screens
        setAnimationProps({ rotate: '-3deg', top: 32, left: 90 });
        setAnimationPropsTwo({ rotate: '3deg', bottom: 32, right: 90 });
      }
    };

    updateAnimationProps(); // Call initially
    window.addEventListener('resize', updateAnimationProps);

    return () => {
      window.removeEventListener('resize', updateAnimationProps);
    };
  }, []);
  return (
    <div className='flex justify-center items-center flex-[1] relative w-full sm:w-[565px] h-full mx-auto'>
      <motion.img whileInView={animationProps} transition={{
        duration: 0.3
      }}
        src='/corne_keyboard.webp' className='h-fit absolute select-none' width={166} height={166} alt="jonathan trevino's headshot" draggable={false} />
      <motion.img src='/jonathan_trevino_headshot.webp' className='h-fit absolute z-[2] select-none' width={166} height={166} alt="jonathan trevino's headshot" draggable={false} />
      <motion.img whileInView={animationPropsTwo} transition={{
        duration: 0.3
      }}
        src='/gundam.webp' className='h-fit absolute z-[1] select-none' width={166} height={166} alt="jonathan trevino's headshot" draggable={false} />
    </div>
  )
}

