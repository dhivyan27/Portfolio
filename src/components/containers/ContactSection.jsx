import { motion } from "framer-motion";
import { RiMailLine, RiLinkedinLine, RiDiscordLine, RiGithubLine } from "react-icons/ri"; // Added RiGithubLine for GitHub icon
import { childrenAnimation } from "../../lib/motion";

const ContactSection = () => {
  // Your actual contact details
  const email = "dhivyan2702@gmail.com";
  const linkedInURL = "https://www.linkedin.com/in/dhivyan-sureshkumar-0192a7273/";
  const discordUsername = "dhiv92";
  const githubURL = "https://github.com/dhivyan27?tab=repositories";

  return (
    <div className="contact-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        variants={childrenAnimation}
      >
        <h4>Contact Information</h4>
        <p>If you have any questions about my experiences or my personal projects, feel free to reach out. You can contact me via Email, LinkedIn, Discord, or check out my GitHub for more of my work and projects.</p>
        
        <div className="contact-methods grid grid-cols-1 md:grid-cols-4 gap-4 text-center"> {/* Adjusted for 4 items */}
          
          {/* Email Contact */}
          <div className="contact-method">
            <RiMailLine className="contact-icon" />
            <h5>Contact on Email</h5>
            <p><a href={`mailto:${email}`}>{email}</a></p>
          </div>

          {/* LinkedIn Contact */}
          <div className="contact-method">
            <RiLinkedinLine className="contact-icon" />
            <h5>Contact on LinkedIn</h5>
            <p><a href={linkedInURL} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
          </div>

          {/* Discord Contact */}
          <div className="contact-method">
            <RiDiscordLine className="contact-icon" />
            <h5>Contact on Discord</h5>
            <p>{discordUsername}</p>
          </div>

          {/* GitHub Contact */}
          <div className="contact-method">
            <RiGithubLine className="contact-icon" /> {/* GitHub icon */}
            <h5>Check out my GitHub</h5>
            <p><a href={githubURL} target="_blank" rel="noopener noreferrer">GitHub Repositories</a></p>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
