import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../style"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) =>{
    const {name,value} = e.target;

    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_lxn6p',
    'template_i1pfp',
      {
        from_name: form.name,
        to_name: 'Afroz',
        from_email: form.email,
        to_email: 'afrozshah78692@gmail.com',
        message: form.message,
      },
      'cjMTCM3HgG04c05Pw'
    )
    .then(()=>{
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({
        name:'',
        email:'',
        message:'',
      })
    }, (error)=>{
      setLoading(false)
      console.log(error);
      alert("Something went wrong")
    })
  }
  return (
    <div className="xl:mt-2 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    <motion.div
    variants={slideIn('left',"tween",0.2,1)}
    className="flex-[0.75] bg-black-100 p-6 rounded-2xl">
      <p className={styles.sectionSubText}>
      Get in touch
      </p>
      <h3 className={styles.heroHeadText}>
      Contact
      </h3>

      <form 
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-white font-normal mb-3">
          Your Name
          </span>
          <input type="text" 
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-normal"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-normal mb-3">
          Your Email
          </span>
          <input type="email" 
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-normal"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-normal mb-3">
          Your Message
          </span>
          <textarea rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter the Message"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-normal"
          />
        </label>
        <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
        {loading ? 'Sending...':'Send'}
        </button>
      </form>
    </motion.div>
    <motion.div
    variants={slideIn('right',"tween",0.2,1)}
    className="xl:flex-1 xl:h-auto md:h-[450px] h-[250px]">
      <EarthCanvas/>
    </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");