/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Orest's Portfolio",
  description: "Hello WORLD",
  og: {
    title: "Orest's Portfolio",
    type: "website",
    url: "http://orestmartyn.com/",
  },
};

//Home Page
/* Missing resume link - probably later */
/* Add repository and github profile */

const greeting = {
  title: "Orest Martyn",
  logo_name: "Orest Martyn",
  nickname: "Add nickname",
  subTitle: "I build things. I break them. I fix them better.",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "noooanyway",
  resumeLinkPT: "./assets/CV-PT.pdf",
  resumeLinkEN: "assets/CV-EN.pdf",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/noooanyway",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/orest-martyn/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:orestmartyn00@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];
const skills = {
  data: [
    {
      title: "Programming & Algorithms",
      fileName: "ProgrammingImg",
      skills: [
        "⚡ Proficient in Java, Python, C, C++ and C# for efficient and scalable code",
        "⚡ Designed and implemented algorithms using dynamic programming, graph analysis and BFS",
        "⚡ Built a distributed web search engine with Spring Boot, RMI and WebSockets",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "vscode-icons:file-type-cpp",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "vscode-icons:file-type-c",
          style: { backgroundColor: "transparent" },
        },
      ],
    },
    {
      title: "Data Analysis & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experienced in data analysis and visualization with Pandas, NumPy, Matplotlib and Jupyter",
        "⚡ Implemented RNN‑LSTM models for forecasting and time‑series analysis",
        "⚡ Designed end‑to‑end orchestration platforms and optimized resources in Kubernetes using a Raspberry Pi Cluster",
      ],
      softwareSkills: [
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos-pandas",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: { backgroundColor: "transparent" },
        },

        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: { backgroundColor: "transparent" },
        },
      ],
    },
    {
      title: "Web & Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed web applications with Django, React and PHP focusing on performance",
        "⚡ Built responsive UIs using HTML5, CSS3 and JavaScript",
        "⚡ Designed and maintained relational databases with MySQL and PostgreSQL",
      ],
      softwareSkills: [
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { backgroundColor: "transparent", color: "#092E20" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { backgroundColor: "transparent", color: "#61DAFB" },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: { backgroundColor: "transparent", color: "#777BB4" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { backgroundColor: "transparent", color: "#4479A1" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { backgroundColor: "transparent", color: "#336791" },
        },
      ],
    },
    {
      title: "DevOps & Tools",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Managed CI/CD pipelines and build automation with Maven",
        "⚡ Orchestrated a Raspberry Pi Kubernetes cluster for low‑latency services",
        "⚡ Version control and collaboration using Git, GitHub and GitLab",
        "⚡ Administered systems on Linux and Windows platforms",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
          style: { backgroundColor: "transparent" },
        },

        {
          skillName: "Maven",
          fontAwesomeClassname: "simple-icons:apachemaven",
          style: { backgroundColor: "transparent", color: "#C71A36" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { backgroundColor: "transparent", color: "#326CE5" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { backgroundColor: "transparent", color: "#F05032" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "ant-design:github-filled",
          style: { backgroundColor: "transparent", color: "#181717" },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: { backgroundColor: "transparent", color: "#FC6D26" },
        },
      ],
    },
  ],
};

// Education Page

// Plataformas competitivas (adaptei para o teu GitLab)
const competitiveSites = {
  competitiveSites: [
    /*{
      siteName: "GitLab",
      iconifyClassname: "simple-icons:gitlab",
      style: {
        color: "#FC6D26",
      },
      profileLink: "https://www.gitlab.com/ohnoanyway",
    },*/
  ],
};

// Graus académicos
const degrees = {
  degrees: [
    {
      title: "José Falcão Secondary School",
      subtitle: "Economics",
      //logo_path: "jose_falcao_ss_logo.png",    // coloca o logo em public/icons ou public/images
      alt_name: "José Falcão Secondary School",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ Completed core courses in Economics with focus on micro‑ and macro‑economics.",
        "⚡ Developed strong analytical and quantitative reasoning skills.",
      ],
      website_link: "",
    },
    {
      title: "University of Coimbra",
      subtitle: "BSc in Computer Engineering",
      //logo_path: "university_of_coimbra_logo.png",
      alt_name: "University of Coimbra",
      duration: "2020 - Present",
      descriptions: [
        "⚡ Curriculum includes Distributed Systems, Algorithms, AI and Web Development.",
        "⚡ Designed an end‑to‑end orchestration platform using a Raspberry Pi Kubernetes cluster.",
        "⚡ Implemented RNN‑LSTM models for market‑trend forecasting as part of research projects.",
      ],
      website_link: "https://www.uc.pt",
    },
  ],
};

