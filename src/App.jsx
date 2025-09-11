import { useEffect, useState } from "react";
import { Globe, PawPrint, GraduationCap, Scale, ChevronDown, Mail, ExternalLink, Github, Linkedin, Code, Cpu, Zap, CircuitBoard, Brain, Terminal, Database, Smartphone, ShieldCheck, Gamepad, Phone } from "lucide-react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Zeynep Dellal - Software Engineer";

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "about",
        "education",
        "experience",
        "projects",
        "skills",
        "languages",
        "hobbies",
        "contact"
      ];

      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const TechIcon = ({ name, color }) => {
    const icons = {
      Python: <Code className={`w-8 h-8 ${color}`} />, 
      React: <Code className={`w-8 h-8 ${color}`} />, 
      JavaScript: <Code className={`w-8 h-8 ${color}`} />, 
      Unity: <Code className={`w-8 h-8 ${color}`} />, 
      Android: <Code className={`w-8 h-8 ${color}`} />, 
      ESP32: <Code className={`w-8 h-8 ${color}`} />
    };
    return icons[name] || <Code className={`w-8 h-8 ${color}`} />;
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white text-gray-900 shadow-md" : "bg-white/70 backdrop-blur text-gray-900"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-900">ZD</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {["About","Education","Experience","Projects","Skills","Languages","Hobbies","Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-black transition-colors font-medium ${
                    activeSection === item.toLowerCase() ? "text-black" : "text-gray-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Social Links + Mobile Menu Icon */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <a href="https://github.com/zedyjy" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/zeynep-dellal-961764201/" className="text-gray-700 hover:text-black transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
              <button className="md:hidden text-3xl text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-6 py-4 shadow space-y-2 transition-all duration-300">
            {["About","Education","Experience","Projects","Skills","Languages","Hobbies","Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 font-medium text-gray-800 hover:text-black ${
                  activeSection === item.toLowerCase() ? "text-black" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen pt-32 flex items-center justify-center relative overflow-hidden">
        {/* Soft, neutral blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-300 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gray-500/40 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center z-10 px-6 max-w-6xl mx-auto">
          {/* Profile Picture */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-400 rounded-full blur-xl opacity-40 animate-pulse" />
              <img
                src={`${import.meta.env.BASE_URL}DSCF0747.JPG`}
                alt="Zeynep Dellal"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <div className="mb-6 animate-fade-in">
              <p className="text-gray-600 text-lg mb-2 tracking-wider">Hello, I'm</p>
              <h1 className="text-6xl md:text-7xl font-black mb-4 text-gray-900">
                Zeynep Dellal
              </h1>
              <div className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
                Software Engineer
              </div>
              <div className="flex justify-center md:justify-start space-x-8 mb-8">
                <div className="flex items-center space-x-2 text-gray-700">
                  <CircuitBoard size={24} />
                  <span className="text-lg">Embedded Systems</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Brain size={24} />
                  <span className="text-lg">AI & ML</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Scale size={24} />
                  <span className="text-lg">AI Ethics</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="mailto:zeynep.dellal@gmail.com"
                className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                title="If this doesn't open your email app, you can copy: zeynep.dellal@gmail.com"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Zeynep-Dellal-Resume.pdf`}
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-10">
              <a href="https://github.com/zedyjy" className="text-gray-700 hover:text-black transition-colors transform hover:scale-125">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/zeynep-dellal-961764201/" className="text-gray-700 hover:text-black transition-colors transform hover:scale-125">
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-700 hover:text-black transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              I recently graduated with a degree in Computer Science (May 2025) from Bilkent University and love working on projects that connect hardware and software. 
              I'm especially interested in areas like embedded systems and AI, but I'm open to working in any area where I can learn and contribute.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              I thrive on tackling complex challenges, whether it's optimizing IoT communication protocols, developing machine learning models, 
              or creating full-stack applications. My goal is to build technology that makes a meaningful impact.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Zap size={20} />
                <span>Always Learning</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Code size={20} />
                <span>Problem Solver</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{
              icon: <CircuitBoard className="text-gray-700 mb-3" size={32} />,
              title: 'Embedded Systems',
              desc: 'IoT, ESP32, Real-time Systems',
              tech: ["ESP32"]
            },{
              icon: <Brain className="text-gray-700 mb-3" size={32} />,
              title: 'AI & Machine Learning',
              desc: 'PyTorch, Computer Vision, NLP',
              tech: ["Python"]
            },{
              icon: <Terminal className="text-gray-700 mb-3" size={32} />,
              title: 'Backend Development',
              desc: 'Python, FastAPI, Django',
              tech: ["Python"]
            },{
              icon: <Smartphone className="text-gray-700 mb-3" size={32} />,
              title: 'Mobile & Web',
              desc: 'React Native, React.js',
              tech: ["React","JavaScript"]
            }].map((card, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-md transition-transform hover:scale-[1.01]">
                {card.icon}
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
                <div className="flex space-x-2 mt-3">
                  {card.tech.map((t) => (
                    <TechIcon key={t} name={t} color="text-gray-700" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Education
        </h2>
        <div className="max-w-6xl mx-auto space-y-8">
          {/* University */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
              <div className="flex items-start space-x-4">
                <div className="text-gray-700">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-800 text-lg sm:text-xl font-medium">Bilkent University</p>
                  <p className="text-gray-600">Ankara, Turkey</p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-gray-700 font-medium text-base sm:text-lg">2020 - 2025</span>
                <p className="text-gray-800 font-semibold mt-1">Recently Graduated</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-gray-900 font-semibold mb-3 flex items-center">
                  <Brain className="text-gray-700 mr-2" size={20} />
                  Significant Extra Coursework
                </h4>
                <div className="space-y-2">
                  {[
                    "Machine Learning from Ayşegül Dündar Boral",
                    "Data Privacy from Sinem Sav",
                    "Application Lifecycle Management from Eray Tüzün",
                    "Software Engineering Project Management from Onur Karabulut",
                  ].map((course, index) => (
                    <div key={index} className="bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm border border-gray-200">
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Computer Science","Machine Learning","Software Engineering","AI Ethics","Research"].map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* High School */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-gray-700">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Kocaeli Fen Lisesi</h3>
                  <p className="text-gray-800 text-xl font-medium">Kocaeli, Turkey</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-gray-700 font-medium text-lg">2016 - 2020</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">
                Graduated with a GPA of 91/100. Achieved a national ranking of 12.540 in the 2020 YKS, placing in the top 0.4% among approximately 2.4 million candidates. Additionally ranked 2666 in the YDT Language Exam.    
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Experience
        </h2>
        <div className="space-y-8">
          {[
            { role: "Embedded Systems Intern", company: "Karel", period: "August 2024 - September 2024", description: "Developed IoT communication systems using ESP32 microcontrollers. Optimized route processing algorithms and implemented real-time data transmission protocols for industrial applications.", tech: ["ESP32","C/C++","IoT Protocols","Real-time Systems"], icon: <CircuitBoard size={24} />, techIcons: [] },
            { role: "Undergraduate Assistant", company: "Bilkent University", period: "October 2023 - May 2024", description: "Assisted Prof. Robin Ann Downey with administrative tasks and contributed to organizing the Responsible ARTIFICIAL INTELLIGENCE AWARDS in collaboration with MATHWORKS.", tech: ["Event Organization","Academic Support","Communication"], icon: <GraduationCap size={24} />, techIcons: [] },
            { role: "Game Developer", company: "FoxyCode Studios", period: "September 2023 – January 2024", description: "Built comprehensive gameplay systems in Unity with advanced animation pipelines. Implemented game mechanics, UI systems, and performance optimization for mobile platforms.", tech: ["Unity","C#","Game Development","Mobile Optimization"], icon: <Code size={24} />, techIcons: [] },
            { role: "Backend Developer Intern", company: "Medyasoft", period: "July 2023 - August 2023", description: "Developed backend systems and plugin integrations using C# and ASP.NET. Worked on API development and database optimization for enterprise applications.", tech: ["C#","ASP.NET","API Development","Database Design"], icon: <Database size={24} />, techIcons: [] },
            { role: "Android Developer", company: "BenzinLitre", period: "November 2021 – November 2022", description: "Implemented 15+ new features using MVVM architecture. Focused on performance optimization, user experience improvements, and scalable code architecture.", tech: ["Android","Java","MVVM","Mobile Development"], icon: <Smartphone size={24} />, techIcons: [] }
          ].map((exp, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                <div className="flex items-start space-x-4">
                  <div className="text-gray-700">{exp.icon}</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-gray-800 text-lg">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 text-sm sm:text-base">
                  <span className="text-gray-700 font-medium">{exp.period}</span>
                  <div className="flex flex-wrap space-x-2">
                    {exp.techIcons.map((tech, techIndex) => (
                      <TechIcon key={techIndex} name={tech} color="text-gray-700" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Veritas News Platform", description: "Cross-platform news application with AI-driven content curation. Built scalable backend with FastAPI and Django, featuring intelligent content filtering and user personalization.", tech: ["React Native","FastAPI","Django","AI/ML"], icon: <Smartphone className="text-gray-700" size={24} />, techIcons: ["React","Python"], link: "https://veritasroadmap.netlify.app/" },
            { title: "DualReview AI", description: "Intelligent GitHub bot leveraging GPT-4o and DeepSeek for automated code reviews. Provides detailed analysis, security checks, and optimization suggestions for pull requests.", tech: ["Python","GPT-4","GitHub API","NLP"], icon: <Terminal className="text-gray-700" size={24} />, techIcons: ["Python"], link: "https://github.com/zedyjy/CS453-Project" },
            { title: "Aircraft Detection System", description: "Advanced computer vision system achieving 92% accuracy in aircraft detection using CNNs, ResNet, and YOLOv8 on satellite imagery. Implemented real-time processing pipeline for defense applications.", tech: ["PyTorch","YOLOv8","Computer Vision","CNNs"], icon: <Brain className="text-gray-700" size={24} />, techIcons: ["Python"], link: "https://github.com/zedyjy/Aircraft-Detection-Project" },
            { title: "PetLink - Pet Adoption Website ", description: "Led frontend development using React.JS for a pet adoption platform. Designed and implemented responsive UI components, integrated RESTful APIs for dynamic pet listings, user authentication, and admin management. Deployed using Docker and connected to a SQL-based backend via Flask.", tech: ["React.JS","TypeScript","Flask","SQL","Docker"], icon: <PawPrint className="text-gray-700" size={24} />, techIcons: ["React","Docker"], link: "https://github.com/Pet-Link/PetLink" },
            { title: "Labyrinth and Adventure Game - Hobby Project", description: "A 2D adventure-maze game featuring a pixelated cat navigating through dynamic levels. Developed using Java and LibGDX, showcasing object-oriented design and game development skills.", tech: ["Java","LibGDX","Game Development"], icon: <Gamepad className="text-gray-700" size={24} />, techIcons: ["Java"], link: "https://github.com/zedyjy/Bubble-Pop-Labyrinth" },
            { title: "Distortion Techniques for Profile Matching", description: "A research project analyzing distortion methods to mitigate profile matching attacks in online social networks. Implemented and compared various techniques to enhance user privacy.", tech: ["Python","Data Analysis","Privacy"], icon: <ShieldCheck className="text-gray-700" size={24} />, techIcons: ["Python"], link: "https://github.com/zedyjy/Distortion-Techniques-Profile-Matching" }, 
          ].map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300 group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {project.icon}
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2 ml-4">
                  {project.techIcons.map((tech, techIndex) => (
                    <TechIcon key={techIndex} name={tech} color="text-gray-700" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { category: "Embedded & IoT Systems", skills: [ { name: "C", icon: "C" }, { name: "C++", icon: "C++" }, { name: "ESP32", icon: "ESP32" }, { name: "Zephyr RTOS", icon: "RTOS" }, { name: "ESP-IDF", icon: "ESP32" }, { name: "Vivado", icon: "FPGA" }, { name: "SystemVerilog", icon: "FPGA" }, { name: "BME280", icon: "Sensor" } ], icon: <CircuitBoard className="text-gray-700" size={32} /> },
            { category: "AI & Machine Learning", skills: [ { name: "Python", icon: "Python" }, { name: "PyTorch", icon: "Python" }, { name: "Computer Vision", icon: "Python" }, { name: "Hugging Face Transformers", icon: "AI" }, { name: "OpenAI APIs", icon: "AI" }, { name: "CNNs", icon: "AI" }, { name: "YOLOv8", icon: "AI" }, { name: "ResNet", icon: "AI" }, { name: "Jupyter Notebook", icon: "Notebook" } ], icon: <Brain className="text-gray-700" size={32} /> },
            { category: "Web & App Development", skills: [ { name: "HTML/CSS", icon: "HTML" }, { name: "React.js", icon: "React" }, { name: "React Native", icon: "React" }, { name: "Node.js", icon: "Node" }, { name: "Flask", icon: "Python" }, { name: "FastAPI", icon: "Python" }, { name: "Django", icon: "Python" }, { name: "TypeScript", icon: "JavaScript" } ], icon: <Smartphone className="text-gray-700" size={32} /> },
          ].map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gray-50 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-between border border-gray-200">
                    <span>{skill.name}</span>
                    <TechIcon name={skill.icon} color="text-gray-700" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Languages
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-xl mx-auto">
          {[{ name: "English", level: "Proficient" }, { name: "Turkish", level: "Native" }].map((lang, index) => (
            <div key={index} className="bg-white border border-gray-200 p-4 rounded-xl flex items-center justify-between hover:shadow-md transition-all duration-300 w-full sm:w-[20rem] md:flex-1">
              <div className="flex space-x-3">
                <Globe className="text-gray-700" size={24} />
                <span className="text-lg font-medium text-gray-900">{lang.name}</span>
              </div>
              <span className="text-sm text-gray-600 italic">{lang.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies & Interests Section */}
      <section id="hobbies" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Hobbies & Interests
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-center">
              <p>
                Outside of tech, I’m a big fan of visual storytelling—whether through film, TV, or photography. I enjoy exploring how stories are told across different mediums and cultures.
              </p>
              <p>
                I also created a small photography portfolio to share some of my work:
              </p>
              <a href="https://zedyjy.github.io/galleria-souvlaki/" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-800 transition">
                View Photography Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Contact Me
        </h2>
        <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300 max-w-6xl mx-auto space-y-8 text-gray-700 text-lg">
          {/* Phone & Email */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-32">
            <div className="flex items-center space-x-3">
              <Phone className="text-gray-700" size={24} />
              <span>+90 553 207 10 42</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-gray-700" size={24} />
              <span>zeynep.dellal@gmail.com</span>
            </div>
          </div>
          {/* GitHub & LinkedIn */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-32">
            <div className="flex items-center space-x-3">
              <Github className="text-gray-700" size={24} />
              <a href="https://github.com/zedyjy" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/zedyjy</a>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="text-gray-700" size={24} />
              <a href="https://www.linkedin.com/in/zeynep-dellal-961764201/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/zeynep-dellal</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-4 sm:space-y-0 mb-6">
            <a href="mailto:zeynep.dellal@gmail.com" className="flex items-center justify-center space-x-2 text-gray-700 hover:text-black transition-colors">
              <Mail size={20} />
              <span>zeynep.dellal@gmail.com</span>
            </a>
            <a href="https://github.com/zedyjy" className="flex items-center justify-center space-x-2 text-gray-700 hover:text-black transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/zeynep-dellal-961764201/" className="flex items-center justify-center space-x-2 text-gray-700 hover:text-black transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="text-gray-600">Built by Zeynep Dellal © 2025</p>
        </div>
      </footer>
    </div>
  );
}
