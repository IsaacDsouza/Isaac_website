import { createElement } from "react";
import {
  TbApi,
  TbBrandDjango,
  TbBrandDocker,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandTypescript,
  TbRobot,
  TbSql,
} from "react-icons/tb";
import {
  SiAmazons3,
  SiArgo,
  SiFastapi,
  SiGithubactions,
  SiGraphql,
  SiKubernetes,
  SiMicrosoftazure,
  SiMui,
  SiPandas,
  SiPowerbi,
  SiPython,
  SiSplunk,
} from "react-icons/si";
import { MdSecurity, MdWorkOutline } from "react-icons/md";

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

export const skillsData = [
  { name: "Python", icon: createElement(SiPython) },
  { name: "TypeScript", icon: createElement(TbBrandTypescript) },
  { name: "JavaScript", icon: createElement(TbBrandJavascript) },
  { name: "SQL", icon: createElement(TbSql) },
  { name: "React", icon: createElement(TbBrandReact) },
  { name: "Zustand", icon: createElement(TbBrandReact) },
  { name: "Material UI", icon: createElement(SiMui) },
  { name: "FastAPI", icon: createElement(SiFastapi) },
  { name: "Django", icon: createElement(TbBrandDjango) },
  { name: "REST APIs", icon: createElement(TbApi) },
  { name: "GraphQL", icon: createElement(SiGraphql) },
  { name: "gRPC", icon: createElement(TbApi) },
  { name: "Claude Agents", icon: createElement(TbRobot) },
  { name: "LangChain", icon: createElement(TbRobot) },
  { name: "RAG", icon: createElement(TbRobot) },
  { name: "Prompt Engineering", icon: createElement(TbRobot) },
  { name: "Azure", icon: createElement(SiMicrosoftazure) },
  { name: "Azure Functions", icon: createElement(SiMicrosoftazure) },
  { name: "Azure AD", icon: createElement(SiMicrosoftazure) },
  { name: "Azure Subscriptions", icon: createElement(SiMicrosoftazure) },
  { name: "AWS S3", icon: createElement(SiAmazons3) },
  { name: "Docker", icon: createElement(TbBrandDocker) },
  { name: "Kubernetes", icon: createElement(SiKubernetes) },
  { name: "Argo CD", icon: createElement(SiArgo) },
  { name: "GitHub Actions", icon: createElement(SiGithubactions) },
  { name: "ISO 27001", icon: createElement(MdSecurity) },
  { name: "NIST", icon: createElement(MdSecurity) },
  { name: "HIPAA", icon: createElement(MdSecurity) },
  { name: "Splunk", icon: createElement(SiSplunk) },
  { name: "Pandas", icon: createElement(SiPandas) },
  { name: "Power BI", icon: createElement(SiPowerbi) },
] as const;

export const experiencesData = [
  {
    title: "Cyber Security Engineer Intern",
    location: "Eli Lilly & Company • Bangalore, India",
    description:
      "Building AI-powered compliance intelligence and security analytics platforms using FastAPI, Kubernetes, Azure, Claude Agents, and cloud-native architectures. Developed enterprise solutions enabling auditors to query security evidence across ISO 27001, NIST, and HIPAA frameworks with Azure AD RBAC and automated deployment pipelines.",
    icon: createElement(MdSecurity),
    date: "Jan 2026 – Present",
  },
  {
    title: "Full Stack Developer",
    location: "BroadBITS • Remote, Kuwait",
    description:
      "Developed secure GraphQL APIs, scalable backend services, and React-based web applications supporting business automation initiatives. Improved platform performance, reliability, and maintainability while contributing across frontend, backend, and infrastructure layers.",
    icon: createElement(MdWorkOutline),
    date: "May 2024 – Jun 2025",
  },
] as const;

export const educationData = [
  {
    title: "Manipal Institute of Technology",
    location: "Bengaluru, India",
    description:
      "B.Tech in Computer Science Engineering (Artificial Intelligence). Expected May 2026.",
    icon: createElement(MdWorkOutline),
    date: "2022 - 2026",
  },
] as const;
