import { ChangeEvent, ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
}

const FormTextArea = ({
	label,
    error,
    ...props
}:Props) => {
	return (
		<div className="font-general-regular mb-4">
			<label
				className="block text-lg text-primary-dark dark:text-primary-light mb-1"
			>
				{label}
			</label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              {...props}
            />
            {error && <span style={{ color: 'red' }}>{error}</span>}
		</div>
	);
};

export default FormTextArea;