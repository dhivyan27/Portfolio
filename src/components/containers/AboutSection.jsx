import { motion } from 'framer-motion';
import { childrenAnimation } from '../../lib/motion';
import { useQuery } from 'react-query';
import { getInformation } from '../../fetchers';

const AboutSection = () => {
  const { data } = useQuery('information', getInformation);

  if (!data) return null;

  return (
    <div className="flex justify-center items-center h-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        variants={childrenAnimation}
        className="about-content max-w-3xl text-center"
      >
        <h3 className="text-3xl lg:text-4xl font-bold">
          Hi, I am <span className="text-primary">{data.fullName}</span>
        </h3>
        <p className="mt-4 text-md lg:text-md">
        I’m a Data Scientist at Canva, where I focus on turning data into impactful solutions. Previously, I interned at Deloitte and WSP Digital, honing my skills in analytics and software engineering. I hold a Bachelor’s in Commerce and Computer Science from Monash University, with majors in Business Analytics and Advanced Computer Science. 
        Outside of work, I enjoy competitive programming and contributing to the tech community. Feel free to connect or explore my projects on GitHub!
</p>

        <a href="/Dhivyan_Sureshkumar.pdf" className="btn mt-3">
          <span>Download Resume</span>
        </a>
      </motion.div>
    </div>
  );
};

export default AboutSection;
