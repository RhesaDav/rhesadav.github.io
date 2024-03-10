import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
	FiInstagram,
	FiMail,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		name: 'rhesadav48@gmail.com',
		icon: <FiMail />,
		link: 'mailto:rhesadav48@gmail.com?body=Hello!!'
	},
	{
		name: 'Rhesa Davinanto',
		icon: <FiInstagram />,
		link: 'https://www.instagram.com/rhesadavinanto/'
	},
	{
		name: 'Rhesa Davinanto',
		icon: <FiLinkedin />,
		link: 'https://www.linkedin.com/in/rhesa-davinanto/'
	},
	{
		name: 'RhesaDav',
		icon: <FiGithub />,
		link: 'https://github.com/RhesaDav'
	},
	{
		name: 'Rhesa Web',
		icon: <FiGlobe />,
		link: '/',
	},
];

function AppFooter() {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link, index) => (
							<a
								href={link.link}
								target="__blank"
								key={index}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
}

export default AppFooter;