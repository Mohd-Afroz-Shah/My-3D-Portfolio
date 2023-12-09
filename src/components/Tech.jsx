import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion'

import { styles } from "../style";
import { textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()} className="mb-[40px]">
    <p className={styles.sectionSubText}>
        Things I know</p>
        <h2 className={styles.sectionHeadText}>
          Technologies</h2>
    </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "");