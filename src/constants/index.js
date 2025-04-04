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
  //   title: "POS Software",
  //   company_name: "Petpuja khaja",
  //   icon: digitech,
  //   iconBg: "#383E56",
  //   date: "Nov 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     // "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Digital Marketing Officer",
  //   company_name: "Softed",
  //   icon: softed,
  //   iconBg: "#E6DEDD",
  //   date: "April 2022 - Present",
  //   points: [
  //     "Crafting visually stunning designs and executing strategic marketing campaigns.",
  //     "Developing engaging social media content to elevate brand presence.",
  //     "Collaborating with cross-functional teams to integrate graphics and marketing strategies into web applications and products.",
  //     "Implementing responsive design principles for seamless user experience across devices.",
  //   ],
  // },
  // {
  //   title: "Tech Manager",
  //   company_name: "Farakdhar",
  //   icon: farakdhar,
  //   iconBg: "#383E56",
  //   date: "March 2023 - Present",
  //   points: [
  //     "Overseeing all technical aspects within the media company, ensuring smooth operations and high-quality output.",
  //     "Implementing and maintaining IT infrastructure, including networks, and security systems, to support the company's digital operations.",
  //     "Collaborating with content creators, editors to integrate technology solutions that enhance productivity and creativity.",
  //     "Staying updated on industry trends and emerging technologies to continuously improve and innovate technical processes and workflows.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: farakdhar,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "POS Software Development",
    company_name: "Chautaro Tech Group",
    icon: digitech,  // Replace with an actual icon path
    iconBg: "#383E56",
    date: "Nov 2023 - Present",
    points: [
      "Developed and deployed custom Point-of-Sale (POS) systems for restaurants, supermarkets, and retail businesses.",
      "Integrated secure payment gateways, barcode scanning, and automated billing features.",
      "Implemented cloud-based inventory tracking and sales analytics for business owners.",
      "Optimized POS software for multiple platforms, including web and Android devices.",
    ],
  },
  {
    title: "Custom Web Application Development",
    company_name: "Chautaro Tech Group",
    icon: softed,  // Replace with an actual icon path
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "Designed and developed scalable web applications for various industries, including healthcare, e-commerce, and education.",
      "Built dynamic dashboards with real-time data visualization using React.js, Next.js, and Node.js.",
      "Integrated third-party APIs, including payment systems, CRM, and cloud storage solutions.",
      "Ensured security, performance optimization, and cross-browser compatibility for seamless user experience.",
    ],
  },
  {
    title: "Android Application Development",
    company_name: "Chautaro Tech Group",
    icon: farakdhar,  // Replace with an actual icon path
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developed Android applications for logistics, hospitality, and on-demand services.",
      "Built custom mobile solutions with intuitive UI/UX, supporting both Android and cross-platform frameworks.",
      "Implemented Firebase for real-time notifications, authentication, and cloud database integration.",
      "Optimized apps for high performance and scalability, ensuring smooth user experiences.",
    ],
  },
  {
    title: "Enterprise Software Solutions",
    company_name: "Chautaro Tech Group",
    icon: softed,  // Replace with an actual icon path
    iconBg: "#222831",
    date: "Jan 2024 - Present",
    points: [
      "Developed ERP and business management systems for SMEs and large enterprises.",
      "Created customized CRM solutions to streamline customer interactions and sales pipelines.",
      "Implemented automated workflow systems for HR, finance, and operations management.",
      "Provided cloud-based and on-premise deployment options with high-security standards.",
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
    description: "Developed a Point-of-Sale (POS) system for retail businesses, with inventory management and sales analytics.",
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
