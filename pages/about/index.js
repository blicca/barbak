import React, { useState } from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiFramer,
} from 'react-icons/si';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [FaWordpress, FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs, SiFramer],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Themeforest - Elite Author',
        stage: '2015 - Current',
      },
      {
        title: 'Upwork - Top Rated ',
        stage: '2019 - Current',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'WordPress Developer - Freelancer',
        stage: '2019 - Current',
      },
      {
        title: 'WordPress Developer - TDF Digital',
        stage: '2019 - 2023',
      },
      {
        title: 'Project Manager - BliccaThemes',
        stage: '2013 - 2019',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'React and GraphQL - Wesbos',
        stage: '2023',
      },
      {
        title: 'React For Beginners - Wesbos',
        stage: '2023',
      },
      {
        title: 'Computer Education and Instructional Technology',
        stage: '2010',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
      <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
        <Circles />
        <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex absolute bottom-0 -left-[370px]'
        >
          <Avatar />
        </motion.div>
        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
          <div className='flex-1 flex flex-col justify-center'>
            <motion.h2
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2'
            >
              Crafting Web <span className='text-accent'>Experiences:</span>
            </motion.h2>
            <motion.p
                variants={fadeIn('right', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
            >
              Over a decade ago, my journey as a WordPress developer began, blending backend and frontend expertise to craft unique online experiences...
            </motion.p>
            <motion.div
                variants={fadeIn('right', 0.6)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
            >
              {/* Experience, clients, projects, awards */}
              {/* ... */}
            </motion.div>
          </div>
          <motion.div
              variants={fadeIn('left', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
          >
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item, itemIndex) => (
                  <div
                      key={itemIndex}
                      className={`${
                          index === itemIndex &&
                          'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                      }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                      onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
              ))}
            </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item, itemIndex) => (
                  <div
                      key={itemIndex}
                      className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                  >
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                    <div className='hidden md:flex'>-</div>
                    <div>{item.stage}</div>
                    <div className='flex gap-x-4'>
                      {item.icons?.map((Icon, iconIndex) => (
                          <div key={`${item.title}-icon-${iconIndex}`} className='text-2xl text-white'>
                            <Icon />
                          </div>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default About;