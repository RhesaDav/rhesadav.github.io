'use client'
import ContactDetails from '@/components/contact/ContactDetail'
import ContactForm from '@/components/contact/ContactForm'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
			>
				<ContactForm />

				<ContactDetails />
			</motion.div>
		</div>
  )
}