// Certificações (por enquanto vazio, acrescenta à medida que fores obtendo)
const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Research and Associativism",
  description:
    "I have experience in IT installation, full-stack development, research on orchestration platforms, and leadership in juvenile associations.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Installation Technician",
          company: "Stratio",
          company_url: "https://stratio.com",
          logo_path: "stratiologo.png",
          duration: "July 2023 - Sep 2023",
          location: "Lisbon Metropolitan Area, Portugal",
          description:
            "Installed hardware components (Wi-Fi, audio systems, displays, validators and point-of-sale systems) in new and used buses. Performed system integration testing and optimized installation and logistics processes.",
          color: "#004DFF",
        },
        {
          title: "Full-Stack PHP Developer",
          company: "Vidor",
          company_url: "",
          logo_path: "logovidor.svg",
          duration: "Oct 2024 - Dec 2024",
          location: "Coimbra, Portugal",
          description:
            "Developed and maintained web applications using PHP, MySQL, HTML, CSS and JavaScript. Fixed bugs and improved performance of web systems.",
          color: "#663399",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title:
            "Orchestration and Resource optimization for rEIiabIe and lOw-Iatency services (OREOS)",
          company: "University of Coimbra",
          company_url: "https://www.uc.pt",
          logo_path: "uclogo.png",
          duration: "2022 - 2023",
          location: "Coimbra, Portugal",
          description:
            "Designed and implemented an end-to-end orchestration platform for provisioning and managing critical services using Kubernetes and a Raspberry Pi cluster. Conducted resource optimization for reliable, low-latency services and developed forecasting models using RNN-LSTM neural networks. Researched combining technical analysis with machine learning for improved pair trading strategies.",
          color: "#003366",
        },
        {
          title: "Forecasting market trends using Neural Networks (RNN-LSTM)",
          company: "University of Coimbra",
          company_url: "https://www.uc.pt",
          logo_path: "uclogo.png",
          duration: "2023 - 2024",
          location: "Coimbra, Portugal",
          description:
            "Research on approaches to combine technical analysis with machine learning models for better pair trading strategies",
          color: "#003366",
        },
      ],
    },
    {
      title: "Associativism",
      experiences: [
        {
          title: "President",
          company: "República dos Fantasmas",
          company_url: "",
          logo_path: "fantasmaslogo.png",
          duration: "2020 - 2024",
          location: "Coimbra, Portugal",
          description:
            "Led the cultural association, organizing events, fundraising initiatives, and resolving conflicts. Demonstrated adaptability, teamwork and creative problem-solving in daily new challenges.",
          color: "#8A2BE2",
        },
      ],
    },
  ],
};
export const techStack = {
  title: "My Stack",
  stack: [
    // Programming Languages
    { name: "Python", iconifyClassname: "logos:python" },
    { name: "Java", iconifyClassname: "logos-java" },
    { name: "C", iconifyClassname: "logos:c" },
    { name: "C++", iconifyClassname: "logos:c-plusplus" },
    { name: "C#", iconifyClassname: "simple-icons:csharp" },
    { name: "Assembly", iconifyClassname: "simple-icons:assemblyscript" },

    // Operative Systems
    { name: "Linux (Ubuntu)", iconifyClassname: "logos:linux-tux" },

    // Automation
    { name: "Maven", iconifyClassname: "simple-icons:apachemaven" },
    { name: "CI/CD", iconifyClassname: "simple-icons:jenkins" },

    // Databases
    { name: "PostgreSQL", iconifyClassname: "simple-icons:postgresql" },
    { name: "MySQL", iconifyClassname: "simple-icons:mysql" },
    { name: "PL/pgSQL", iconifyClassname: "simple-icons:postgresql" },

    // Version Control & Collaboration
    { name: "Git", iconifyClassname: "simple-icons:git" },
    { name: "GitHub", iconifyClassname: "ant-design:github-filled" },
    { name: "GitLab", iconifyClassname: "simple-icons:gitlab" },

    // Data & Visualization
    { name: "Pandas", iconifyClassname: "logos:pandas" },
    { name: "Jupyter", iconifyClassname: "simple-icons:jupyter" },

    // Web Development
    { name: "Django", iconifyClassname: "simple-icons:django" },
    { name: "React", iconifyClassname: "simple-icons:react" },
    { name: "HTML5", iconifyClassname: "simple-icons:html5" },
    { name: "CSS3", iconifyClassname: "fa-css3" },
    { name: "JavaScript", iconifyClassname: "simple-icons:javascript" },

    // Frameworks & Libraries
    { name: "Spring", iconifyClassname: "simple-icons:spring" },
    { name: "Toga", iconifyClassname: "simple-icons:pycharm" },
    { name: "OpenGL", iconifyClassname: "simple-icons:opengl" },

    // Networking & Protocols
    { name: "TCP/IP", iconifyClassname: "simple-icons:cisco" },
    { name: "Wireshark", iconifyClassname: "simple-icons:wireshark" },

    // Others
    { name: "Arduino", iconifyClassname: "simple-icons:arduino" },
    { name: "Yacc", iconifyClassname: "simple-icons:gnu" },
    { name: "Unity", iconifyClassname: "simple-icons:unity" },
    { name: "API Development", iconifyClassname: "simple-icons:swagger" },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description: "Contact me trough my socials, I'll be happy to reply!",
  },

  addressSection: {
    title: "Address",
    subtitle: "Coimbra, Portugal",
    locality: "Coimbra",
    country: "Portugal",
    region: "Centro",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/5kc4AihTKGhjNZ2K7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  certifications,
  competitiveSites,
  contactPageData,
  degrees,
  experience,
  greeting,
  seo,
  settings,
  skills,
  socialMediaLinks,
};
