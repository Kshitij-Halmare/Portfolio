import { useState, useEffect } from "react";
import React from "react";
import logo from "./assets/download.png";
import dotShape from "./assets/dot-shape-circle.png";
import profilephoto from "./assets/photo.png";
import AboutDot from "./assets/about-dot.png";
import { FaProjectDiagram } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiPostman,
  SiJavascript,
} from "react-icons/si";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Code,
  TrendingUp,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";

import {
  ExternalLink,
  Github,
  Brain,
  BookOpen,
  Utensils,
  Zap,
  Users,
  Code2,
  Database,
  Palette,
} from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredExp, setHoveredExp] = useState(null);
  const [hoveredEdu, setHoveredEdu] = useState(null);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const techCategories = [
    {
      category: "Frontend Development",
      techs: [
        { Icon: FaHtml5, color: "#E34F26", name: "HTML5" },
        { Icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
        { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
        { Icon: FaReact, color: "#61DAFB", name: "React.js" },
        { Icon: SiRedux, color: "#764ABC", name: "Redux" },
        { Icon: SiTailwindcss, color: "#38BDF8", name: "Tailwind CSS" },
      ],
    },
    {
      category: "Backend Development",
      techs: [
        { Icon: FaNodeJs, color: "#6cc24a", name: "Node.js" },
        { Icon: SiExpress, color: "#DDDDDD", name: "Express.js" },
        { Icon: FaJava, color: "#E76F00", name: "Java" },
      ],
    },
    {
      category: "Database & Tools",
      techs: [
        { Icon: SiMongodb, color: "#4DB33D", name: "MongoDB" },
        { Icon: FaDatabase, color: "#E8C83E", name: "SQL" },
        { Icon: SiPostman, color: "#FF6C37", name: "Postman" },
        { Icon: FaGitAlt, color: "#F1502F", name: "Git & GitHub" },
      ],
    },
  ];

  const projects = [
    {
      title: "MentiHealth",
      tagline: "AI-Powered Mental Wellness Platform",
      description:
        "A comprehensive mental health platform helping introverted users monitor emotional well-being and receive AI-guided self-help recommendations. Features anonymous community support forums and a seamless real-time booking system connecting users with licensed counselors.",
      icon: <Brain className="w-8 h-8" />,
      image: "🧠",
      tech: ["React", "Node.js", "MongoDB", "AI/ML", "WebSocket"],
      category: "Health Tech",
      duration: "Aug 2024 – Dec 2024",
      metrics: [
        {
          label: "Accuracy Boost",
          value: "25%",
          icon: <TrendingUp className="w-4 h-4" />,
          color: "text-green-400",
        },
        {
          label: "Active Users",
          value: "500+",
          icon: <Users className="w-4 h-4" />,
          color: "text-blue-400",
        },
      ],
      features: [
        {
          icon: <Brain className="w-5 h-5" />,
          title: "AI Self-Assessment",
          desc: "Smart algorithms for emotional health tracking",
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Community Support",
          desc: "Anonymous peer support forums",
        },
        {
          icon: <Calendar className="w-5 h-5" />,
          title: "Real-time Booking",
          desc: "Instant counselor appointment system",
        },
        {
          icon: <Award className="w-5 h-5" />,
          title: "Progress Tracking",
          desc: "Visual wellness journey insights",
        },
      ],
      impact:
        "Solved the problem of users lacking a private, personalized mental health space, enabling data-driven counseling access and emotional tracking.",
      liveLink: "https://mentihealth-1.onrender.com/",
      githubLink: "https://github.com/Kshitij-Halmare/MentiHealth",
      gradient: "from-purple-600 via-pink-500 to-rose-500",
      bgGradient: "from-purple-500/10 via-pink-500/10 to-rose-500/10",
    },
    {
      title: "ScriptoSphere",
      tagline: "Next-Gen Content Creation Platform",
      description:
        "A modern blogging platform that revolutionizes content creation with a powerful low-code editor integrating Editor.js and Cloudinary for media uploads and real-time notifications. Built for creators who demand speed and flexibility.",
      icon: <BookOpen className="w-8 h-8" />,
      image: "📝",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Editor.js",
        "Cloudinary",
        "Socket.io",
      ],
      category: "Content Platform",
      duration: "Aug 2024 – Dec 2024",
      metrics: [
        {
          label: "Time Saved",
          value: "40%",
          icon: <Zap className="w-4 h-4" />,
          color: "text-yellow-400",
        },
        {
          label: "Daily Posts",
          value: "200+",
          icon: <TrendingUp className="w-4 h-4" />,
          color: "text-cyan-400",
        },
      ],
      features: [
        {
          icon: <Code2 className="w-5 h-5" />,
          title: "Modular Editor",
          desc: "Drag-and-drop content blocks",
        },
        {
          icon: <Palette className="w-5 h-5" />,
          title: "Rich Media",
          desc: "Seamless Cloudinary integration",
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Live Notifications",
          desc: "Real-time engagement updates",
        },
        {
          icon: <Database className="w-5 h-5" />,
          title: "Auto-Save",
          desc: "Never lose your work",
        },
      ],
      impact:
        "Solved the problem of time-consuming content creation by enabling modular editing and reducing blog creation time by 40%.",
      liveLink: "https://blogging-website-1-semf.onrender.com/",
      githubLink: "https://github.com/Kshitij-Halmare/Blogging_Website",
      gradient: "from-blue-600 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
    },
    {
      title: "Flavor Fusion",
      tagline: "Smart Food Delivery Experience",
      description:
        "A full-stack food delivery platform featuring intelligent cart management, secure payment processing with Stripe, and lightning-fast performance through optimized Redux architecture. Real-time cart updates and seamless checkout experience.",
      icon: <Utensils className="w-8 h-8" />,
      image: "🍔",
      tech: ["React", "Node.js", "MongoDB", "Redux", "Stripe API", "JWT"],
      category: "E-Commerce",
      duration: "Sept 2024 – Dec 2024",
      metrics: [
        {
          label: "Performance",
          value: "30%↑",
          icon: <TrendingUp className="w-4 h-4" />,
          color: "text-orange-400",
        },
        {
          label: "Transactions",
          value: "1000+",
          icon: <Award className="w-4 h-4" />,
          color: "text-red-400",
        },
      ],
      features: [
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Real-time Cart",
          desc: "Instant updates and sync",
        },
        {
          icon: <Award className="w-5 h-5" />,
          title: "Secure Payments",
          desc: "Stripe integration with PCI compliance",
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Redux Optimized",
          desc: "30% latency reduction",
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Order Tracking",
          desc: "Live delivery status updates",
        },
      ],
      impact:
        "Solved checkout performance issues by optimizing Redux state management, reducing cart latency by 30%, and improving transaction reliability.",
      liveLink: "https://food-app-1-p51c.onrender.com/",
      githubLink: "https://github.com/Kshitij-Halmare/Food-App",
      gradient: "from-orange-600 via-red-500 to-pink-500",
      bgGradient: "from-orange-500/10 via-red-500/10 to-pink-500/10",
    },
  ];

  const currentProject = projects[activeProject];

  return (
    <>
      <div className="bg-[#032628] font-sans font-extrabold min-h-screen">
        <header className="w-full z-50 fixed top-0 bg-[#032628]/95 backdrop-blur-sm border-b border-gray-800/50">
          <div className="container mx-auto ">
            <div className="flex items-center justify-between px-4 lg:px-0">
              <div className="z-10 py-0.5 relative ">
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                  <img
                    src={logo}
                    alt="Logo"
                    title="Logo"
                    className="w-[100px]"
                  />
                </a>
              </div>
              <nav
                className={`lg:static absolute left-0 bg-black lg:bg-inherit w-full lg:w-auto top-full transition-all duration-500 ease-in-out ${menuOpen
                    ? "h-auto opacity-100 visible"
                    : "h-0 opacity-0 invisible"
                  } lg:h-auto lg:opacity-100 lg:visible overflow-hidden`}
              >
                <ul className="flex lg:flex-row flex-col lg:items-center ">
                  <li className="lg:py-11 py-4 px-5 border-b border-gray-700 lg:border-b-0">
                    <a
                      className="opacity-100 block text-[15px] font-bold relative uppercase text-gray-300 transition-all duration-500 ease-linear cursor-pointer hover:text-primary"
                      onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="lg:py-11 py-4 px-5 border-b border-gray-700 lg:border-b-0">
                    <a
                      className="opacity-100 block text-[15px] font-bold relative uppercase text-gray-300 transition-all duration-500 ease-linear cursor-pointer hover:text-primary"
                      onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                    >
                      about
                    </a>
                  </li>
                  <li className="lg:py-11 py-4 px-5 border-b border-gray-700 lg:border-b-0">
                    <a
                      className="opacity-100 block text-[15px] font-bold relative uppercase text-gray-300 transition-all duration-500 ease-linear cursor-pointer hover:text-primary"
                      onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}
                    >
                      Resume
                    </a>
                  </li>
                  <li className="lg:py-11 py-4 px-5 border-b border-gray-700 lg:border-b-0">
                    <a
                      className="opacity-100 block text-[15px] font-bold relative uppercase text-gray-300 transition-all duration-500 ease-linear cursor-pointer hover:text-primary"
                      onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                    >
                      skills
                    </a>
                  </li>
                  <li className="lg:py-11 py-4 px-5 border-b border-gray-700 lg:border-b-0">
                    <a
                      className="opacity-100 block text-[15px] font-bold relative uppercase text-gray-300 transition-all duration-500 ease-linear cursor-pointer hover:text-primary"
                      onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}
                    >
                      projects
                    </a>
                  </li>
                  <li className="lg:py-11 py-4 px-5 border-b border-gray-700 lg:border-b-0">
                    <a
                      className="opacity-100 block text-[15px] font-bold relative uppercase text-gray-300 transition-all duration-500 ease-linear cursor-pointer hover:text-primary"
                      onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div
                className="text-white cursor-pointer  lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bars"
                  className="w-6 h-6 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </header>

        <main className="pt-20">
          <section id="home" className="pt-[70px] min-h-screen flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center text-center mb-[25px]">
              <h2 className="font-normal text-[rgba(255,255,255,0.69)] text-xl mb-[5px]">
                Hi! 👋 My name is Kshitij Halmare
              </h2>
              <div className="flex flex-col gap-1 text-center">
                <div className="absolute right-[18%] top-[60%] custom-spin">
                  <img src={dotShape} alt="Shape" />
                </div>
                <h1 className="text-white text-6xl lg:text-8xl font-bold">
                  Full-Stack
                </h1>
                <div className="absolute left-[25%] top-[45%] custom-spin">
                  <img src={AboutDot} alt="Shape" />
                </div>

                <h1 className="text-white text-6xl lg:text-8xl font-bold">
                  <span className="text-[#e8c83e]">Web</span> Developer
                </h1>
                <h1 className="text-white text-6xl lg:text-8xl font-bold mb-6">
                  and <span className="text-[#e8c83e]">Problem Solver</span>.
                </h1>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="bg-[#e8c83e] px-[40px] mb-[25px] py-[15px] text-[18px] font-medium drop-shadow-md drop-shadow-amber-50 hover:bg-[#f5d84e] transition-all duration-300"
              >
                Hire me {`>`}
              </button>
            </div>
            <div className="bg-[#e8c83e] lg:mx-30 mx-6 lg:py-5 py-3 rounded-full mt-[30px]">
              <div className="flex flex-wrap items-center justify-center gap-6 text-[#032628] font-bold text-center">
                <div className="flex flex-col items-center w-[140px] sm:w-auto">
                  <FaProjectDiagram className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
                  <p className="text-sm sm:text-base">
                    10+ Full-Stack Projects
                  </p>
                </div>

                <div className="flex flex-col items-center w-[140px] sm:w-auto">
                  <FaCode className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
                  <p className="text-sm sm:text-base">20+ Total Projects</p>
                </div>

                <a
                  href="https://leetcode.com/u/kshitij_halmare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center w-[140px] sm:w-auto hover:scale-105 transition-transform"
                >
                  <SiLeetcode className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
                  <p className="text-sm sm:text-base">1000+ LeetCode Problems</p>
                </a>

                <a
                  href="https://www.codechef.com/users/kshitij_1009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center w-[140px] sm:w-auto hover:scale-105 transition-transform"
                >
                  <SiCodechef className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
                  <p className="text-sm sm:text-base">2★ on CodeChef</p>
                </a>
              </div>
            </div>
          </section>

          <section id="about" className="pt-[100px] mb-[45px] min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center justify-center mx-6 lg:mx-10">
              <div>
                <img
                  src={profilephoto}
                  alt="Kshitij Halmare"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>

              <div className="py-12 px-6 sm:px-12 md:px-20 text-white">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                  <div className="text-[#e8c83e] font-semibold text-sm uppercase tracking-[3px] mb-3">
                    About Me
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
                    A passionate{" "}
                    <span className="text-[#e8c83e]">Software Engineer</span>
                    {" "}who loves building impactful, scalable, and user-focused web
                    experiences.
                  </h2>

                  <p className="text-gray-300 leading-relaxed text-[16px] md:text-[17px]">
                    Hi! I'm{" "}
                    <span className="text-[#e8c83e] font-semibold">
                      Kshitij Halmare
                    </span>{" "}
                    — a Software Engineer with a strong foundation in
                    <span className="text-[#e8c83e]">
                      {" "}
                      Data Structures, Algorithms, and System Design
                    </span>
                    . I enjoy turning ideas into real-world solutions using
                    <span className="text-[#e8c83e] font-medium">
                      {" "}
                      JavaScript, React, Node.js,
                    </span>{" "}
                    and
                    <span className="text-[#e8c83e] font-medium"> MongoDB</span>
                    .
                  </p>

                  <p className="text-gray-300 mt-5 leading-relaxed text-[16px] md:text-[17px]">
                    I've built and deployed multiple end-to-end applications —
                    from
                    <span className="text-[#e8c83e]">
                      {" "}
                      mental health platforms
                    </span>{" "}
                    to
                    <span className="text-[#e8c83e]">
                      {" "}
                      e-commerce systems
                    </span>{" "}
                    — focusing on performance, clean code, and modern UI/UX.
                    With{" "}
                    <span className="text-[#e8c83e]">
                      1000+ DSA problems solved
                    </span>
                    {" "}and hands-on experience in real-world projects, I'm
                    constantly evolving to create meaningful digital products
                    that make an impact.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
            <section id="resume" className="bg-[#021819] py-20 px-6 lg:px-24 min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto w-full">
              <div className="text-center mb-12">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-[#e8c83e]/10 text-[#e8c83e] rounded-full text-sm font-semibold border border-[#e8c83e]/20">
                    Download Resume
                  </span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
                  My <span className="text-[#e8c83e]">Resume</span>
                </h2>
                <div className="w-24 h-1 mx-auto mb-6 bg-[#e8c83e]"></div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                  Get a comprehensive overview of my experience, skills, and achievements
                </p>
              </div>

              <div className="bg-[#043b3b] rounded-3xl p-8 lg:p-12 border border-[#e8c83e]/30 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Quick Stats */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <Award className="w-6 h-6 text-[#e8c83e]" />
                      Highlights
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#e8c83e] rounded-full mt-2"></div>
                        <p className="text-gray-300">
                          <span className="text-[#e8c83e] font-semibold">8.48 CGPA</span> in Electronics & Computer Science
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#e8c83e] rounded-full mt-2"></div>
                        <p className="text-gray-300">
                          <span className="text-[#e8c83e] font-semibold">1250+</span> DSA Problems Solved
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#e8c83e] rounded-full mt-2"></div>
                        <p className="text-gray-300">
                          <span className="text-[#e8c83e] font-semibold">10+</span> Full-Stack Projects
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#e8c83e] rounded-full mt-2"></div>
                        <p className="text-gray-300">
                          <span className="text-[#e8c83e] font-semibold">4 Months</span> Internship Experience
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Skills */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <Code className="w-6 h-6 text-[#e8c83e]" />
                      Core Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "Java", "DSA", "System Design", "REST APIs", "Git"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-[#032628] text-gray-300 rounded-lg border border-[#e8c83e]/20 text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#e8c83e]/20 pt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="/Kshitij_Halmare_Resume.pdf"
                      download="Kshitij_Halmare_Resume.pdf"
                      className="group flex items-center gap-3 px-8 py-4 bg-[#e8c83e] text-[#032628] rounded-xl font-bold hover:bg-[#f5d84e] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#e8c83e]/30 w-full sm:w-auto justify-center"
                    >
                      <svg
                        className="w-6 h-6 group-hover:animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download Resume (PDF)
                    </a>
                    {/* <a
                      href="https://drive.google.com/file/d/your-google-drive-link/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-8 py-4 bg-[#032628] text-[#e8c83e] rounded-xl font-bold border-2 border-[#e8c83e]/30 hover:border-[#e8c83e] transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      View Online
                    </a> */}
                  </div>
                  <p className="text-center text-gray-400 text-sm mt-4">
                    Last updated: January 2025
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-[#043b3b] rounded-xl p-6 border border-[#e8c83e]/20 text-center">
                  <Briefcase className="w-8 h-8 text-[#e8c83e] mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Experience</h4>
                  <p className="text-gray-400 text-sm">Full-Stack Development & Internship</p>
                </div>
                <div className="bg-[#043b3b] rounded-xl p-6 border border-[#e8c83e]/20 text-center">
                  <GraduationCap className="w-8 h-8 text-[#e8c83e] mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Education</h4>
                  <p className="text-gray-400 text-sm">B.Tech in Electronics & CS</p>
                </div>
                <div className="bg-[#043b3b] rounded-xl p-6 border border-[#e8c83e]/20 text-center">
                  <Award className="w-8 h-8 text-[#e8c83e] mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Achievements</h4>
                  <p className="text-gray-400 text-sm">LeetCode 1678 Rating, SIH Selected</p>
                </div>
              </div>
            </div>
          </section>



          <section id="skills" className="bg-[#032628] py-20 px-6 lg:px-24 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#e8c83e] tracking-wide">
                  Tech Stack
                </h2>
                <div className="w-24 h-1 bg-[#e8c83e] mx-auto mb-6"></div>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Proficient in modern technologies for building scalable
                  full-stack applications
                </p>
              </div>

              {techCategories.map((category, idx) => (
                <div key={idx} className="mb-16 last:mb-0">
                  <h3 className="text-2xl font-semibold text-white mb-8 text-center md:text-left">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
                    {category.techs.map(({ Icon, color, name }, i) => (
                      <div
                        key={i}
                        className="group flex flex-col items-center transition-all transform hover:scale-110 hover:-translate-y-2 duration-300"
                      >
                        <div className="relative p-5 rounded-2xl bg-[#043b3b] shadow-lg shadow-black/40 group-hover:shadow-[#e8c83e]/50 group-hover:bg-[#054a4d] transition-all duration-300 border border-transparent group-hover:border-[#e8c83e]/30">
                          <Icon
                            size={56}
                            style={{ color }}
                            className="transition-transform group-hover:scale-110 duration-300"
                          />
                          <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            style={{
                              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                            }}
                          ></div>
                        </div>
                        <p className="mt-4 text-sm md:text-base font-medium text-gray-300 group-hover:text-[#e8c83e] transition-colors duration-300">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-20 pt-16 border-t border-[#e8c83e]/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="group">
                    <div className="bg-[#043b3b] rounded-xl p-8 hover:bg-[#054a4d] transition-all duration-300 border border-[#e8c83e]/20 hover:border-[#e8c83e]/50">
                      <div className="text-4xl font-bold text-[#e8c83e] mb-2 group-hover:scale-110 transition-transform duration-300">
                        1000+
                      </div>
                      <p className="text-gray-300 text-lg">
                        DSA Problems Solved
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        LeetCode, CodeChef, GFG
                      </p>
                    </div>
                  </div>
                  <div className="group">
                    <div className="bg-[#043b3b] rounded-xl p-8 hover:bg-[#054a4d] transition-all duration-300 border border-[#e8c83e]/20 hover:border-[#e8c83e]/50">
                      <div className="text-4xl font-bold text-[#e8c83e] mb-2 group-hover:scale-110 transition-transform duration-300">
                        8.48
                      </div>
                      <p className="text-gray-300 text-lg">CGPA</p>
                      <p className="text-sm text-gray-400 mt-2">
                        RCOEM, Nagpur
                      </p>
                    </div>
                  </div>
                  <div className="group">
                    <div className="bg-[#043b3b] rounded-xl p-8 hover:bg-[#054a4d] transition-all duration-300 border border-[#e8c83e]/20 hover:border-[#e8c83e]/50">
                      <div className="text-4xl font-bold text-[#e8c83e] mb-2 group-hover:scale-110 transition-transform duration-300">
                        3+
                      </div>
                      <p className="text-gray-300 text-lg">Live Projects</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Full-Stack Applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="portfolio" className="bg-[#032628] py-20 px-6 lg:px-24 overflow-hidden min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-[#e8c83e]/10 text-[#e8c83e] rounded-full text-sm font-semibold border border-[#e8c83e]/20">
                    Portfolio Highlights
                  </span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
                  Featured <span className="text-[#e8c83e]">Projects</span>
                </h2>
                <div className="w-24 h-1 mx-auto mb-6 bg-[#e8c83e]"></div>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                  Building impactful solutions with cutting-edge technologies.
                  Each project represents real-world problems solved with
                  scalable, production-ready code.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {projects.map((project, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveProject(idx)}
                    className={`group px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeProject === idx
                        ? "bg-[#e8c83e] text-[#032628] shadow-lg shadow-[#e8c83e]/30"
                        : "bg-[#043b3b] text-gray-300 hover:bg-[#054a4d] border border-[#e8c83e]/20"
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{project.image}</span>
                      <span className="hidden sm:inline">{project.title}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="relative">
                <div
                  className={`absolute inset-0  ${currentProject.bgGradient} rounded-3xl blur-3xl opacity-30`}
                ></div>

                <div className="relative bg-[#043b3b] rounded-3xl overflow-hidden border border-[#e8c83e]/30 shadow-2xl">
                  <div className={`h-2  ${currentProject.gradient}`}></div>

                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-5 gap-8">
                      <div className="lg:col-span-3 space-y-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-4 rounded-2xl  ${currentProject.gradient} text-white shadow-lg`}
                          >
                            {currentProject.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                                {currentProject.title}
                              </h3>
                            </div>
                            <p className="text-[#e8c83e] text-lg font-medium mb-2">
                              {currentProject.tagline}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {currentProject.duration}
                              </span>
                              <span className="px-3 py-1 bg-[#032628] rounded-full border border-[#e8c83e]/20 text-[#e8c83e]">
                                {currentProject.category}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                          {currentProject.description}
                        </p>

                        <div className="bg-[#032628] rounded-xl p-6 border-l-4 border-[#e8c83e]">
                          <div className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-[#e8c83e]  mt-1" />
                            <div>
                              <h4 className="text-[#e8c83e] font-semibold mb-2">
                                Impact & Results
                              </h4>
                              <p className="text-gray-300 leading-relaxed">
                                {currentProject.impact}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {currentProject.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-[#032628] rounded-xl p-5 border border-[#e8c83e]/20 hover:border-[#e8c83e]/50 transition-all duration-300"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className={metric.color}>
                                  {metric.icon}
                                </div>
                                <span className="text-sm font-medium text-gray-400">
                                  {metric.label}
                                </span>
                              </div>
                              <div className="text-3xl font-bold text-white">
                                {metric.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-[#e8c83e]" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {currentProject.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 bg-[#032628] text-gray-300 rounded-lg border border-[#e8c83e]/20 hover:border-[#e8c83e]/50 hover:text-[#e8c83e] transition-all duration-300 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                          <a
                            href={currentProject.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-8 py-4 bg-[#e8c83e] text-[#032628] rounded-xl font-bold hover:bg-[#f5d84e] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#e8c83e]/30"
                          >
                            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            View Live Project
                          </a>
                          <a
                            href={currentProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-8 py-4 bg-[#032628] text-[#e8c83e] rounded-xl font-bold border-2 border-[#e8c83e]/30 hover:border-[#e8c83e] transition-all duration-300 hover:scale-105"
                          >
                            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            View Code
                          </a>
                        </div>
                      </div>

                      <div className="lg:col-span-2 bg-[#032628] rounded-2xl p-6 lg:p-8">
                        <h4 className="text-xl font-bold text-[#e8c83e] mb-6 flex items-center gap-2">
                          <Award className="w-6 h-6" />
                          Key Features
                        </h4>
                        <div className="space-y-5">
                          {currentProject.features.map((feature, i) => (
                            <div
                              key={i}
                              className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[#043b3b] transition-all duration-300 border border-transparent hover:border-[#e8c83e]/20"
                            >
                              <div className="p-2 rounded-lg bg-[#043b3b] text-[#e8c83e] group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                              </div>
                              <div className="flex-1">
                                <h5 className="font-semibold text-white mb-1 group-hover:text-[#e8c83e] transition-colors">
                                  {feature.title}
                                </h5>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                  {feature.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
          <div className="bg-[#032628] min-h-screen">
            {/* EXPERIENCE SECTION */}
            <section className="text-white py-20 px-6 md:px-20 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-700"></div>

              <div className="max-w-6xl mx-auto relative z-10">
                {/* Title */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                    <div className="w-12 h-[2px] bg-linear-to-r from-transparent to-[#e8c83e]"></div>
                    <h2 className="text-[#e8c83e] text-sm uppercase tracking-[4px] font-semibold flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Experience
                    </h2>
                    <div className="w-12 h-[2px] bg-linear-to-l from-transparent to-[#e8c83e]"></div>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-center md:text-left bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Professional{" "}
                    <span className="bg-linear-to-r from-[#e8c83e] to-[#f4d671] bg-clip-text text-transparent">
                      Journey
                    </span>
                  </h3>
                </div>

                {/* Timeline */}
                <div className="relative">
                  <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-linear-to-b from-[#e8c83e] via-amber-500/50 to-transparent"></div>

                  <div className="space-y-12">
                    {/* Experience Card */}
                    <div
                      className="relative"
                      onMouseEnter={() => setHoveredExp(1)}
                      onMouseLeave={() => setHoveredExp(null)}
                    >
                      {/* Timeline dot */}
                      <div
                        className="hidden md:block absolute -left-[7px] top-8 w-4 h-4 bg-[#e8c83e] rounded-full border-4 border-gray-900 z-10 transition-transform duration-300"
                        style={{
                          transform: hoveredExp === 1 ? "scale(1.3)" : "scale(1)",
                        }}
                      >
                        <div className="absolute inset-0 bg-[#e8c83e] rounded-full animate-ping opacity-75"></div>
                      </div>

                      <div className="md:ml-12 group">
                        <div
                          className={`bg-linear-to-r from-[#032628]/80 to-[#021819]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl transition-all duration-500 ${hoveredExp === 1
                              ? "shadow-amber-500/20 border-[#e8c83e]/50 translate-x-2"
                              : ""
                            }`}
                        >
                          {/* Accent corner */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-r from-[#e8c83e]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          <div className="relative">
                            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                              <div>
                                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#e8c83e] transition-colors duration-300">
                                  Full-Stack Intern
                                </h4>
                                <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>Wooferz Innovation</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#e8c83e] text-sm font-medium">
                                  <Calendar className="w-4 h-4" />
                                  <span>May 2024 – Aug 2024</span>
                                </div>
                              </div>
                              <div className="bg-[#e8c83e]/10 px-4 py-2 rounded-full border border-[#e8c83e]/30">
                                <span className="text-[#e8c83e] text-sm font-semibold">
                                  4 months
                                </span>
                              </div>
                            </div>

                            <div className="w-16 h-[2px] bg-linear-to-r from-[#e8c83e] to-transparent mb-4"></div>

                            <ul className="space-y-3">
                              {[
                                "Developed platforms to help NGOs manage operations efficiently and small businesses sell products online, reducing manual effort and improving workflow.",
                                "Optimized backend APIs and frontend components for faster response times and reliable data handling.",
                                "Enhanced UI/UX to simplify interactions, improving user engagement and satisfaction.",
                              ].map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-gray-300 text-[15px] leading-relaxed group/item"
                                >
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#e8c83e] shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                                  <span className="group-hover/item:text-white transition-colors duration-300">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 mt-6">
                              {[
                                "React.js",
                                "Node.js",
                                "Express.js",
                                "MongoDB",
                                "GitHub",
                                "Tailwind CSS",
                              ].map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50 hover:border-[#e8c83e]/50 hover:bg-[#e8c83e]/10 transition-all duration-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* EDUCATION SECTION */}
            <section className="text-white py-20 px-6 md:px-20 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-20 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

              <div className="max-w-6xl mx-auto relative z-10">
                {/* Title */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                    <div className="w-12 h-[2px] bg-linear-to-r from-transparent to-[#e8c83e]"></div>
                    <h2 className="text-[#e8c83e] text-sm uppercase tracking-[4px] font-semibold flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      Education
                    </h2>
                    <div className="w-12 h-[2px] bg-linear-to-l from-transparent to-[#e8c83e]"></div>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-center md:text-left bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Academic{" "}
                    <span className="bg-linear-to-r from-[#e8c83e] to-[#f4d671] bg-clip-text text-transparent">
                      Background
                    </span>
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  {/* College Card */}
                  <div
                    className="group relative"
                    onMouseEnter={() => setHoveredEdu(1)}
                    onMouseLeave={() => setHoveredEdu(null)}
                  >
                    <div
                      className={`bg-linear-to-br from-[#032628]/80 to-[#021819]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl transition-all duration-500 h-full ${hoveredEdu === 1
                          ? "shadow-amber-500/30 border-[#e8c83e]/50 -translate-y-2"
                          : ""
                        }`}
                    >
                      <div className="absolute -top-6 left-8 w-12 h-12 bg-linear-to-br from-[#e8c83e] to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-6 h-6 text-gray-900" />
                      </div>

                      <div className="mt-4 relative">
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#e8c83e] transition-colors duration-300 leading-tight">
                          B.Tech in Electronics and Computer Science
                        </h4>

                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>Shri Ramdeobaba College of Engineering, Nagpur</span>
                        </div>

                        <div className="flex items-center gap-2 text-[#e8c83e] text-sm font-medium mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>Aug 2022 – July 2026</span>
                        </div>

                        <div className="w-12 h-[2px] bg-linear-to-l from-[#e8c83e] to-transparent mb-4"></div>

                        <p className="text-gray-300 text-[15px] leading-relaxed">
                          <span className="text-gray-400 font-medium">
                            CGPA:
                          </span>{" "}
                          8.48
                          <br />
                          <span className="text-gray-400 font-medium">
                            Relevant Coursework:
                          </span>{" "}
                          Data Structures, System Design, Web Development, Computer Networks, Operating Systems.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certifications & Achievements */}
                  <div
                    className="group relative"
                    onMouseEnter={() => setHoveredEdu(2)}
                    onMouseLeave={() => setHoveredEdu(null)}
                  >
                    <div
                      className={`bg-linear-to-br from-[#032628]/80 to-[#021819]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl transition-all duration-500 h-full ${hoveredEdu === 2
                          ? "shadow-amber-500/30 border-[#e8c83e]/50 -translate-y-2"
                          : ""
                        }`}
                    >
                      <div className="absolute -top-6 left-8 w-12 h-12 bg-linear-to-br from-[#e8c83e] to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-6 h-6 text-gray-900" />
                      </div>

                      <div className="mt-4 relative">
                        <h4 className="text-xl font-bold text-white mb-5 group-hover:text-[#e8c83e] transition-colors duration-300">
                          Certifications & Achievements
                        </h4>

                        <ul className="space-y-4">
                          {[
                            {
                              icon: Code,
                              text: "Cisco Certified: Networking Basics, Network Support & Security, Python Essentials 1",
                            },
                            {
                              icon: Award,
                              text: "Selected for Smart India Hackathon (College Level) – Proposed ML-based GLOF Risk Prediction & Dynamic Traffic Rerouting solution",
                            },
                            {
                              icon: TrendingUp,
                              text: "LeetCode Rating: 1543 (Global Rank: 257K / 789K)",
                            },
                            {
                              icon: Briefcase,
                              text: "Solved 1000+ DSA problems across LeetCode, GFG, CodeChef & HackerRank",
                            },
                          ].map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-300 text-[15px] leading-relaxed group/item"
                            >
                              <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#e8c83e]/10 border border-[#e8c83e]/30 flex items-center justify-center shrink-0 group-hover/item:bg-[#e8c83e]/20 group-hover/item:border-[#e8c83e]/50 transition-all duration-300">
                                <item.icon className="w-4 h-4 text-[#e8c83e]" />
                              </div>
                              <span className="group-hover/item:text-white transition-colors duration-300 pt-1">
                                {item.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <section id="contact" className="bg-[#032628] py-20 px-6 lg:px-24 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto w-full">
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-[#e8c83e]/10 text-[#e8c83e] rounded-full text-sm font-semibold border border-[#e8c83e]/20">
                    Get In Touch
                  </span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
                  Let's <span className="text-[#e8c83e]">Connect</span>
                </h2>
                <div className="w-24 h-1 mx-auto mb-6 bg-[#e8c83e]"></div>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Email Card */}
                <a
                  href="mailto:kshitij.halmare1@gmail.com"
                  className="group bg-[#043b3b] rounded-2xl p-8 border border-[#e8c83e]/20 hover:border-[#e8c83e]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#e8c83e]/10 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#e8c83e]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#e8c83e]/20 transition-all duration-300">
                      <Mail className="w-8 h-8 text-[#e8c83e] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e8c83e] transition-colors duration-300">
                      Email
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">Drop me a line</p>
                    <p className="text-[#e8c83e] font-medium break-all">
                      kshitij.halmare1@gmail.com
                    </p>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/in/kshitij-halmare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#043b3b] rounded-2xl p-8 border border-[#e8c83e]/20 hover:border-[#e8c83e]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#e8c83e]/10 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#e8c83e]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#e8c83e]/20 transition-all duration-300">
                      <Linkedin className="w-8 h-8 text-[#e8c83e] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e8c83e] transition-colors duration-300">
                      LinkedIn
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">Let's connect professionally</p>
                    <p className="text-[#e8c83e] font-medium">
                      @kshitij-halmare
                    </p>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href="https://github.com/Kshitij-Halmare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#043b3b] rounded-2xl p-8 border border-[#e8c83e]/20 hover:border-[#e8c83e]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#e8c83e]/10 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#e8c83e]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#e8c83e]/20 transition-all duration-300">
                      <Github className="w-8 h-8 text-[#e8c83e] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e8c83e] transition-colors duration-300">
                      GitHub
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">Check out my code</p>
                    <p className="text-[#e8c83e] font-medium">
                      @Kshitij-Halmare
                    </p>
                  </div>
                </a>
              </div>

              {/* Additional Contact Info */}
              <div className="mt-16 text-center">
                <div className="bg-[#043b3b] rounded-2xl p-8 border border-[#e8c83e]/20 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Currently Available for
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-6 py-3 bg-[#032628] text-[#e8c83e] rounded-full border border-[#e8c83e]/30 font-medium">
                      Full-Time Opportunities
                    </span>
                    <span className="px-6 py-3 bg-[#032628] text-[#e8c83e] rounded-full border border-[#e8c83e]/30 font-medium">
                      Freelance Projects
                    </span>
                    <span className="px-6 py-3 bg-[#032628] text-[#e8c83e] rounded-full border border-[#e8c83e]/30 font-medium">
                      Collaborations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#021819] border-t border-gray-800/50 py-8 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                  © 2025 Kshitij Halmare. All rights reserved.
                </div>
                <div className="flex gap-6">
                  <a
                    href="mailto:kshitij.halmare1@gmail.com"
                    className="text-gray-400 hover:text-[#e8c83e] transition-colors duration-300"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kshitij-halmare/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#e8c83e] transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/Kshitij-Halmare/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#e8c83e] transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
            </section>
          </div>

        </main>
      </div>
    </>
  );
}
export default App;