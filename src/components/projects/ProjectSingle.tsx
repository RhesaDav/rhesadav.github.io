'use client'
import { ProjectTypes } from '@/helpers/types/project';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const imageStyle = { maxWidth: '100%', height: 'auto' };

type Props = {
    id: number;
    img: string;
    title: string;
    category: string;
}

const ProjectSingle = (props: ProjectTypes) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: {
                delay: 1
            } }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
			whileHover={{
				scale: 1.1,
			}}
		>
			<Link
				href="/projects/[id]"
				as={'/projects/' + props.id}
				aria-label="Single Project"
				passHref
			>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<Image
							src={props.images[0]}
							className="rounded-t-xl border-none object-cover h-72"
							alt="Single Project"
							width={500}
							height={240}
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{props.title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{props.category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;