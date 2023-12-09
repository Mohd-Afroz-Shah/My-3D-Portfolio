import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  c,
  cpp,
  mysql,
  python,
  nodejsimg,
  image,
  mern,
  ml,
  carrent,
  ai_certificate,
  python_certificate,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Data Structure & Algorithms",
    icon: backend,
  },
  {
    title: "Designing",
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
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Machine Learning",
    icon: ml,
  },
];

const experiences = [
  {
    title: "COMPARISON AND VISUALIZATION OF SORTING ALGORITHMS ",
    company_name: "Python",
    icon: python,
    iconBg: "#383E56",
    date: "April 2022",
    points: [
      "An Application using Tkinter library of Python.",
      "Algorithm - Quick, Merge, Bubble, Selection, Insertion, Heap Sort were visualized",
      "The UI shows how each algorithm works and also compare their speed."
    ],
  },
  { 
    title: "WEATHER APP",
    company_name: "Nodejs",
    icon: nodejsimg,
    iconBg: "#E6DEDD",
    date: "Dec 2022",
    points: [
      "An WebApp to get the weather using API's of open weather.",
      "For UI Template and Front End, used Engine(HBS), CSS, JS.",
      "For the Backend used moudle i.e. Nodejs, Expressjs",
    ],
  },
  {
    title: "GYM REGISTRATION",
    company_name: "Nodejs, Express, Mongodb",
    icon: image,
    iconBg: "#383E56",
    date: "Jan 2023",
    points: [
      "a Registration webpage for Pump House Gym which include Login, Logout and Registration.",
      "For Creating the UI Template Engine(HBS), CSS, JS were used apart from them for the Back End Nodejs was used along with the Expressjs.",
      "Database include MongoDB connected with Mongoose to interact with the UI and Bcryptjs for securely storing the data.",
    ],
  },
  {
    title: "AI IMAGE GENERATOR",
    company_name: "MERN",
    icon: mern,
    iconBg: "#E6DEDD",
    date: "Feb 2023",
    points: [
      "An image generation tool using Api’s of Open AI.",
      "A MERN Stack Application along with Tailwind CSS.",
      "The application uses Cloudinary (Cloud Storage) for storing the images, and Atlas Mongo DB (Cloud Database) to store the Collections.",
    ],
  },
  {
    title: "PNEUMONIA DETECTION USING CNN",
    company_name: "Deep Learning",
    icon: ml,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - March 2023",
    points: [
      "A Model to predict if a person is affected Pneumonia or not using X-ray Images.",
      "The Model was created using TensorFlow Library & CNN other than that Pandas, NumPy, Skit learn also were used to deal with the dataset and model was able to give accuracy of 91.6%.",
      "At end, Designed and developed a Web Application for it using Flask, Python.",
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
    name: "Aws DeepRacer",
    description:
      "I was among the top 100 in the Aws Deepracer July Qualifier 2022. For which I recieve appriciation certificate from my college and tpo",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "compete",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.linkedin.com/posts/mohd-afroz-shah-a50020230_weve-all-heard-of-aws-amazon-web-services-activity-7040268568633970688-YACk/?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Ai Nano Degree Program",
    description:
      "I got a scholarship of Ai nano degree program with python from AWS on the platform Udacity. Got familiar with basics of Artifical Intelligence",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "Udacity",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: ai_certificate,
    source_code_link: "https://graduation.udacity.com/confirm/5ERKGSAN",
  },
  {
    name: "Python Programming",
    description:
      "It was an awesome course povided by the coursera and google. It covers all the basics of the python along with the uses of the python packages",
    tags: [
      {
        name: "Google",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "coursera",
        color: "pink-text-gradient",
      },
    ],
    image: python_certificate,
    source_code_link: "https://www.coursera.org/account/accomplishments/verify/GB8C8KFQ7AKZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
];

export { services, technologies, experiences, testimonials, projects };