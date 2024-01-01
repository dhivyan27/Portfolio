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
  I am a dedicated and passionate individual currently pursuing a Bachelor of Commerce and Computer Science, majoring in Business Analytics and Advanced Computer Science at Monash University.
</p>
<p className="mt-4 text-md lg:text-md">
  Separate from my academic journey, I had the great opportunity to intern at Canva as a Data Scientist, where I explored Canva’s integration with Google Workspace. I also interned at Deloitte as a Data Analyst, offering me invaluable insights into business analytics and data strategies. Further enriching my practical knowledge, I interned at WSP Digital, diving deeper into the digital aspects of engineering and technology.
</p>
<p className="mt-4 text-md lg:text-md">
  My enthusiasm for machine learning and software engineering is not just confined to work. I actively participate in various clubs and extracurricular activities, notably as the Director of IT at Impetus Consulting Group, where I blend leadership with technology. My interest in competitive programming keeps me engaged and continuously learning, ensuring I am always up-to-date with the latest technological advancements.
</p>
<p className="mt-4 text-md lg:text-md">
  Feel free to connect with me if youre interested in discussing my experiences, sharing insights, or exploring collaborations. You can reach me via email, LinkedIn, or connect on Discord. All my contact information is found on the contact page. Also, do check out my GitHub to explore my projects and contributions to the tech community.
</p>

        <a href="/Dhivyan Sureshkumar.pdf" className="btn mt-3">
          <span>Download Resume</span>
        </a>
      </motion.div>
    </div>
  );
};

export default AboutSection;
