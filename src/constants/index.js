import { dickscall } from "../utils";

export const Experience = [
  {
    id: 1,
    date: ["July 2025 – Current"],
    title: ["Web Developer - Internship"],
    company: ["Bilimetrix"],
    stack: ["C#", "HTML5", "ASP.NET", "MySQL", "Git"],
    description: [
      "Redesigning the website layout and introduced intuitive visuals to enhance usability and streamline navigation."
    ],
    personal: [
      "We work under Dr. Richard Wennberg, who is highly knowledgeable and provides detailed feedback on the layout and functionality related to Kernicterus and BiliPics.",
      "unit tests and proper branching are a big deal"
    ]
  },
  {
    id: 2,
    date: ["Sep 2024 – June 2025"],
    title: ["Software Engineer - Capstone Internship"],
    company: ["F5 (Seattle University)"],
    stack: ["F5 GPT-4o", "Python", "Flask", "React.js", "Azure DevOps", "Postman", "pandas", "openpyxl", "requests", "urllib3", "axios"],
    description: [
      "Built an AI-powered tool that generates LUA diagnostic scripts for known bugs, reducing script creation time by 40% and lowering operational costs.",
      "Designed reusable prompt templates with embedded examples to generalize across bug categories.",
      "Developed a full-stack React + Flask application for engineers to search bugs and download scripts."
    ],
    personal: [
      "Stepping into the F5 Towers and connecting with professionals felt like a turning point that marked my transition from a student to a software engineer.",
      "The experience not only gave me a clearer picture of the industry’s expectations but also reinforced my motivation to grow as a developer and work toward contributing to companies operating at that level. "
    ]
  },
  {
    id: 3,
    date: ["Oct 2023 – June 2025"],
    title: ["Learning Facilitator"],
    company: ["Seattle World School"],
    stack: ["Communication", "Peer Collaboration", "Initiative", "Mentorship", "Visual Explanation", "Adaptability"],
    description: [
      "Assisted Grade 9–12 students in Math, Physics, Chemistry, Astronomy, and Computer Science during class sessions.",
      "Collaborated with teachers and Microsoft TEALS volunteers to support instruction and clarify assignments."
    ],
    personal: [
      "Transitioning from a hectic sandwich job, this role was a refreshing change of pace, especially while I was overloading courses due to missing a quarter. ",
      "Also the conversations with the teachers many of whom had transitioned careers multiple times were very inspiring."
    ]
  },
  {
    id: 4,
    date: ["Jan 2023 – May 2023"],
    title: ["Restaurant Team Member"],
    company: ["The Homegrown Group"],
    stack: ["Time Management", "Teamwork", "Multitasking", "Food Safety", "Attention to Detail"],
    description: [
      "Worked full-day shifts rotating between roles including cook, prep, and dishwasher.",
      "Prepared sandwiches and salads while adhering to food safety protocols."
    ],
    personal: [
      "This was my first job, and I wasn't fully prepared for how demanding the food industry can be.",
      "I worked back-to-back 10-hour shifts on weekends while overloading courses, somehow I managed to pass with decent grades.",
      "Despite the chaos, my coworkers were supportive and taught me a lot about time management and collaboration."
    ]
  }
];

export const university = [
  {
    name: ["Seattle University"],
    date: ["Graduated June 2025"],
    major: ["Bachelor of Science (B.S.) in Computer Science"],
    minor: ["Minor in Mathematics"],
    scholarship: ["Merit Scholarship: $23,500 per annum"],
    awards: ["Deans list for Fall 2022"],
    clubs: ["Member of the Chess and Mens Soccer club"],
    competitions: ["Participated in numerous intramural sport Competitions, serving multiple times as Captain for the volleyball team"],
    

    c1: ["Machine Learning", "Python"],
    c2: ["Data Structures", "C++"],
    c3: ["Mobile Software Design", "Android Studio", "Kotlin"],
    c4: ["Object-Oriented Development", "C++", "C#"],
    c5: ["Design & Analysis of Algorithms", "Java"],
    c6: ["Big Data Analytics", "Java", "Python", "Hadoop", "Docker", "Hive", "Spark", "AWS (EC2, S3)"],
    c7: ["Technical Communication & Project Management", "Agile", "Scrum", "Sprints", "Modeling"],
    c8: ["Calculus I, II, III", "Limits", "Derivatives", "Integrals", "Multivariable Calculus"],
    c9: ["Probability and Statistics", "R"],
    c10: ["Advanced Mathematics", "Logic", "Proofs", "Set Theory"]
  }
];


export const projects = [
  {
    title: "Fury – 2D Platform Game",
    stack: ["Unity", "C#", "Physics", "Animation"],
    gameurl: "https://kazkuz.itch.io/fury",
    githuburl: "https://github.com/KazimHus/Fury-Code",
    description: [
      "Designed and developed a physics-based 2D platformer with single-player and local multiplayer modes.",
      "Implemented enemy AI, player animations, and collision mechanics using Unity’s physics engine."
    ],
    personal: [
      "I've loved video games since I was a kid my first console was the VTech V-Smile. ",
      "I sourced assets from Itch.io and even made sound effects myself when I couldn’t find the right ones.",
      "It was a fun project and I plan to make an even better game in the future."
    ]
  },
  {
    title: "Jones Idea Challenge – Mobile App UI",
    stack: ["Figma", "UI/UX", "Prototyping"],
    image: dickscall,
    description: [
      "Designed and presented a Figma prototype for a mobile ordering app for Dick’s Drive-In.",
      "Focused on intuitive design, unique features, and increasing customer engagement."
    ],
    personal: [
      "I thought my art skills would translate to UI/UX design, but it was more challenging than expected. ",
    ]
  },
  {
    title: "Automation Pipeline – AI-Powered Shorts",
    stack: ["Python", "Gemini AI", "YouTube API", "yt-dlp", "FFmpeg"],
    youtubelink: "https://www.youtube.com/@marvelrivalzshorts",
    description: [
      "Created an end-to-end pipeline to download long videos, analyze them with Gemini AI, and automatically upload relevant segments as YouTube Shorts.",
      "Utilized yt-dlp for scraping, FFmpeg for editing, and the YouTube API for automated uploads."
    ],
    personal: [
      "So I built this project to test how easily I could repurpose existing videos and publish clips.",
      "I’m still refining the pipeline as I haven’t gained many views yet."
    ]
  },
  {
    title: "Heartbeat Sensor – ESP32 + Gemini AI",
    stack: ["ESP32", "Arduino", "React", "Tailwind", "Express", "REST", "Gemini API"],
    githuburl: "https://github.com/KazimHus/heartbeatsensor",
    description: [
      "Developed a real-time BPM monitor using ESP32 and IR sensors, with live data displayed on a React web interface.",
      "Smoothed noisy signals and used the Gemini API to estimate heart rate and respond to user queries."
    ],
    personal: [
      "I built it because I thought it would be medically useful, and I also wanted to monitor my heartbeat while playing horror games."
    ]
  },
  {
    title: "NASA Space Apps Hackathon – CO2 Heatmap",
    stack: ["Python", "Streamlit", "Folium", "GPT", "Pandas", "JavaScript"],
    githublink: "https://github.com/KazimHus/NASA_hackathon",
    description: [
      "Collaborated with a team to build a web app that visualizes Seattle’s CO2 emissions using open data sources.",
      "Designed interactive heatmaps and integrated a GPT-based chatbot to increase public awareness and interaction."
    ],
    personal: [
      "We got to meet professionals from various companies and even attended a talk by retired astronaut Dorothy 'Dottie' Metcalf-Lindenburger, which was very cool."
    ]
  }
];









