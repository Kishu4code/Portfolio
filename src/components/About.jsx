import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { services } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" >
                <div options={{ max: 45, scale: 1, speed: 450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-center text-white text-[20px] font-bold">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
  return (
      <>
          <motion.div variants={textVariant() }>
              <p className={styles.sectionSubText}>Introduction</p>
              <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>

          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
              Hi I&apos;m a beginner software developer with little experience in TypeScript,
              Bootstrap and JavaScript currently studying in a university and expertise in framework like React js.
              I&apos;m a quick learner and try to create effecient, scalable and user-friendly
              solutions that would help in solving realworld projests.
              Before I used to work freely as a local artist and content creater with the name Kishu.
              At that time my main line of work as well as hobby was creating potrait,
              designing walls, oil painting, teaching students artwork and shirt painting.
              I had over more than 2k people following me on social media in the line of art works.
              I have also worked on creating 3-D models with the help of Blender software.
              Contact me to work together.
          </motion.p>
          <div className="mt-20 flex flex-wrap gap-10">
              {services.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service} />)) }
          </div>
      </>
  )
}

export default SectionWrapper(About,"about")