import React from 'react';
import { FaReact } from 'react-icons/fa';
import Image from 'next/image';
import { skillList } from '@/data/skillList';
import { motion } from 'framer-motion';

type Props = {};

export default function AboutSkill({}: Props) {
  return (
    <div className="mt-5 sm:mt-5 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <h1 className="text-ternary-dark dark:text-ternary-light pt-5 text-center font-bold text-2xl">Skills</h1>
      <div className="font-general-medium container mx-auto py-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skillList.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={100}
              height={0}
              className="h-24"
            />
            <h1 className="text-ternary-dark dark:text-ternary-light my-5 text-center">
              {item.name}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
