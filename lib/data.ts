import { createElement } from "react";
import {
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandFramerMotion,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTailwind,
  TbBrandTypescript,
  TbMarkdown,
  TbBrandDocker,
  TbBrandDjango,
} from "react-icons/tb";
import { 
  SiNextdotjs, 
  SiMui, 
  SiC, 
  SiTensorflow, 
  SiPython, 
  SiMysql, 
} from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import tiktokFind from "@/public/tiktok-find.webp";
import affling from "@/public/affling.webp";
import gamepedia from "@/public/gamepedia.webp";
import qwikit from "@/public/qwikit.png";
import calculator from "@/public/calculator-full.webp";
import portfolioV2 from "@/public/porfolio-v2.webp";
import moneymate from "@/public/moneymate-phone.webp";
import portfolioV1 from "@/public/portfolio-v1.webp";
import drumMachine from "@/public/drum-machine.webp";
import pomodoro from "@/public/pomodoro.webp";
import markdown from "@/public/mdpreviewer.png";
import quoteGenerator from "@/public/quote-generator.webp";
import ticTacToe from "@/public/tictactoe.png";
import rockPaperScissors from "@/public/rockpaperscissors.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "TikTok Find (freelance project)",
    description:
      "Single vendor e-commerce site with admin panel and user & admin authentication. Products can be added, updated, deleted with ease.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Redux", "Firebase"],
    imageUrl: tiktokFind,
    sourceCode: "",
    live: "https://tiktokfind.io/",
    demo: "https://youtu.be/_unb9NCeEaQ",
  },
  {
    title: "MySQL+ERN CRUD",
    description:
      "A full stack app I built all by myself in a weekend using MySQL, Express.js and Next.js 13 with server components.",
    tags: ["MySQL", "Express.js", "Next.js", "Server Components"],
    imageUrl: qwikit,
    sourceCode: "https://github.com/HabibMollah/qwikit-groceries",
    live: "https://qwikit-groceries-frontend.vercel.app/",
    demo: "",
  },
  {
    title: "GamePedia",
    description:
      "A multi-genre, multi-platform game discovery website with powerful search, multi level filtering and sorting",
    tags: ["TypeScript", "React", "Vite", "Chakra UI"],
    imageUrl: gamepedia,
    sourceCode: "https://github.com/HabibMollah/gamepedia",
    live: "https://gamepedia-pi.vercel.app/",
    demo: "",
  },
  {
    title: "Affling (freelance project)",
    description:
      "A social-media like website for a affiliate marketing stuff, where people can register a profile and show there services",
    tags: ["Next.js", "TypeScript", "Zod", "...", "...", "..."],
    imageUrl: affling,
    sourceCode: "",
    live: "https://affling.vercel.app/",
    demo: "",
  },
  {
    title: "This portfolio",
    description: "The website you're looking at right now.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
    imageUrl: portfolioV2,
    sourceCode: "https://github.com/HabibMollah/habibmollah-v2",
    live: "",
    demo: "",
  },
  {
    title: "Markdown Previewer",
    description:
      "Write in Markdown syntax and see the result in real time in GitHub style.",
    tags: ["React", "TypeScript", "MDX", "Vite"],
    imageUrl: markdown,
    sourceCode: "https://github.com/HabibMollah/markdown-previewer-fcc-project",
    live: "https://markdown-previewer-fcc-project.vercel.app/",
    demo: "",
  },
  {
    title: "Pomodoro",
    description:
      "Set a timer. Focus on you task meanwhile. Get notified when the time ends. Take a short break. Repeat.",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: pomodoro,
    sourceCode: "https://github.com/HabibMollah/pomodoro-fcc-project",
    live: "https://pomodoro-fcc-project.vercel.app/",
    demo: "",
  },
  {
    title: "React Calculator",
    description:
      "A calculator made with React that can do all arithmetic calculations",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: calculator,
    sourceCode: "https://github.com/HabibMollah/js-calculator-fcc-project",
    live: "https://js-calculator-fcc-project.vercel.app/",
    demo: "",
  },
  {
    title: "MoneyMate",
    description:
      "A simple but powerful expense tracker app with the ability to filter items with specific category.",
    tags: ["React", "TypeScript", "Vite", "Daisy UI"],
    imageUrl: moneymate,
    sourceCode: "https://github.com/HabibMollah/expense-tracker",
    live: "https://moneymate-ten.vercel.app/",
    demo: "",
  },
  {
    title: "Drum Machine",
    description: "A drum machine made with React 17",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: drumMachine,
    sourceCode: "https://github.com/HabibMollah/drum-machine-fcc-project",
    live: "https://drum-machine-fcc-project.vercel.app/",
    demo: "",
  },
  {
    title: "Quote Generator",
    description: "A beautiful quote generator made with React 17",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: quoteGenerator,
    sourceCode:
      "https://github.com/HabibMollah/random-quote-generator-fcc-project",
    live: "https://random-quote-generator-fcc-project.vercel.app/",
    demo: "",
  },
  {
    title: "React Tic-Tac-Toe",
    description: "The classic tic-tac-toe game.",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: ticTacToe,
    sourceCode: "https://github.com/HabibMollah/react-tic-tac-toe",
    live: "https://react-tic-tac-toe-indol.vercel.app/",
    demo: "",
  },
  {
    title: "React Rock Paper Scissors",
    description: "Play rock paper scissors with robot",
    tags: ["React", "TypeScript", "Vite"],
    imageUrl: rockPaperScissors,
    sourceCode: "https://github.com/HabibMollah/react-rock-paper-scissors",
    live: "https://react-rock-paper-scissors-gamma.vercel.app/",
    demo: "",
  },
  {
    title: "HTML CSS only Portfolio",
    description: "My first porfolio made only with HTML and CSS.",
    tags: ["HTML5", "CSS3"],
    imageUrl: portfolioV1,
    sourceCode: "https://github.com/HabibMollah/first-portfolio",
    live: "https://habibmollah.github.io/first-portfolio/",
    demo: "",
  },
] as const;

