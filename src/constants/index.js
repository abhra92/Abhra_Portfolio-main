export const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#spotify", label: "My Music", isNew: true, icon: "spotify" },
  { href: "#contact", label: "Contact" }
];

export const HERO_CONTENT = {
  greeting: "Hey, I'm Abhrajyoti Dhara ",
  introduction: "I'm a passionate software developer with experience in building web applications using modern technologies.",
  description:
    "I enjoy solving complex problems and creating intuitive user experiences. I work with Java, Python, JavaScript, TypeScript, and modern frameworks like React, Angular, and Spring Boot.",
  resumeLinkText: "View CV",
  resumeLink: "/Abhrajyoti_cv.pdf",
};
export const PROJECTS = [
  {
    name: "Netflix Clone",
    description:
      "A responsive Netflix UI clone built using React & deployed on Netlify.",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://netliflix2025.netlify.app/", 
  },
  
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio built with HTML, CSS, and W3.CSS to showcase projects and skills.",
    technologies: ["HTML", "CSS", "W3.CSS"],
    link: "https://portfolio-w3-nine.vercel.app/",
  },
  {
    name: "Number Guessing Game",
    description:
      "A fun JavaScript-based number guessing game with random number logic.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://number-guesing-game02.netlify.app/",
  },
  {
    name: "Responsive Chips Website",
    description:
      "A clean and responsive snack brand website built with HTML, CSS, and JS.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://bca-chips.netlify.app/",
  },
  {
    name: "Christmas Landing Page",
    description:
      "A beautifully styled responsive landing page for the Christmas season, built with HTML & CSS.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://christmas2025-landing-page.netlify.app/",
  },
  {
    name: "3D Temple",
    description:
      "A 3D interactive temple scene built with Three.js and WebGL.",
    technologies: ["Three.js", "WebGL", "JavaScript"],
    link: "https://3d-temple.netlify.app/",
  },
];


export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a passionate software developer with experience in building web applications using modern technologies. I enjoy solving complex problems and creating intuitive user experiences.",
    "I specialize in technologies like Java, Python, JavaScript, TypeScript, and work with frameworks like Spring Boot, Angular, React, and Bootstrap. I'm proficient with tools like Docker, Git/GitLab, Jenkins, IntelliJ IDEA, VS Code, and cloud platforms like GCP. My focus is on writing clean, maintainable code while continuously learning and growing in the field of software development.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "Present",
    title: "Software Developer",
    company: "Sernion",
    location: "Remote",
    description: [
      "Developing and maintaining web applications using modern technologies.",
      "Working with cross-functional teams to deliver high-quality software solutions.",
      "Implementing best practices for code quality and performance optimization.",
      "Contributing to the full software development lifecycle from planning to deployment.",
    ]
  },
  {
    yearRange: "Previous",
    title: "Software Developer Intern",
    company: "Euphoria GNX",
    location: "Remote",
    description: [
      "Gained hands-on experience in web development and software engineering.",
      "Worked on real-world projects using various programming languages and frameworks.",
      "Collaborated with senior developers to learn industry best practices.",
      "Contributed to the development of user-friendly web applications.",
    ],
  },
];


export const CONTACT_CONTENT = {
  headline: "LET'S CONNECT AND CREATE SOMETHING AMAZING",
  description:
    "Have a project in mind? Let's chat! I'm excited to apply my skills and knowledge to new challenges.",
  email: "abhrajoytidhara2@gmail.com",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/abhra92/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/abhra92",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Abhrajyoti Dhara. All rights reserved.`,
};
