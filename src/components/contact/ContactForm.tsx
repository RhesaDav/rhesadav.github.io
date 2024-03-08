import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import React, { useEffect, useState } from 'react';
import FormTextArea from '../reusable/FormTextArea';
import emailjs from '@emailjs/browser';

type FormTypes = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormTypes>({
    email: '',
    message: '',
    name: '',
    subject: '',
  });
  const [isError, setIsError] = useState<string | undefined>(undefined);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, message, name, subject } = formData;

    try {
      const templateParams = {
        email,
        message,
        name,
        subject,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        }
      );
    } catch (error) {
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={onSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>

          <FormInput
            label="Full Name"
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            label="Subject"
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <FormTextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols={14}
              rows={6}
            />
          </div>

          {/* <button type="submit">submit</button> */}
          <div className="mt-6">
            <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
              <Button type="submit" title="Send Message" />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