export const skillsData = [
  { name: "JavaScript", icon: createElement(TbBrandJavascript) },
  { name: "TypeScript", icon: createElement(TbBrandTypescript) },
  { name: "React", icon: createElement(TbBrandReact) },
  { name: "Next.js", icon: createElement(SiNextdotjs) },
  { name: "Python", icon: createElement(SiPython) },
  { name: "MySQL", icon: createElement(SiMysql) },
  { name: "Django", icon: createElement(TbBrandDjango) },
  { name: "Docker", icon: createElement(TbBrandDocker) },
  { name: "Framer Motion", icon: createElement(TbBrandFramerMotion) },
  { name: "Redux", icon: createElement(TbBrandRedux) },
  { name: "Tailwind", icon: createElement(TbBrandTailwind) },
  { name: "MUI", icon: createElement(SiMui) },
  { name: "Bootstrap", icon: createElement(TbBrandBootstrap) },
  { name: "CSS", icon: createElement(TbBrandCss3) },
  { name: "Markdown", icon: createElement(TbMarkdown) },
  { name: "HTML", icon: createElement(TbBrandHtml5) },
  { name: "Git", icon: createElement(TbBrandGit) },
  { name: "C", icon: createElement(SiC) },
  { name: "TensorFlow", icon: createElement(SiTensorflow) },
  

] as const;

export const experiencesData = [
  {
    title: "Full Stack Software Engineer (part-time)",
    location: "Broadbits",
    description:
      "Currently, I am working remotely part-time as a Full Stack Software Engineer within this organization.",
    icon: createElement(MdWorkOutline),
    date: "September 2024 - present",
  },
  {
    title: "ACM WebMaster",
    location: "MITB ACM Student Chapter",
    description:
      "I worked full-time as a WebMaster within this organization.",
    icon: createElement(MdWorkOutline),
    date: "October 2024 - present",
  },
  {
    title: "Frontend Software Engineer Intern",
    location: "Broadbits",
    description:
      "I used to work as a Frontend Software Engineer Intern within this organization.",
    icon: createElement(MdWorkOutline),
    date: "May 2024- September 2024",
  },
  

] as const;

export const educationData = [
  {
    
    title: "Manipal Institue of Technology",
    location: "B.Tech in Computer Science(AI)",
    description:
      "Bachelor of Technology in Computer Science with specialization in Artificial Intelligence.",
    icon: createElement(MdWorkOutline),
    date: "2022-2026",
  },
  {
    
    title: "Mount Carmel Central School",
    location: "High School Diploma - Physics, Chemistry, Mathematics, and Computer Science",
    description:
      "Grade Secured - 83.8%.",
    icon: createElement(MdWorkOutline),
    date: "2020-2022",
  },
  {
    title: "Mount Carmel Central School",
    location: "Matriculation",
    description:
      "Grade Secured - 92.8%.",
    icon: createElement(MdWorkOutline),
    date: "2016-2020",
  },
  {
    title: "Indian Community School Kuwait",
    location: "Broadbits",
    description:
      "Grade Secured - A.",
    icon: createElement(MdWorkOutline),
    date: "2007-2016",
  },
  

] as const;

