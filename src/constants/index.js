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
  fashfoosh,
  threejs,
  tifr,
  tcs, 
  mastercard, 
  rit,
  slack, 
  user, 
  tailwindproj
} from "../assets";

export const navLinks = [{
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

const services = [{
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [{
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
  {
    title: "Software Engineer Intern",
    company_name: "Open@RIT",
    icon: rit,
    iconBg: "#fff",
    date: "May 2023 - Aug 2023",
    points: [
      "Developed a Python web scraper utilizing BeautifulSoup and Selenium to extract open-source dependencies and third-party licenses from various companies, automating the process and ensuring accurate and up-to-date information.",
      "Designed and implemented a Postgres database structure to store the scraped dependencies, enabling seamless management of large datasets and streamlined data retrieval processes.",
      "Created RESTful APIs using Flask framework to provide seamless access to the stored dependencies, allowing easy integration with other applications and systems.",
      "Containerized the entire application using Docker, ensuring consistent and reliable deployment across different environments, improving scalability and simplifying the deployment process."
    ],
  },
  {
    title: "Software Engineer - II",
    company_name: "Mastercard",
    icon: mastercard,
    iconBg: "#fff",
    date: "August 2021 - July 2022",
    points: [
      "Pioneered a ReactJS app along with Redux that decreased development overhead by 50% in 2 months and implemented secure RESTful APIs using Node.js and Express to automate the process of making postman call to collect financial institutions data.",
      "Engineered and monitored javascript scripts to scrape data from financial institutions such as Royal Bank of Canada, Bank of America, and Chase and provided it to the end-users.",
      "Evaluated and interpreted data from 500+ JS scripts to enable financial institutions to identify key factors and make informed business decisions.",
      "Maintained code coverage of more than 80% with Front-end testing tools such as Karma and Jasmine.",
      "Improved data reliability by leveraging Splunk and Tableau to analyze logs and errors, facilitating prompt issue resolution and preventing data discrepancies."
    ],
  },
  {
    title: "Systems Engineer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#000",
    date: "July 2018 - August 2021",
    points: [
      "Collaboratively worked with a team of 2 in designing a comprehensive dynamic ad insertion platform using Angular and Node.js that amped the company’s revenue by 10% and surged user engagement by 20%",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Experience working with CI/CD tools such as Jenkins and GitLab CI for automating build, test, and deployment processes.",
      "Leveraged AWS services such as Amazon S3 and Amazon CloudFront to optimize content delivery and enhance user experience for the OTT platforms.",
      "Revamped online streaming and OTT platforms such as the TCS video channel and Sony Liv using the latest tech stacks (ReactJS, Redux) and saved the company $20K+",
      "Analyzed and improved pre-built OTT platform by implementing caching and optimizing static images thereby improving load times by 40% using profiling tools",
      "Mentored 15 freshers on the team in expanding Javascript, ReactJS, and Redux skillsets",
    ],
  },
  {
    title: "Web Developer - Intern",
    company_name: "Tata Institute of Fundamental Research",
    icon: tifr,
    iconBg: "#fff",
    date: "July 2017 - May 2018",
    points: [
      "Implemented an end-to-end solution using HTML, CSS, PHP, MySQL, Javascript  to automate student registration and application approval for 1000+ students, using a three-tier hierarchy of admins, professors, and Head of Department, resulting in a 65% reduction in manual paperwork.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Created an analytics module to determine course metrics(popularity, satisfaction,  difficulty) and new course suggestions"
    ],
  },
 
 
];

const testimonials = [{
    testimonial: "Saquib's exceptional full-stack development skills were instrumental in our project's success at TCS. His ability to seamlessly transition between front-end and back-end tasks allowed us to deliver high-quality solutions efficiently. Saquib's expertise in React, Node.js, and database technologies enabled him to design and implement robust applications that met our clients' needs. His dedication to code quality, problem-solving capabilities, and collaborative nature made him a valuable asset to our team.",
    name: "Bhagwan Pawar",
    designation: "Senior Software Engineer",
    company: "Tata Consultancy Services",
    image: user,
  },
  {
    testimonial: "Saquib's commitment to delivering high-quality results is commendable. He pays meticulous attention to detail, ensuring that his work is thorough and reliable. His dedication to maintaining high standards and his proactive problem-solving approach make him an asset to any project. Aside from his technical expertise, Saquib is a true team player and a pleasure to work with. He consistently demonstrates excellent collaboration skills, always willing to offer support and share his expertise with team members. Saquib's positive attitude and strong communication skills create a positive work environment and foster effective teamwork.",
    name: "Rajratna",
    designation: "Team Lead",
    company: "Mastercard",
    image: user,
  },
  {
    testimonial: "After Saquib optimized our website, our website performance increased by 20%. We can't thank him enough!",
    name: "Mazen",
    designation: "CEO",
    company: "Fashfoosh",
    image: user,
  },
];

const projects = [{
    name: "Fashfoosh",
    description: "Web-based platform that allows fish sellers to register for android platform and manage their assets on the GUI.",
    tags: [{
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: fashfoosh,
    project_link:"https://fashfoosh.com/",
    source_code_link: "https://github.com/",
  },
  {
    name: "Devchat",
    description: "Devchat is a messaging app(Slack Clone) for business that connects people to the information they need. By bringing people together to work as one unified team, Devchat transforms the way organizations communicate.",
    tags: [{
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: slack,
    project_link:"https://react-slack-clone-69745.web.app",
    source_code_link: "https://github.com/ksaquib/react-slack-clone",
  },
  {
    name: "Tailwind Demo",
    description: "A demo developed while learning tailwind css",
    tags: [{
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tailwindproj,
    project_link:"tailwind-project.surge.sh/",
    source_code_link: "https://github.com/ksaquib/tailwind-css-proj1",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects
};