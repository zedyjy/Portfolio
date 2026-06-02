import { useEffect, useState } from "react";
import { Globe, PawPrint, GraduationCap, ChevronDown, Mail, ExternalLink, Github, Linkedin, Code, Zap, CircuitBoard, Brain, Terminal, Database, Smartphone, ShieldCheck, Phone } from "lucide-react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Zeynep Dellal - Embedded AI Engineer";

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
      Python: <Code className={`w-4 h-4 ${color}`} />, 
      React: <Code className={`w-4 h-4 ${color}`} />, 
      JavaScript: <Code className={`w-4 h-4 ${color}`} />, 
      Unity: <Code className={`w-4 h-4 ${color}`} />, 
      Android: <Code className={`w-4 h-4 ${color}`} />, 
      ESP32: <Code className={`w-4 h-4 ${color}`} />
    };
    return icons[name] || <Code className={`w-4 h-4 ${color}`} />;
  };

  return (
    <div className="bg-[#f4f1ea] text-zinc-800 min-h-screen antialiased">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#f4f1ea]/95 text-zinc-950 border-b border-zinc-900/10 backdrop-blur-xl" : "bg-[#f4f1ea]/80 backdrop-blur-xl text-zinc-950 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2.5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl font-black tracking-[-0.08em] border border-zinc-900 bg-zinc-950 text-[#f4f1ea] px-3 py-2">ZD</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
              {["About","Education","Experience","Projects","Skills","Languages","Hobbies","Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-zinc-950 transition-colors text-sm tracking-wide font-medium ${
                    activeSection === item.toLowerCase() ? "text-zinc-950" : "text-zinc-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Social Links + Mobile Menu Icon */}
            <div className="flex items-center space-x-4 md:space-x-5">
              <a href="https://github.com/zedyjy" className="text-zinc-600 hover:text-zinc-950 transition-colors" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/zeynep-dellal-961764201/" className="text-zinc-600 hover:text-zinc-950 transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
              <button className="md:hidden text-3xl text-zinc-700 hover:text-zinc-950" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f4f1ea] border-t border-zinc-900/10 px-6 py-4 space-y-2 transition-all duration-300">
            {["About","Education","Experience","Projects","Skills","Languages","Hobbies","Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 font-medium text-zinc-700 hover:text-zinc-950 ${
                  activeSection === item.toLowerCase() ? "text-zinc-950" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen pt-28 flex items-center justify-center relative overflow-hidden border-b border-zinc-900/10">
        {/* Soft, neutral blobs */}
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#d8c7ad] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[#c7cfbf] rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-[#d5d0c8] rounded-full blur-3xl" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center z-10 px-6 lg:px-10 max-w-7xl mx-auto">
          {/* Profile Picture */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 border border-zinc-900/20 rounded-[2.5rem]" />
              <img
                src={`${import.meta.env.BASE_URL}DSCF0747.JPG`}
                alt="Zeynep Dellal"
                className="relative w-80 h-96 object-cover rounded-[2rem] border border-zinc-900/20 transition-all duration-500"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <div className="mb-6 animate-fade-in">
              <p className="text-zinc-500 text-sm mb-4 tracking-[0.28em]">Hello, I'm</p>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.08em] leading-[0.88] mb-6 text-zinc-950">
                Zeynep Dellal
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 py-4 mb-8 border-y border-zinc-900/15">
                <div className="flex items-center space-x-2 text-zinc-700">
                  <CircuitBoard size={24} />
                  <span className="text-lg">Embedded Systems</span>
                </div>
                <div className="flex items-center space-x-2 text-zinc-700">
                  <Brain size={24} />
                  <span className="text-lg">AI & ML</span>
                </div>
                <div className="flex items-center space-x-2 text-zinc-700">
                  <Brain size={24} />
                  <span className="text-lg">AI Ethics</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="mailto:zeynep.dellal@gmail.com"
                className="bg-zinc-950 text-[#f4f1ea] hover:bg-zinc-800 px-7 py-3 rounded-none font-semibold transition-colors flex items-center space-x-2"
                title="If this doesn't open your email app, you can copy: zeynep.dellal@gmail.com"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Zeynep-Dellal-Resume.pdf`}
                className="border border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-[#f4f1ea] px-7 py-3 rounded-none font-semibold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/zedyjy" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/zeynep-dellal-961764201/" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-zinc-600 hover:text-zinc-950 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto border-t border-zinc-900/10">
        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.07em] text-left mb-14 text-zinc-950">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed tracking-[-0.02em]">
              I am pursuing a Master of Engineering in Artificial Intelligence for Smart Sensors and Actuators at Technische Hochschule Deggendorf. 
              With a background in computer science, I enjoy building systems where embedded hardware, sensor data, and machine learning work together.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-zinc-700">
                <Zap size={20} />
                <span>Always Learning</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-700">
                <Code size={20} />
                <span>Problem Solver</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-900/15 border border-zinc-900/15">
            {[{
              icon: <CircuitBoard className="text-zinc-700 mb-3" size={32} />,
              title: 'Embedded Systems',
              desc: 'IoT, ESP32, Raspberry Pi, RTOS',
              tech: ["ESP32"]
            },{
              icon: <Brain className="text-zinc-700 mb-3" size={32} />,
              title: 'Artificial Intelligence & Machine Learning',
              desc: 'PyTorch, TensorFlow, Computer Vision, Scikit-learn, LLMs',
              tech: ["Python"]
            },{
              icon: <Terminal className="text-zinc-700 mb-3" size={32} />,
              title: 'Backend Development',
              desc: 'FastAPI, Django, PostgreSQL',
              tech: ["Python"]
            },{
              icon: <Smartphone className="text-zinc-700 mb-3" size={32} />,
              title: 'Mobile & Web',
              desc: 'React Native, React.js, TypeScript',
              tech: ["React","JavaScript"]
            }].map((card, i) => (
              <div key={i} className="bg-[#f4f1ea] p-6 border-0 hover:bg-white/60 transition-colors">
                {card.icon}
                <h3 className="font-semibold text-zinc-950 mb-2">{card.title}</h3>
                <p className="text-sm text-zinc-600">{card.desc}</p>
                <div className="flex space-x-2 mt-3">
                  {card.tech.map((t) => (
                    <TechIcon key={t} name={t} color="text-zinc-700" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto border-t border-zinc-900/10">
        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.07em] text-left mb-14 text-zinc-950">
          Education
        </h2>
        <div className="max-w-7xl mx-auto divide-y divide-zinc-900/15 border-y border-zinc-900/15">
          {/* Master's Degree */}
          <div className="bg-transparent py-8 px-0 sm:px-4 hover:bg-white/45 transition-colors">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="text-zinc-700">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.04em] text-zinc-950 mb-2">Master of Engineering in Artificial Intelligence for Smart Sensors and Actuators</h3>
                  <p className="text-zinc-800 text-lg sm:text-xl font-medium">Technische Hochschule Deggendorf</p>
                  <p className="text-zinc-600">Cham, Germany</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-zinc-700 font-medium text-base sm:text-lg">Mar 2026 - Present</span>
                <p className="text-zinc-800 font-semibold mt-1">Master's Student</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Artificial Intelligence","Smart Sensors","Actuators","Embedded AI","Sensor Fusion"].map((tag, index) => (
                <span key={index} className="bg-transparent text-zinc-700 px-3 py-1 rounded-none text-xs tracking-wide font-medium border border-zinc-900/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-transparent py-8 px-0 sm:px-4 hover:bg-white/45 transition-colors">
            <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
              <div className="flex items-start space-x-4">
                <div className="text-zinc-700">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.04em] text-zinc-950 mb-2">Bachelor of Science in Computer Engineering</h3>
                  <p className="text-zinc-800 text-lg sm:text-xl font-medium">Bilkent University</p>
                  <p className="text-zinc-600">Ankara, Turkey</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-zinc-700 font-medium text-base sm:text-lg">Sep 2020 - Jun 2025</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-zinc-950 font-semibold mb-3 flex items-center">
                  <Brain className="text-zinc-700 mr-2" size={20} />
                  Significant Extra Coursework
                </h4>
                <div className="space-y-2">
                  {[
                    "Machine Learning from Ayşegül Dündar Boral",
                    "Data Privacy from Sinem Sav",
                    "Application Lifecycle Management from Eray Tüzün",
                    "Software Engineering Project Management from Onur Karabulut",
                  ].map((course, index) => (
                    <div key={index} className="bg-transparent text-zinc-700 px-3 py-2 text-sm border-l border-zinc-900/20">
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Computer Engineering","Machine Learning","Software Engineering","AI Ethics","Research"].map((tag, index) => (
                <span key={index} className="bg-transparent text-zinc-700 px-3 py-1 rounded-none text-xs tracking-wide font-medium border border-zinc-900/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto border-t border-zinc-900/10">
        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.07em] text-left mb-14 text-zinc-950">
          Experience
        </h2>
        <div className="space-y-0 divide-y divide-zinc-900/15 border-y border-zinc-900/15">
          {[
            { role: "Embedded Systems Intern", company: "Karel", period: "Aug 2024 - Sep 2024", description: "Contributed to GENTSIS by designing PCBs, integrating sensors, and optimizing ESP32-based IoT communication. Processed and structured 1M+ transport records with Python and MySQL for routing analysis, reducing processing time by 20%.", tech: ["ESP32","PCB Design","Sensors","Python","MySQL"], icon: <CircuitBoard size={24} />, techIcons: [] },
            { role: "Undergraduate Assistant", company: "Bilkent University", period: "Oct 2023 - May 2024", description: "Assisted Prof. Robin Ann Downey in organizing the Responsible Artificial Intelligence Awards with MathWorks and received acknowledgment in her SEFI-2024 publication for this work.", tech: ["Responsible AI","Event Organization","Academic Support","Communication"], icon: <GraduationCap size={24} />, techIcons: [] },
            { role: "Software Developer", company: "FoxyCode Studios", period: "Sep 2023 - Jan 2024", description: "Built and integrated 10+ gameplay mechanics in Unity using C#, including player control, combat, and level systems.", tech: ["Unity","C#","Game Development","Gameplay Systems"], icon: <Code size={24} />, techIcons: [] },
            { role: "Backend Development Intern", company: "Medyasoft", period: "Jun 2023 - Jul 2023", description: "Developed backend modules and APIs using C#, optimizing database logic to improve system performance.", tech: ["C#","ASP.NET MVC","REST APIs","Database Logic"], icon: <Database size={24} />, techIcons: [] },
            { role: "Android Developer", company: "BenzinLitre", period: "Nov 2021 - Nov 2022", description: "Developed and optimized 15+ features in Kotlin and Java using MVVM architecture in Android Studio.", tech: ["Android","Kotlin","Java","MVVM"], icon: <Smartphone size={24} />, techIcons: [] }
          ].map((exp, index) => (
            <div key={index} className="bg-transparent py-8 px-0 sm:px-4 hover:bg-white/45 transition-colors">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                <div className="flex items-start space-x-4">
                  <div className="text-zinc-700">{exp.icon}</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.04em] text-zinc-950">{exp.role}</h3>
                    <p className="text-zinc-800 text-lg">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 text-sm sm:text-base">
                  <span className="text-zinc-700 font-medium">{exp.period}</span>
                  <div className="flex flex-wrap space-x-2">
                    {exp.techIcons.map((tech, techIndex) => (
                      <TechIcon key={techIndex} name={tech} color="text-zinc-700" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-zinc-700 mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-transparent text-zinc-700 px-3 py-1 rounded-none text-xs tracking-wide font-medium border border-zinc-900/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto border-t border-zinc-900/10">
        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.07em] text-left mb-14 text-zinc-950">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-zinc-900/20 border border-zinc-900/20">
          {[
            { title: "Drunkenness Detection System", description: "Multi-sensor driver impairment detection system combining alcohol, eye-tracking, and heart-rate data. Trained an XGBoost model and used SHAP to explain feature importance.", tech: ["Python","XGBoost","OpenCV","Raspberry Pi","SHAP"], icon: <CircuitBoard className="text-zinc-700" size={24} />, techIcons: ["Python"] },
            { title: "Veritas AI News App", description: "Built and deployed a cross-platform news application integrating custom LLMs for bias-aware content generation and analysis. Developed the backend with FastAPI and Django, used PostgreSQL, and deployed the system on a self-managed server.", tech: ["React Native","FastAPI","Django","PostgreSQL","PyTorch","spaCy"], icon: <Smartphone className="text-zinc-700" size={24} />, techIcons: ["React","Python"], link: "https://veritasroadmap.netlify.app/" },
            { title: "Aircraft Detection System", description: "Developed and trained custom CNN, ResNet, hybrid, RCNN, and YOLOv8 models for aircraft detection and bounding-box regression in satellite imagery, achieving 92% accuracy.", tech: ["PyTorch","Hugging Face","YOLOv8","ResNet","Computer Vision"], icon: <Brain className="text-zinc-700" size={24} />, techIcons: ["Python"], link: "https://github.com/zedyjy/Aircraft-Detection-Project" },
            { title: "DualReview AI", description: "Created an intelligent GitHub bot using GPT-4o and DeepSeek for automated pull-request reviews, including code analysis, security checks, and optimization suggestions.", tech: ["Python","GPT-4o","DeepSeek","GitHub API","NLP"], icon: <Terminal className="text-zinc-700" size={24} />, techIcons: ["Python"], link: "https://github.com/zedyjy/CS453-Project" },
            { title: "PetLink - Pet Adoption Platform", description: "Led frontend development for a pet adoption and care platform. Built responsive React components and integrated REST APIs for pet listings, authentication, and administration.", tech: ["React.js","TypeScript","Flask","SQL","Docker"], icon: <PawPrint className="text-zinc-700" size={24} />, techIcons: ["React"], link: "https://github.com/Pet-Link/PetLink" },
            { title: "Distortion Techniques for Profile Matching", description: "Analyzed distortion methods for mitigating profile-matching attacks in online social networks and compared privacy-enhancing techniques.", tech: ["Python","Data Analysis","Privacy"], icon: <ShieldCheck className="text-zinc-700" size={24} />, techIcons: ["Python"], link: "https://github.com/zedyjy/Distortion-Techniques-Profile-Matching" },
          ].map((project, index) => (
            <div key={index} className="bg-[#f4f1ea] p-7 sm:p-10 border-0 hover:bg-white/70 transition-colors group cursor-pointer min-h-[20rem] flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {project.icon}
                  <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.04em] text-zinc-950">
                    {project.title}
                  </h3>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-950" aria-label={`Open ${project.title}`}>
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <p className="text-zinc-700 mb-8 leading-relaxed">{project.description}</p>
              <div className="flex justify-between items-end mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-transparent text-zinc-700 px-3 py-1 rounded-none text-xs tracking-wide font-medium border border-zinc-900/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2 ml-4">
                  {project.techIcons.map((tech, techIndex) => (
                    <TechIcon key={techIndex} name={tech} color="text-zinc-700" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto border-t border-zinc-900/10">
        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.07em] text-left mb-14 text-zinc-950">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-zinc-900/20 border border-zinc-900/20">
          {[
            { category: "Programming", skills: [ { name: "Python", icon: "Python" }, { name: "C", icon: "C" }, { name: "C++", icon: "C++" }, { name: "C#", icon: "C#" }, { name: "Java", icon: "Java" }, { name: "JavaScript", icon: "JavaScript" }, { name: "TypeScript", icon: "JavaScript" }, { name: "Assembly (ARM/x86)", icon: "Assembly" }, { name: "Verilog", icon: "FPGA" } ], icon: <Code className="text-zinc-700" size={32} /> },
            { category: "Embedded & IoT", skills: [ { name: "ESP32 & ESP8266", icon: "ESP32" }, { name: "Raspberry Pi", icon: "Embedded" }, { name: "ESP-IDF", icon: "ESP32" }, { name: "Zephyr RTOS", icon: "RTOS" }, { name: "Basys 3 FPGA", icon: "FPGA" }, { name: "Vivado", icon: "FPGA" }, { name: "BME280", icon: "Sensor" }, { name: "MQ-3", icon: "Sensor" }, { name: "IR Pulse Sensor", icon: "Sensor" }, { name: "Pi NoIR Camera", icon: "Camera" } ], icon: <CircuitBoard className="text-zinc-700" size={32} /> },
            {
              category: "AI & Machine Learning",
              skills: [
                { name: "PyTorch", icon: "Python" },
                { name: "Scikit-learn", icon: "Python" },
                { name: "XGBoost", icon: "AI" },
                { name: "SHAP", icon: "AI" },
                { name: "Pandas", icon: "Python" },
                { name: "NumPy", icon: "Python" },
                { name: "OpenCV", icon: "AI" },
                { name: "Computer Vision", icon: "AI" },
                { name: "YOLOv8", icon: "AI" },
                { name: "ResNet & CNNs", icon: "AI" },
                { name: "Hugging Face", icon: "AI" },
                { name: "OpenAI API", icon: "AI" }
              ],
              icon: <Brain className="text-zinc-700" size={32} />
            },
            { category: "Development & Tools", skills: [ { name: "FastAPI & Django", icon: "Python" }, { name: "ASP.NET MVC", icon: "Backend" }, { name: "REST APIs", icon: "Backend" }, { name: "PostgreSQL & MySQL", icon: "Database" }, { name: "React Native", icon: "React" }, { name: "Docker", icon: "Docker" }, { name: "Git & Linux", icon: "Tools" }, { name: "Jupyter Notebook", icon: "Notebook" }, { name: "Jira", icon: "Tools" } ], icon: <Terminal className="text-zinc-700" size={32} /> },
          ].map((category, index) => (
            <div key={index} className="bg-[#f4f1ea] p-7 border-0 hover:bg-white/60 transition-colors">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-zinc-900/15">
                {category.icon}
                <h3 className="text-xl font-bold tracking-[-0.04em] text-zinc-950">{category.category}</h3>
              </div>
              <div className="space-y-0 divide-y divide-zinc-900/10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-transparent text-zinc-800 px-0 py-2.5 text-sm font-medium flex items-center justify-between">
                    <span>{skill.name}</span>
                    <TechIcon name={skill.icon} color="text-zinc-700" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto border-t border-zinc-900/10">
        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.07em] text-left mb-14 text-zinc-950">
          Languages
        </h2>
        <div className="grid md:grid-cols-3 gap-px max-w-4xl bg-zinc-900/20 border border-zinc-900/20">
          {[{ name: "English", level: "IELTS 8.0" }, { name: "Turkish", level: "Native" }, { name: "German", level: "A2" }].map((lang, index) => (
            <div key={index} className="bg-[#f4f1ea] p-5 flex items-center justify-between hover:bg-white/60 transition-colors w-full">
              <div className="flex space-x-3">
                <Globe className="text-zinc-700" size={24} />
                <span className="text-lg font-medium text-zinc-950">{lang.name}</span>
              </div>
              <span className="text-sm text-zinc-600 italic">{lang.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies & Interests Section */}
      <section id="hobbies" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto border-t border-zinc-900/10">
        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.07em] text-left mb-14 text-zinc-950">
          Hobbies & Interests
        </h2>
        <div className="max-w-7xl mx-auto">
          <div className="bg-transparent py-8 border-y border-zinc-900/20">
            <div className="space-y-6 text-zinc-700 text-lg leading-relaxed text-left max-w-3xl">
              <p>
                Outside of tech, I’m a big fan of visual storytelling—whether through film, TV, or photography. I enjoy exploring how stories are told across different mediums and cultures.
              </p>
              <p>
                I also created a small photography portfolio to share some of my work:
              </p>
              <a href="https://zedyjy.github.io/galleria-souvlaki/" target="_blank" rel="noopener noreferrer" className="inline-block bg-zinc-950 text-[#f4f1ea] px-6 py-3 rounded-none font-semibold hover:bg-zinc-800 transition-colors">
                View Photography Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto border-t border-zinc-900/10">
        <h2 className="text-5xl md:text-7xl font-black tracking-[-0.07em] text-left mb-14 text-zinc-950">
          Contact Me
        </h2>
        <div className="bg-transparent py-8 border-y border-zinc-900/20 max-w-7xl mx-auto space-y-8 text-zinc-700 text-lg">
          {/* Phone & Email */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-32">
            <div className="flex items-center space-x-3">
              <Phone className="text-zinc-700" size={24} />
              <span>+49 155 10993027</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-zinc-700" size={24} />
              <span>zeynep.dellal@gmail.com</span>
            </div>
          </div>
          {/* GitHub & LinkedIn */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-32">
            <div className="flex items-center space-x-3">
              <Github className="text-zinc-700" size={24} />
              <a href="https://github.com/zedyjy" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/zedyjy</a>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="text-zinc-700" size={24} />
              <a href="https://www.linkedin.com/in/zeynep-dellal-961764201/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/zeynep-dellal</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-zinc-900/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-4 sm:space-y-0 mb-6">
            <a href="mailto:zeynep.dellal@gmail.com" className="flex items-center justify-center space-x-2 text-zinc-700 hover:text-zinc-950 transition-colors">
              <Mail size={20} />
              <span>zeynep.dellal@gmail.com</span>
            </a>
            <a href="https://github.com/zedyjy" className="flex items-center justify-center space-x-2 text-zinc-700 hover:text-zinc-950 transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/zeynep-dellal-961764201/" className="flex items-center justify-center space-x-2 text-zinc-700 hover:text-zinc-950 transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="text-zinc-600">Built by Zeynep Dellal © 2026</p>
        </div>
      </footer>
    </div>
  );
}
