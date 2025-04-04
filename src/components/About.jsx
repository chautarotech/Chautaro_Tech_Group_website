import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-auto h-auto p-3">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText} pb-2`}>Overview.</h2>
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-6xl leading-[30px]"
      >
        Chautaro Tech Group is an emerging software development startup focused
        on web and mobile applications, enterprise solutions, and digital
        transformation services. The company aims to bridge the technological
        gap for businesses and individuals by providing innovative and scalable
        digital solutions. With expertise in website development, web
        applications, and mobile apps, Chautaro Tech Group delivers
        user-friendly and customized software tailored to client needs. The
        startup emphasizes agile development methodologies, ensuring flexibility
        and efficiency in its projects. By leveraging the latest technologies,
        it strives to create high-performance applications that enhance business
        operations. Committed to quality and customer satisfaction, the company
        prioritizes reliability, security, and seamless user experiences. As it
        grows, Chautaro Tech Group aims to expand its service portfolio and
        strengthen its position in the software development industry.
      </motion.p>

      <motion.div variants={textVariant()}>
        <h2 
        className="text-white text-6xl font-extrabold max-w-6xl  mt-10 pt-10">
          Services.
        </h2>
      </motion.div>

      

      <div className="mt-10 lg:grid grid-cols-2 justify-center items-center gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
