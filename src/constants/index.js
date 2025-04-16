import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  farakdhar,
  softed,
  digitech,
  whatsapp_lite,
  web_enum,
  web_vuln,
  websiteimage,
  posimage,
  chatApp,
  musicplayerimage,
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
    title: "UI/UX Design",
    icon: creator,
  },
  {
    title: "Website Development",
    icon: web,
  },
  {
    title: "Web Application Development",
    icon: mobile,
  },
  {
    title: "Mobile App Development",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [


  // {
  //   title: "Custom Web Application Development",
  //   company_name: "Chautaro Tech Group",
  //   icon: digitech, // Replace with an actual icon path
  //   iconBg: "#E6DEDD",
  //   // date: "April 2022 - Present",
  //   points: [
  //     "Designed and developed scalable web applications for various industries, including healthcare, e-commerce, and education.",
  //     "Built dynamic dashboards with real-time data visualization using React.js, Next.js, and Node.js.",
  //     "Integrated third-party APIs, including payment systems, CRM, and cloud storage solutions.",
  //     "Ensured security, performance optimization, and cross-browser compatibility for seamless user experience.",
  //   ],
  // },
  // {
  //   title: "Android Application Development",
  //   company_name: "Chautaro Tech Group",
  //   icon: softed, // Replace with an actual icon path
  //   iconBg: "#383E56",
  //   // date: "March 2023 - Present",
  //   points: [
  //     "Developed Android applications for logistics, hospitality, and on-demand services.",
  //     "Built custom mobile solutions with intuitive UI/UX, supporting both Android and cross-platform frameworks.",
  //     "Implemented Firebase for real-time notifications, authentication, and cloud database integration.",
  //     "Optimized apps for high performance and scalability, ensuring smooth user experiences.",
  //   ],
  // },

  {
    title: "Custom Web Application Development",
    company_name: "Chautaro Tech Group",
    icon: digitech, // Replace with an actual icon path
    iconBg: "#E6DEDD",
    // date: "April 2022 - Present",
    points: [
      "We design and develop scalable web applications for various industries, including healthcare, e-commerce, and education.",
      "We build dynamic dashboards featuring real-time data visualization using React.js, Next.js, and Node.js.",
      "We integrate third-party APIs, such as payment systems, CRM platforms, and cloud storage solutions.",
      "We focus on security, optimize performance, and ensure cross-browser compatibility for seamless user experiences.",
    ],
},
{
    title: "Android Application Development",
    company_name: "Chautaro Tech Group",
    icon: softed, // Replace with an actual icon path
    iconBg: "#383E56",
    // date: "March 2023 - Present",
    points: [
      "We develop Android applications for logistics, hospitality, and on-demand services.",
      "We create custom mobile solutions with intuitive UI/UX, leveraging both Android and cross-platform frameworks.",
      "We implement Firebase to provide real-time notifications, authentication, and cloud database integration.",
      "We continuously optimize our apps for high performance and scalability, ensuring smooth user experiences.",
    ],
},

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Restaurants website",
    description:
      "Web application for restaurant management, including online ordering and table reservation features.",
    image: websiteimage,
  },
  {
    name: "POS System",
    description:
      "Developed a Point-of-Sale (POS) system for retail businesses, with inventory management and sales analytics.",
    image: posimage,
  },
  {
    name: "Guff Chat App",
    description:
      "Developed a social media platform, Guff Gaff, for sharing stories, photos, and videos with friends and family.",
    image: chatApp,
  },
  {
    name: "SyncMe Music Player",
    description:
      "Music streaming app that allows users to play, sync, and share music seamlessly with others in real time",
    image: musicplayerimage,
  },
];

export { services, technologies, experiences, testimonials, projects };
