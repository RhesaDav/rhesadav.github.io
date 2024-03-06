'use client';
import AboutCounter from '@/components/about/AboutCounter';
import AboutMeBio from '@/components/about/AboutMeBio';
import AboutSkill from '@/components/about/AboutSkill';
import { AboutMeTypes as Types } from '@/helpers/types/aboutMe';
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type Props = {};

export default function Page({}: Props) {
  const [data, setData] = useState<Types | undefined>(undefined);

  const fetchData = async (): Promise<Types> => {
    try {
      const res = await axios.get('data/about-me.json');
      setData(res.data);
      return res.data;
    } catch (error) {
      throw new Error('An unexpected error occurred');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
          },
        }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutMeBio data={data} />
      </motion.div>

      {/** Counter without paddings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
          },
        }}
        exit={{ opacity: 0 }}
      >
        <AboutCounter githubRepo={87} gitlabRepo={17} experience={3} positiveFeedbackPercent={100} projectCompletedPercent={100}/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
          },
        }}
        exit={{ opacity: 0 }}
      >
        <AboutSkill />
      </motion.div>

      {/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: {
          delay: 1
        } }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div> */}
    </div>
  );
}
