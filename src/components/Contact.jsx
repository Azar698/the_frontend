import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IoMdSend } from "react-icons/io";
import { BiCommentError } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";

import { styles } from "../styles";
import { getintouchimg } from "../assets";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const BarLoader = () => {
  const bars = [
    { delay: 0, color: "#4c86f9" },
    { delay: 0.1, color: "#49a84c" },
    { delay: 0.2, color: "#f6bb02" },
    { delay: 0.3, color: "#f6bb02" },
    { delay: 0.4, color: "#2196f3" },
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
            ease: "easeInOut",
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

  const isSuccess = message === "Thank you. I will get back to you as soon as possible.";
  const containerClass = isSuccess
    ? "bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-lg border border-white/30 text-white w-[90%] sm:w-[60%] max-w-sm"
    : "bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-lg text-red-100 w-[90%] sm:w-[60%] max-w-sm";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className={containerClass}>
        <p className="text-white text-center mb-4">{message}</p>
        <div className="flex justify-center mb-4">
          {isSuccess ? <MdMarkEmailRead size={50} /> : <BiCommentError size={50} />}
        </div>
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
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let errors = {};

    if (!form.name.trim()) {
      errors.name = "Name is required";
    } else if (form.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Enter a valid email address";
    }

    if (!form.message.trim()) {
      errors.message = "Message is required";
    } else if (form.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        "service_dvn8cfk",
        "template_jlz1il3",
        {
          from_name: form.name,
          to_name: "Azar",
          from_email: form.email,
          to_email: "mohammadazaruddin6302@gmail.com",
          message: form.message,
        },
        "E6VPQdezzwf0JAFve"
      )
      .then(
        () => {
          setLoading(false);
          setPromptMessage("Thank you. I will get back to you as soon as possible.");
          setPromptOpen(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setLoading(false);
          setPromptMessage("Oops! Something went wrong. Please try again.");
          setPromptOpen(true);
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse items-center gap-10 overflow-hidden">
  {/* Contact Form */}
  <motion.div
    variants={slideIn("left", "tween", 0.2, 1)}
    className="flex-[0.5] h-auto bg-black-100 p-8 rounded-2xl"
  >
    <p className={styles.sectionSubText}>Get in touch</p>
    <h3 className={styles.sectionHeadText}>Contact.</h3>

    {/* Form */}
    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
      {/* Name */}
      <label className="flex flex-col">
        <span className="text-white font-medium mb-2">Your Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your good name?"
          className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </label>

      {/* Email */}
      <label className="flex flex-col">
        <span className="text-white font-medium mb-2">Your Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your Email Address?"
          className="bg-tertiary py-4 px-3 text-white rounded-lg outline-none border-none font-medium"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </label>

      {/* Message */}
      <label className="flex flex-col">
        <span className="text-white font-medium mb-2">Your Message</span>
        <textarea
          rows={3}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?"
          className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="bg-tertiary py-3 px-2 w-[100px] flex items-center justify-center rounded-xl text-white font-bold"
      >
        {loading ? <BarLoader /> : <IoMdSend />}
      </button>
    </form>
  </motion.div>

  {/* Image on the right */}
  <motion.div
    variants={slideIn("right", "tween", 0.2, 1)}
    className="md:flex sm:hidden flex-[0.4] flex justify-center items-center"
  >
    <img
      src={getintouchimg}
      alt="get-in-touch"
      className="w-full max-w-[400px] h-auto object-contain"
    />
  </motion.div>

  {/* Dialog */}
  <PromptDialog
    isOpen={promptOpen}
    message={promptMessage}
    onClose={() => setPromptOpen(false)}
  />
</div>
  );
};

export default SectionWrapper(Contact, "contact");
