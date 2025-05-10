const person = {
  firstName: "Sai Preethi",
  lastName: "Pantangi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/preethipantangi.JPG",
  email: "pantangisaipreethi@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Telugu", "Hindi", "Marathi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/preethipantangi",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/preethipantangi/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/preethipantangi.JPG",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designing performant frontends, powering them with solid backends.</>,
  featured: {
    display: true,
    title: <>Recent company: <strong className="ml-4">22nd Century Technologies</strong></>,
    href: ''
  },
  subline: (
    <>
      I'm Preethi, a full-stack engineer architecting scalable backend systems and optimize user-facing experiences.
      <br /> After hours, I prototype interfaces, build tools, and explore open-source contributions.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/pantangisaipreethi",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Sai Preethi is a US-based full-stack engineer with a passion for transforming complex technical challenges into performant, 
        user-friendly solutions. Her work spans scalable backend architectures, responsive frontends, and the intersection of 
        intuitive design and robust engineering. Whether building internal tools or leading migration efforts, she brings precision, 
        clarity, and care to every layer of the stack.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "22nd Century Technologies",
        timeframe: "June 2024 - Present",
        role: "Programmer Analyst",
        achievements: [
          <>
            Led the migration of a monolithic JSP-based crash reporting system to a React JS and Spring Boot microservices architecture, 
            reducing page load time by 40%. Rearchitected the frontend with component-based approach, lazy loading, and API-level 
            caching, resulting in highly responsive UI, significantly enhancing user experience and operational efficiency. 
          </>,
          <>
            Designed the database schema, integrated backend services with external systems such as Purvis and Flock via REST APIs 
            and implemented real-time schedulers using Java single-threaded and Lambda, reducing data sync latency by 60%. 
            Documented query logic, database schema updates, and data flow diagrams in Confluence to support cross-team. 
          </>,
          <>
            Authored and optimized complex SQL queries, stored procedures, in Informix and Oracle, improving XML report generation 
            speeds by 25% and supporting normalized data flow, maintaining referential integrity, and improving query performance. 
          </>,
          <>
            Programmed a Java-based Data Import/Export and Table Upgrade Automation Tool using Spring Boot, React JS, and 
            Informix, enabling XML generation with preserved key relationships and automated schema migrations across versions, 
            reducing manual migration efforts by 40 hours per release and cut schema upgrade time from 3 days to under 4 hours. 
          </>,
          <>
            Managed and mentored an offshore development team of 5+ engineers, conducted 30+ code reviews per release cycle, 
            delegated tasks using Agile methodologies, and maintained 95% on-time delivery across 2 high-impact state agency 
            projects, improving development efficiency by 20%.
          </>
        ],
        images: [],
      },
      {
        company: "Dassault Systèmes",
        timeframe: "August 2021 - December 2022",
        role: "Software Engineer Specialist",
        achievements: [
          <>
             Architected the Schedule Tab feature, by collaborating with cross-functional teams and leveraging asynchronous 
            programming in JavaScript, and processing of REST API requests using Spring Boot and GraphQL reducing latency to ~4 RPS. 
          </>,
          <>
            Utilized Redux for state management and optimized UI performance by integrating server-side pagination and reusable 
            functional components, resulting in a 56% better page load time and smoother experience in PLM modules. 
          </>,
          <>
            Adopted Test Driven Development(TDD) with Jest, using mocking and stubbing techniques for comprehensive test coverage 
            in an incremental development process, leading to 95% code coverage and significantly reducing post-release bugs.
          </>,
          <>
            Engineered a reusable, modular roadmap component for PLM applications using JavaScript and RESTful APIs, enabling 
            seamless integration across multiple platforms and reducing feature rollout time by 30%, while improving code reusability 
            and maintainability.
          </>, 
          <>
            Utilized SVN version control and CI/CD pipelines to ensure consistent source code integration with Agile setup, improving 
            code quality through code reviews for junior developers, resulting in reduction of critical bugs by 15%.
          </>,
        ],
        images: [],
      },
      {
        company: "Xoriant Solutions Pvt Ltd",
        timeframe: "July 2019 - August 2021",
        role: "Software Engineer",
        achievements: [
          <>
            Devised and developed RESTful microservices using Spring Boot and JAX-RS, adhering to microservices architecture best 
            practices and supporting scalable backend services across multiple modules and deployed in docker containers. 
          </>,
          <>
            Adopted Spring Cloud Config Server for centralized configuration management and integrated Splunk for real-time, 
            centralized logging and monitoring, enhancing observability across services.
          </>,
          <>
            Built responsive frontend modules using Angular and Spring Boot, leveraging NPM, Gulp, and Flux for modular view 
            rendering and efficient routing, improving load performance and developer productivity.
          </>,
          <>
            Engineered a medicine recommendation platform with Angular and web scraping techniques, enriching content with 
            1,000+ medicine images, extending the UI to React Native, enabling seamless cross-platform access on iOS and Android. 
          </>,
          <>
            Refactored 100,000+ lines of legacy Java code for Disney’s Android gaming app, applying code modularization, memory 
            management improvements, and lazy loading techniques to boost app performance, enabling multilingual support, and 
            significantly increase user engagement and retention. 
          </>,
          <>
            Resolved high-priority production issues through detailed root cause analysis and built a Java-based Scheduled Task 
            Monitor using Windows Task Scheduler, resulting in a 30% improvement in system reliability and uptime. 
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "George Mason Uniersity",
        description: <>Master's in Computer Science, January 2023 - May 2024</>,
      },
      {
        name: "BVRIT Hyderabad College of Engineering for Women",
        description: <>Bachelor's in Information Technology, August 2015 - May 2019</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "HTML",
        description: <></>,
        percentage: 70,
        images: [],
      },
      {
        title: "CSS",
        percentage: 70,
        images: [],
      },
      {
        title: "JavaScript",
        percentage: 90,
        images: [],
      },
      {
        title: "TypeScript",
        percentage: 90,
        images: [],
      },
      {
        title: "Java",
        percentage: 70,
        images: [],
      },
      {
        title: "Python",
        percentage: 70,
        images: [],
      },
      {
        title: "Node JS",
        percentage: 70,
        images: [],
      },
      {
        title: "React JS",
        percentage: 85,
        images: [],
      },
      {
        title: "Next JS/ Vue JS",
        percentage: 70,
        images: [],
      },
      {
        title: "Angular",
        percentage: 85,
        images: [],
      },
      {
        title: "Spring Boot",
        percentage: 70,
        images: [],
      },
      {
        title: "GraphQL",
        percentage: 80,
        images: [],
      },
      {
        title: "AWS",
        percentage: 80,
        images: [],
      },
      {
        title: "SQL",
        percentage: 80,
        images: [],
      },
      {
        title: "Git",
        percentage: 80,
        images: [],
      }
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    certifications: [
      {
        name: "AWS Certified Cloud Practitioner",
        description: "September 2024 - September 2027",
        href: "https://www.credly.com/badges/8d34f080-792e-408c-ad44-2663f54efa45"
      }
    ]
  }
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const contact = {
  path: "/contact",
  label: "Contact Me",
  title: ``,
  description: ``,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [],
};

export { person, social, newsletter, home, about, work, contact };
