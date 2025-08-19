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
            Driving the migration of NJ Crash from JSP/JSF to Angular + Spring Boot; owning requirements gathering, data mapping, design documentation, and delivering end-to-end development of UI modules, APIs, and database integrations.
          </>,
          <>
            Modernized MA crash reporting platform by migrating from JSP monolith into a React + Spring Boot microservices architecture, introduced API-level caching, lazy loading. Achieved 40% lower page load times, with adoption by 6 agencies.
          </>,
          <>
            Architected and deployed Purvis CAD integration using REST APIs, SOAP, and asynchronous schedulers, to transmit data to auto-open fire station gates within 5 seconds of incident creation; achieved 99.9% uptime across 5+ fire stations, coordinated live testing with Somerville Fire Department, and mentored and conducted code review of offshore team of 5 
          </>,
          <>
            Built a Spring Boot + React automation framework for data import/export and schema upgrades tool, reducing manual migration effort by 40 hours per release and cutting DB upgrade time from 4 hours to less than 20 minutes.
          </>,
          <>
            Engineered a real-time Flock API integration to transmit incident data directly to police units across 25+ agencies; reduced manual radio communication by 60%, enabling faster on-ground response and improved coordination during emergencies. 
          </>,
          <>
            Optimized SQL queries and stored procedures (Informix & Oracle), boosting XML report generation throughput by 25% and ensuring consistent normalized data flow, maintaining referential integrity, and across distributed systems.
          </>,
          <>
            Implemented CI/CD pipelines with Jenkins and Docker to automate builds, testing, and deployments of React , Spring Boot services, reducing deployment times and enabling zero-downtime releases across staging and production environments.
          </>
        ],
        images: [],
      },
      {
        company: "George Mason University",
        timeframe: "May 2023 - May 2024",
        role: "Software Engineer Specialist",
        achievements: [
          <>
            Built an AI-powered PDF Q&A tool using ReactJS, Python, FastAPI, and OpenAI API, enabling file uploads and document-based Q&A; integrated with U.S. Web Design System for accessibility compliance. 

          </>,
          <>
            Enhanced compositional generalization in semantic parsing by reproducing and optimizing the TPOL framework with BERT, MBART, and RoBERTa, improving multilingual performance on GEO-Aligned datasets and contributing to open source.
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
            Engineered a Schedule Tab feature for PLM applications, improving response times by 80% via GraphQL batch requests, async programming, and server-side pagination; designed an Adapter-pattern-based integration layer to bridge the Portfolio and Project Plan applications, ensuring smooth and scalable data flow. 
          </>,
          <>
            Designed and developed a modular Roadmap component for project planning, later adopted as a shared standard across the org; accelerated the feature rollout by 30%, and reduced cross-team integration effort by 40 hours.
          </>,
          <>
            Improved UI performance and scalability by implementing Redux state management and reusable functional components, delivering a 56% improvement in load times.

          </>,
          <>
            Advocated for Test-Driven Development with Jest, achieving 95% code coverage and reducing post-release defects by 15%, supported CI/CD pipelines and peer code reviews, ensuring maintainability, and reduction of critical bugs.
          </>
        ],
        images: [],
      },
      {
        company: "Xoriant Solutions Pvt Ltd",
        timeframe: "July 2019 - August 2021",
        role: "Software Engineer",
        achievements: [
          <>
            Led the refactor of 100K+ lines of legacy Java code to migrate Disney’s Android apps to the latest OS version, enabling multilingual support, optimizing memory usage, and boosting engagement across millions of daily users.
          </>,
          <>
            Developed a medicine recommendation platform for Bayer using Angular, Java, and Python—scraped 1,000+ medicine images using Beautiful Soup and later extended it to React Native for seamless iOS/Android access.
          </>,
          <>
            Built responsive frontend modules with Angular and Spring Boot, applying modular view rendering and optimized routing strategies; achieved 25% faster load times and significantly improved developer productivity through streamlined builds (NPM, Gulp).
          </>,
          <>
            Improved system reliability by 30% with a Java-based Scheduled Task Monitor and AWS CloudWatch integration for real-time logging/alerts.
          </>,
          <>
            Designed and deployed RESTful microservices with Spring Boot and JAX-RS, containerized with Docker, and centralized config with Spring Cloud Config Server and Splunk, ensuring scalable deployments across environments.
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
