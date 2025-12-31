// Mock data for Abhishek's Portfolio

export const portfolioData = {
  personal: {
    name: "Abhishek Kumar Mohanty",
    title: "Full Stack Developer",
    subtitle: "MERN Stack Specialist",
    email: "abhishek123cv@gmail.com",
    phone: "+91 8580146752",
    linkedin: "https://www.linkedin.com/in/abhishek-kumar-mohanty-90109422b/",
    github: "https://github.com/abhishek",
    summary: "Entry-level Full Stack Developer with hands-on experience in MERN stack, RESTful APIs, SQL/NoSQL databases, and scalable web application development. Strong algorithmic reasoning ability with experience in end-to-end feature development, performance optimization, and clean code practices."
  },
  
  skills: {
    frontend: ["React.js", "Redux", "Next.js", "HTML5", "CSS3", "JavaScript"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    databases: ["MongoDB", "MySQL", "SQL"],
    languages: ["Java", "Python", "JavaScript", "C++"],
    coreCS: ["Data Structures", "Algorithms", "OOPs", "DBMS"],
    tools: ["Git", "GitHub", "VS Code"]
  },
  
  projects: [
    {
      id: 1,
      title: "Insight Flow",
      subtitle: "Blog Application",
      description: "Engineered a full stack MERN application supporting 100+ CRUD operations per session across blogs and user profiles, improving content management efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
      features: [
        "Implemented MVC architecture to modularize 10+ core components",
        "Developed RESTful APIs for authentication and content management",
        "Optimized backend API performance, improving response time by 50%",
        "Designed structured schemas for SQL and NoSQL databases"
      ],
      github: "https://github.com/abhishek/insight-flow",
      demo: "https://insight-flow-demo.com"
    },
    {
      id: 2,
      title: "ConnectSphere",
      subtitle: "Social Media Platform",
      description: "Forged backend infrastructure for a social media platform enabling real-time interactions and notifications, while facilitating tracking of 10+ engagement metrics to enhance user experience.",
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&q=80",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
      features: [
        "Engineered responsive frontend components for improved user experience",
        "Designed backend APIs to manage users, posts, and engagement metrics",
        "Improved application performance by 30% through optimization",
        "Implemented real-time notifications and interactions"
      ],
      github: "https://github.com/abhishek/connectsphere",
      demo: "https://connectsphere-demo.com"
    },
    {
      id: 3,
      title: "ClimaCast",
      subtitle: "Weather Application",
      description: "Developed a responsive weather application delivering real-time data for 5+ weather parameters including temperature, humidity, and forecasts.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
      technologies: ["React.js", "JavaScript", "REST APIs", "OpenWeather API", "HTML5", "CSS3"],
      features: [
        "Provisioned asynchronous API calls and optimized state management",
        "Reduced data fetch latency by approximately 40%",
        "Enhanced UI responsiveness and usability",
        "Implemented real-time weather data visualization"
      ],
      github: "https://github.com/abhishek/climacast",
      demo: "https://climacast-demo.com"
    }
  ],
  
  education: {
    institution: "Indian Institute of Information Technology (IIIT), Tiruchirappalli",
    degree: "B.Tech in Electronics and Communication Engineering",
    cgpa: "8.3",
    location: "Tiruchirappalli, Tamil Nadu",
    duration: "December 2021 - October 2025"
  },
  
  achievements: [
    {
      id: 1,
      title: "Flipkart Grid 6.0 Finalist",
      description: "Cleared multiple competitive rounds involving coding challenges and root-cause analysis tasks focused on real-world engineering scenarios.",
      icon: "trophy"
    },
    {
      id: 2,
      title: "5 Star Python Certified",
      description: "Achieved a 5-star rating in Python on HackerRank, reflecting consistent performance in solving Python-based coding and algorithmic problems.",
      icon: "award"
    },
    {
      id: 3,
      title: "Multiple Certifications",
      description: "Certified in Web Development, MongoDB, SQL, Node.js through Udemy - project-based, applied in real-world applications.",
      icon: "badge-check"
    }
  ]
};
