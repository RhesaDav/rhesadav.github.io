import Link from 'next/link';
import { FiPhone, FiMapPin, FiMail, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

type ContactTypes = {
	name: string;
	icon: React.ReactElement;
	link?: string;
}
const contacts:ContactTypes[] = [
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
];

function ContactDetails() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul>
					{contacts.map((contact, index) => (
						<li className="flex " key={index}>
							<i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
								{contact.icon}
							</i>
							<span className={`text-lg mb-4 text-ternary-dark dark:text-ternary-light ${!contact.link ? '' : 'hover:underline'}`}>
								<Link target='_blank' href={contact.link || ''}>
								{contact.name}
								</Link>
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ContactDetails;