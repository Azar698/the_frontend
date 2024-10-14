import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IoMdSend } from "react-icons/io";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const BarLoader = () => {
  const bars = [
    { delay: 0, color: '#4c86f9' },   // First bar
    { delay: 0.1, color: '#49a84c' }, // Second bar
    { delay: 0.2, color: '#f6bb02' }, // Third bar
    { delay: 0.3, color: '#f6bb02' }, // Fourth bar
    { delay: 0.4, color: '#2196f3' }, // Fifth bar
  ];

  return (
    <div className="flex justify-center items-center w-[30px] h-[20px] gap-[6px]">
      {bars.map((bar, index) => (
        <motion.span
          key={index}
          className="w-[4px] h-[18px]"
          style={{ backgroundColor: bar.color }}
          initial={{ scaleY: 0.03 }}
          animate={{ scaleY: [0.03, 1, 0.05] }}
          transition={{
            duration: 0.9,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: bar.delay,
          }}
        />
      ))}
    </div>
  );
};

const PromptDialog = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-tertiary p-6 rounded-lg shadow-lg max-w-sm w-full">
        <p className="text-white text-center mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-primary text-white py-2 px-4 rounded-lg w-full hover:bg-opacity-80 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [promptOpen, setPromptOpen] = useState(false);
  const [promptMessage, setPromptMessage] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_dvn8cfk',
        'template_jlz1il3',
        {
          from_name: form.name,
          to_name: "Azar",
          from_email: form.email,
          to_email: "mohammadazaruddin6302@gmail.com",
          message: form.message,
        },
        'E6VPQdezzwf0JAFve'
      )
      .then(
        () => {
          setLoading(false);
          setPromptMessage("Thank you. I will get back to you as soon as possible.");
          setPromptOpen(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setPromptMessage("Oops! Something went wrong. Please try again.");
          setPromptOpen(true);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? <BarLoader/> : <IoMdSend />}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      <PromptDialog
        isOpen={promptOpen}
        message={promptMessage}
        onClose={() => setPromptOpen(false)}
      />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
