'use client'
import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

type Props = {
	gitlabRepo?: number;
	githubRepo?: number;
	experience?: number;
	projectCompletedPercent?: number;
	positiveFeedbackPercent?: number;
}

function AboutCounter({experience,githubRepo,gitlabRepo,positiveFeedbackPercent,projectCompletedPercent}:Props) {
	useCountUp({ ref: 'experienceCounter', end: experience || 0, duration: 10 });
	useCountUp({ ref: 'githubStarsCounter', end: 3, duration: 10 });
	useCountUp({ ref: 'githubRepo', end: githubRepo || 0, duration: 10 });
	useCountUp({ ref: 'gitlabRepo', end: gitlabRepo || 0, duration: 10 });
	useCountUp({ ref: 'feedbackCounter', end: positiveFeedbackPercent || 0, duration: 10 });
	useCountUp({ ref: 'projectsCounter', end: projectCompletedPercent || 0, duration: 10 });

	return (
		<div className="mt-5 sm:mt-5 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				{/* <CounterItem
					title="Stars on GitHub"
					counter={<span id="githubStarsCounter" />}
					measurement=""
				/> */}
				<CounterItem
					title="Repository on GitHub"
					counter={<span id="githubRepo" />}
					measurement=""
				/>
				<CounterItem
					title="Repository on Gitlab"
					counter={<span id="gitlabRepo" />}
					measurement=""
				/>

				<CounterItem
					title="Positive feedback"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</div>
	);
}

export default AboutCounter;