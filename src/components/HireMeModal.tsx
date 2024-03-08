import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';
import { useState } from 'react';
import { CategoryTypes } from '@/helpers/types/project';
import emailjs from '@emailjs/browser';

const selectOptions = [
  'Web Application',
  'Mobile Application',
  'UI/UX Design',
  'Branding',
];

type Props = {
  onClose: () => void;
  onRequest: () => void;
};

type FormTypes = {
  name: string;
  email: string;
  type: CategoryTypes;
  desc: string;
};

function HireMeModal({ onClose, onRequest }: Props) {
  const [formData, setFormData] = useState<FormTypes>({
    name: '',
    email: '',
    type: 'Web Application',
    desc: '',
  });
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        {
          email: formData.email,
          message: formData.desc,
          name: formData.name,
          subject: `New Project: ${formData.type}`,
        },
        {
          publicKey: (process.env.NEXT_PUBLIC_PUBLIC_KEY as string) + 'a',
        }
      );
      onClose();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                What project are you looking for?
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <form onSubmit={onSubmit} className="max-w-xl m-4 text-left">
                <div className="">
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    aria-label="Name"
                    value={formData.name}
                    onChange={onChange}
                  />
                </div>
                <div className="mt-6">
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="email"
                    name="email"
                    type="text"
                    required
                    placeholder="Email"
                    aria-label="Email"
                    value={formData.email}
                    onChange={onChange}
                  />
                </div>
                <div className="mt-6">
                  <select
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="type"
                    name="type"
                    required
                    aria-label="Project Category"
                    value={formData.type}
                    onChange={onChange}
                  >
                    {selectOptions.map((option) => (
                      <option className="text-normal sm:text-md" key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <textarea
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="desc"
                    name="desc"
                    cols={14}
                    rows={6}
                    aria-label="Details"
                    placeholder="Project description"
                    value={formData.desc}
                    onChange={onChange}
                  ></textarea>
                </div>

                {error && (
                  <div className="mt-3 bg-red-400 px-5 py-2 rounded-md items-center flex justify-between">
                    <span className="text-primary-dark dark:text-ternary-light">
                      Error
                    </span>
                    <button type="button" onClick={() => setError(false)}>
                      <FiX className="font-bold" />
                    </button>
                  </div>
                )}

                <div className="mt-6 pb-4 sm:pb-1">
                  <Button
                    type="submit"
                    title={loading ? 'Loading ...' : 'Send Request'}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default HireMeModal;
