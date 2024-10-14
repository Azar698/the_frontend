import { i, li } from "framer-motion/client";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    threejs,
    sql, 
    python,
    NxtWave,
    google,
    react,
    chatpulse,
    fitFox,
    imageHunt
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {name : "SQL",
      icon : sql,
    },
    {name : "Python",
      icon : python,
    }
  ];
  
  const experiences = [
    {
      "title": "Google Certification",
      "company_name": "Google",
      "icon": google,
      "iconBg": "#383E56",
      "date": "Mar 2023",
      "points": [
        "Attended a 7-day Google bootcamp focused on web development.",
        "Developed a Netflix clone landing page using React.js and related technologies.",
        "Collaborated with other participants and mentors to improve design and functionality.",
        "Gained hands-on experience in responsive design and cross-browser compatibility.",
        "Enhanced skills in implementing clean, maintainable code and modern web standards."
      ]
    },    
    {
      title: "Certification of Programming with Python",
      company_name: "NxtWave",
      icon: NxtWave,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Feb 2024",
      points: [
        "Completed all topics and assignments as part of the NxtWave certification program.",
        "Gained Python certification, showcasing proficiency in Python programming and related technologies.",
        "Worked on hands-on assignments and projects to reinforce learning.",
        "Collaborated with mentors and peers to refine problem-solving skills.",
        "Gained expertise in applying Python to solve real-world problems efficiently."
      ],
    },
    {
      title: "SQL Certification",
      company_name: "NxtWave",
      icon: NxtWave,
      iconBg: "#fff",
      date: "Mar 2024 - Apr 2024",
      points: [
       "Completed all SQL-related topics and assignments as part of the NxtWave certification program.",
       "Developed and maintained databases using SQL and other relational database technologies.",
    "Implemented efficient SQL queries for data retrieval and manipulation.",
      ],
    },
    {
      title: "React Certification",
      company_name: "NxtWave",
      icon: react,
      iconBg: "#E6DEDD",
      date: "June 2024 - Sept 2024",
      points: [
        "Developed and maintained web applications using React.js and related technologies.",
        "Learned React concepts, including state management and lifecycle methods, as well as advanced topics like hooks and context API.",
    "Built multiple websites using React.js, incorporating interactive 3D elements with Three.js.",
    "Participated in code reviews, offering constructive feedback and adopting best practices to improve code quality."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "ChatPulse has transformed our customer support with its natural AI conversations and smooth experience. Great job to the team!",
      name: "Rohit",
      designation: "Product Manager",
      company: "TechSolutions",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Image Hunt is intuitive and fast, providing spot-on AI suggestions with a clean UI. It's a pleasure to use!",
      name: "Priya Menon",
      designation: "Graphic Designer",
      company: "CreativeEdge",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Fit Fox Studio is visually stunning with smooth animations, making it easy to explore fitness programs. One of the best web apps I’ve used!",
      name: "Anjali Verma",
      designation: "Fitness Trainer",
      company: "FitnessHub",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Chat Pulse",
      description:
        "ChatPulse is an AI-powered web application, built using React.js, designed to provide conversational intelligence similar to Gemini AI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: chatpulse,
      source_code_link: "https://github.com/Azar698/chatPulsegpt",
      live_link: "https://chat-pulsegpt-c8iy5xpkz-azar698s-projects.vercel.app/"
    },

    {
      "name": "Image Hunt",
      "description":
        "AI-based web application that allows users to search for images using keywords. The app provides intelligent image suggestions by leveraging AI.",
      "tags": [
        {
          "name": "html",
          "color": "blue-text-gradient"
        },
        {
          "name": "css",
          "color": "green-text-gradient"
        },
        {
          "name": "javascript",
          "color": "pink-text-gradient"
        }
      ],
      "image": imageHunt,
      "source_code_link": "https://github.com/Azar698/image-hunt",
      "live_link": "https://image-hunt-beryl.vercel.app/"
    },

    {
      "name": "Fit Fox Studio",
      "description":
        "A dynamic web application designed for a fitness studio, built using HTML, CSS, and JavaScript. The app features smooth animations and interactive elements to users",
      "tags": [
        {
          "name": "html",
          "color": "blue-text-gradient"
        },
        {
          "name": "css",
          "color": "green-text-gradient"
        },
        {
          "name": "javascript",
          "color": "pink-text-gradient"
        },
        {
          "name": "animations",
          "color": "yellow-text-gradient"
        }
      ],
      "image": fitFox,
      "source_code_link": "https://github.com/Azar698/fitfox-studio-web",
      
    }    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
