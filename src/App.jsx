import { useEffect, useState } from "react";
import { Globe, PawPrint, GraduationCap, Scale, ChevronDown, Mail, ExternalLink, Github, Linkedin, Code, Cpu, Zap, CircuitBoard, Brain, Terminal, Database, Smartphone, ShieldCheck, Gamepad, Phone } from "lucide-react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.title = "Zeynep Dellal - Software Engineer";
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'education', 'projects', 'experience', 'skills', 'languages', 'hobbies', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const TechIcon = ({ name, color }) => {
    const icons = {
      Python: (
        <svg className={`w-8 h-8 ${color}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
        </svg>
      ),
      React: (
        <svg className={`w-8 h-8 ${color}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.36 1.565-.455-.47-.91-.993-1.36-1.565z"/>
        </svg>
      ),
      JavaScript: (
        <svg className={`w-8 h-8 ${color}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
      Unity: (
        <svg className={`w-8 h-8 ${color}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.68 7.18L16.34 2.4l4.36.75-1.5 4.86L24 12l-4.8 3.99 1.5 4.86-4.36.75-3.66-4.78L7.32 16.82l3.66 4.78-4.36-.75-1.5-4.86L0 12l4.8-3.99L3.3 3.15l4.36-.75L12.68 7.18zm0 1.64L10.2 12l2.48 3.18L15.16 12L12.68 8.82z"/>
        </svg>
      ),
      Android: (
        <svg className={`w-8 h-8 ${color}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.975 3.019c.331 0 .593.275.593.616 0 .34-.262.615-.593.615-.33 0-.593-.275-.593-.615 0-.341.263-.616.593-.616M9.025 3.019c.331 0 .593.275.593.616 0 .34-.262.615-.593.615-.33 0-.593-.275-.593-.615 0-.341.263-.616.593-.616M8.5 5.994c0-.829.559-1.544 1.319-1.772.255-.817 1.031-1.422 1.931-1.422.9 0 1.676.605 1.931 1.422.76.228 1.319.943 1.319 1.772v8.256c0 1.419-1.15 2.569-2.569 2.569H8.569C7.15 16.819 6 15.669 6 14.25V5.994H8.5z"/>
        </svg>
      ),
      ESP32: (
        <svg className={`w-8 h-8 ${color}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 4h20v2H2V4zm0 4h20v2H2V8zm0 4h20v2H2v-2zm0 4h20v2H2v-2zm0 4h20v2H2v-2z"/>
        </svg>
      )
    };
    return icons[name] || <Code className={`w-8 h-8 ${color}`} />;
  };

  return (
    <div className="bg-gradient-to-br from-white-100 via-rose-100 to-orange-100 text-gray-800 min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-gray-900 shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              ZD
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Education', 'Experience', 'Projects',  'Skills',  'Languages', 'Hobbies', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-rose-600 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-rose-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/zedyjy" className="text-gray-700 hover:text-rose-600 transition-colors transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/zeynep-dellal" className="text-gray-700 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center z-10 px-6 max-w-6xl mx-auto">
          {/* Profile Picture */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <img 
                src={`${import.meta.env.BASE_URL}DSCF0747.JPG`}  
                alt="Zeynep Dellal"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <div className="mb-6 animate-fade-in">
              <p className="text-rose-600 text-lg mb-2 tracking-wider">Hello, I'm</p>
              <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-pink-200 to-orange-400 bg-clip-text text-transparent">
                Zeynep Dellal
              </h1>
              <div className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
                Software Engineer
              </div>
              <div className="flex justify-center md:justify-start space-x-8 mb-8">
                <div className="flex items-center space-x-2 text-rose-600">
                  <CircuitBoard size={24} />
                  <span className="text-lg">Embedded Systems</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-400">
                  <Brain size={24} />
                  <span className="text-lg">AI & ML</span>
                </div>
                <div className="flex items-center space-x-2 text-grey-400">
                    <Scale size={24} />
                    <span className="text-lg">AI Ethics</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="mailto:zeynep.dellal@gmail.com"
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                title="If this doesn't open your email app, you can copy: zeynep.dellal@gmail.com"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Zeynep Dellal Resume.pdf`}
                className="border-2 border-pink-400 text-rose-600 hover:bg-pink-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
                >
                Resume
            </a>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-10">
              <a href="https://github.com/zedyjy" className="text-gray-700 hover:text-rose-600 transition-colors transform hover:scale-125">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/zeynep-dellal" className="text-gray-700 hover:text-blue-400 transition-colors transform hover:scale-125">
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-rose-600 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              I recently graduated with a degree in Computer Science (May 2025) and love working on projects that connect hardware and software. 
              I'm especially interested in areas like embedded systems and AI,but I'm open to working in any area where I can learn and contribute.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              I thrive on tackling complex challenges, whether it's optimizing IoT communication protocols, developing machine learning models, 
              or creating full-stack applications. My goal is to build technology that makes a meaningful impact.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-green-400">
                <Zap size={20} />
                <span>Always Learning</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Code size={20} />
                <span>Problem Solver</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 p-6 rounded-2xl border border-pink-500/30 hover:scale-105 transition-transform">
              <CircuitBoard className="text-rose-600 mb-3" size={32} />
              <h3 className="font-semibold text-white mb-2">Embedded Systems</h3>
              <p className="text-sm text-gray-600">IoT, ESP32, Real-time Systems</p>
              <div className="flex space-x-2 mt-3">
                <TechIcon name="ESP32" color="text-rose-600" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30 hover:scale-105 transition-transform">
              <Brain className="text-purple-400 mb-3" size={32} />
              <h3 className="font-semibold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-gray-600">PyTorch, Computer Vision, NLP</p>
              <div className="flex space-x-2 mt-3">
                <TechIcon name="Python" color="text-purple-400" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30 hover:scale-105 transition-transform">
              <Terminal className="text-green-400 mb-3" size={32} />
              <h3 className="font-semibold text-white mb-2">Backend Development</h3>
              <p className="text-sm text-gray-600">Python, FastAPI, Django</p>
              <div className="flex space-x-2 mt-3">
                <TechIcon name="Python" color="text-green-400" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30 hover:scale-105 transition-transform">
              <Smartphone className="text-orange-400 mb-3" size={32} />
              <h3 className="font-semibold text-white mb-2">Mobile & Web</h3>
              <p className="text-sm text-gray-600">React Native, React.js</p>
              <div className="flex space-x-2 mt-3">
                <TechIcon name="React" color="text-orange-400" />
                <TechIcon name="JavaScript" color="text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Education Section */}
<section id="education" className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
    Education
  </h2>
  <div className="max-w-6xl mx-auto space-y-8">
    {/* University */}
    <div className="bg-gradient-to-r from-red-600/50 to-red-300/20 p-8 rounded-2xl border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="text-rose-600 group-hover:text-white transition-colors">
            <GraduationCap size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-rose-600 text-xl font-medium">Bilkent University</p>
            <p className="text-gray-600">Ankara, Turkey</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-gray-600 font-medium text-lg">2020 - 2025</span>
          <p className="text-pink-400 font-semibold mt-1">Recently Graduated</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="text-white font-semibold mb-3 flex items-center">
            <Brain className="text-purple-400 mr-2" size={20} />
            Extra Coursework
          </h4>
          <div className="space-y-2">
            {[
              "Machine Learning",
              "Data Privacy",
              "Application Lifecycle Management",
              "Software Engineering Project Management",
            ].map((course, index) => (
              <div key={index} className="bg-white/10 text-gray-700 px-3 py-2 rounded-lg text-sm">
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {[
          "Computer Science", 
          "Machine Learning", 
          "Software Engineering", 
          "AI Ethics",
          "Research"
        ].map((tag, index) => (
          <span
            key={index}
            className="bg-pink-500/20 text-black px-3 py-1 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* High School */}
    <div className="bg-gradient-to-r from-green-500/20 to-teal-400/20 p-8 rounded-2xl border border-green-500/30 hover:border-teal-500/50 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="text-green-600 group-hover:text-white transition-colors">
            <GraduationCap size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Kocaeli Fen Lisesi</h3>
            <p className="text-green-600 text-xl font-medium">Kocaeli, Turkey</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-gray-600 font-medium text-lg">2016 - 2020</span>
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
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-8">
          {[
            {
              role: "Embedded Systems Intern",
              company: "Karel",
              period: "August 2024 - September 2024",
              description: "Developed IoT communication systems using ESP32 microcontrollers. Optimized route processing algorithms and implemented real-time data transmission protocols for industrial applications.",
              tech: ["ESP32", "C/C++", "IoT Protocols", "Real-time Systems"],
              icon: <CircuitBoard size={24} />,
              techIcons: ["ESP32"]
            },
            {
            role: "Undergraduate Assistant",
            company: "Bilkent University",
            period: "October 2023 - May 2024",
            description: "Assisted Prof. Robin Ann Downey with administrative tasks and contributed to organizing the Responsible ARTIFICIAL INTELLIGENCE AWARDS in collaboration with MATHWORKS.",
            tech: ["Event Organization", "Academic Support", "Communication"],
            icon: <GraduationCap size={24} />,
            techIcons: ["Event Organization"]
            },
            {
              role: "Game Developer",
              company: "FoxyCode Studios",
              period: "September 2023 – January 2024",
              description: "Built comprehensive gameplay systems in Unity with advanced animation pipelines. Implemented game mechanics, UI systems, and performance optimization for mobile platforms.",
              tech: ["Unity", "C#", "Game Development", "Mobile Optimization"],
              icon: <Code size={24} />,
              techIcons: ["Unity"]
            },
            {
              role: "Backend Developer Intern",
              company: "Medyasoft",
              period: "July 2023 - August 2023",
              description: "Developed backend systems and plugin integrations using C# and ASP.NET. Worked on API development and database optimization for enterprise applications.",
              tech: ["C#", "ASP.NET", "API Development", "Database Design"],
              icon: <Database size={24} />,
              techIcons: []
            },
            {
              role: "Android Developer",
              company: "BenzinLitre",
              period: "November 2021 – November 2022",
              description: "Implemented 15+ new features using MVVM architecture. Focused on performance optimization, user experience improvements, and scalable code architecture.",
              tech: ["Android", "Java", "MVVM", "Mobile Development"],
              icon: <Smartphone size={24} />,
              techIcons: ["Android"]
            }
          ].map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-stone-400/50 to-zinc-200/20 p-8 rounded-2xl border border-purple-600/30 hover:border-pink-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="text-rose-600 group-hover:text-white transition-colors">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-rose-600 text-lg">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 font-medium">{exp.period}</span>
                  <div className="flex space-x-2">
                    {exp.techIcons.map((tech, techIndex) => (
                      <TechIcon key={techIndex} name={tech} color="text-rose-600" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-pink-500/20 text-black px-3 py-1 rounded-full text-sm font-medium"
                  >
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
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
             {
              title: "Veritas News Platform",
              description: "Cross-platform news application with AI-driven content curation. Built scalable backend with FastAPI and Django, featuring intelligent content filtering and user personalization.",
              tech: ["React Native", "FastAPI", "Django", "AI/ML"],
              icon: <Smartphone className="text-green-400" size={24} />,
              gradient: "from-green-500/20 to-emerald-500/20",
              border: "border-green-500/30",
              techIcons: ["React", "Python"],
              link: "https://veritasroadmap.netlify.app/"
            },
             {
              title: "DualReview AI",
              description: "Intelligent GitHub bot leveraging GPT-4o and DeepSeek for automated code reviews. Provides detailed analysis, security checks, and optimization suggestions for pull requests.",
              tech: ["Python", "GPT-4", "GitHub API", "NLP"],
              icon: <Terminal className="text-purple-400" size={24} />,
              gradient: "from-purple-500/20 to-pink-500/20",
              border: "border-purple-500/30",
              techIcons: ["Python"],
              link: "https://github.com/zedyjy/CS453-Project"
            },
            {
              title: "Aircraft Detection System",
              description: "Advanced computer vision system achieving 92% accuracy in aircraft detection using CNNs, ResNet, and YOLOv8 on satellite imagery. Implemented real-time processing pipeline for defense applications.",
              tech: ["PyTorch", "YOLOv8", "Computer Vision", "CNNs"],
              icon: <Brain className="text-blue-400" size={24} />,
              gradient: "from-blue-500/20 to-purple-500/20",
              border: "border-blue-500/30",
              techIcons: ["Python"],
              link: "https://github.com/zedyjy/Aircraft-Detection-Project"
            },
            {
              title: "PetLink - Pet Adoption Website ",
              description: "Led frontend development using React.JS for a pet adoption platform. Designed and implemented responsive UI components, integrated RESTful APIs for dynamic pet listings, user authentication, and admin management. Deployed using Docker and connected to a SQL-based backend via Flask.",
              tech: ["React.JS", "TypeScript", "Flask", "SQL", "Docker"],
                icon: <PawPrint className="text-yellow-500" size={24} />,
                gradient: "from-orange-600/30 to-orange-400/20",
                border: "border-yellow-400/30",
                techIcons: ["React", "Docker"],
                link: "https://github.com/Pet-Link/PetLink"
            },
            {
                title: "Labyrinth and Adventure Game - Hobby Project",
                description: "A 2D adventure-maze game featuring a pixelated cat navigating through dynamic levels. Developed using Java and LibGDX, showcasing object-oriented design and game development skills.",
                tech: ["Java", "LibGDX", "Game Development"],
                icon: <Gamepad className="text-pink-500" size={24} />,
                gradient: "from-pink-300/20 to-red-200/20",
                border: "border-pink-400/30",
                techIcons: ["Java"],
                link: "https://github.com/zedyjy/Bubble-Pop-Labyrinth"
            },
            {
                title: "Distortion Techniques for Profile Matching",
                description: "A research project analyzing distortion methods to mitigate profile matching attacks in online social networks. Implemented and compared various techniques to enhance user privacy.",
                tech: ["Python", "Data Analysis", "Privacy"],
                icon: <ShieldCheck className="text-indigo-500" size={24} />,
                gradient: "from-indigo-300/20 to-purple-200/20",
                border: "border-indigo-400/30",
                techIcons: ["Python"],
                link: "https://github.com/zedyjy/Distortion-Techniques-Profile-Matching"
            }, 
          ].map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${project.gradient} p-8 rounded-2xl border ${project.border} hover:scale-105 transition-all duration-300 group cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {project.icon}
                  <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <ExternalLink className="text-gray-600 group-hover:text-white transition-colors" size={20} />
                </a>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/10 text-black px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2 ml-4">
                  {project.techIcons.map((tech, techIndex) => (
                    <TechIcon key={techIndex} name={tech} color="text-gray-800" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
           {
            category: "Embedded & IoT Systems",
            skills: [
                { name: "C", icon: "C" },
                { name: "C++", icon: "C++" },
                { name: "ESP32", icon: "ESP32" },
                { name: "Zephyr RTOS", icon: "RTOS" },
                { name: "ESP-IDF", icon: "ESP32" },
                { name: "Vivado", icon: "FPGA" },
                { name: "SystemVerilog", icon: "FPGA" },
                { name: "BME280", icon: "Sensor" }
            ],
            icon: <CircuitBoard className="text-rose-600" size={32} />,
            gradient: "from-pink-600/20 to-orange-500/20",
            border: "border-pink-500/30"
            },
            {
              category: "AI & Machine Learning",
              skills: [
                { name: "Python", icon: "Python" },
                { name: "PyTorch", icon: "Python" },
                { name: "Computer Vision", icon: "Python" },
                { name: "Hugging Face Transformers", icon: "AI" },
                { name: "OpenAI APIs", icon: "AI" },
                { name: "CNNs", icon: "AI" },
                { name: "YOLOv8", icon: "AI" },
                { name: "ResNet", icon: "AI" },
                { name: "Jupyter Notebook", icon: "Notebook" }
              ],
              icon: <Brain className="text-purple-400" size={32} />,
              gradient: "from-purple-600/20 to-pink-500/20",
              border: "border-purple-500/30"
            },
            {
                category: "Web & App Development",
                skills: [
                    { name: "HTML/CSS", icon: "HTML" },
                    { name: "React.js", icon: "React" },
                    { name: "React Native", icon: "React" },
                    { name: "Node.js", icon: "Node" },
                    { name: "Flask", icon: "Python" },
                    { name: "FastAPI", icon: "Python" },
                    { name: "Django", icon: "Python" },
                    { name: "TypeScript", icon: "JavaScript" }
                ],
                icon: <Smartphone className="text-green-400" size={32} />,
                gradient: "from-green-500/40 to-emerald-500/20",
                border: "border-green-500/30"
            }
          ].map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.gradient} p-8 rounded-2xl border ${category.border} hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white/10 text-gray-600 px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-colors flex items-center justify-between"
                  >
                    <span>{skill.name}</span>
                    <TechIcon name={skill.icon} color="text-gray-800" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

{/* Languages Section */}
<section id="languages" className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
    Languages
  </h2>
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-xl mx-auto">
    {[
      { name: "English", level: "Proficient", icon: "Language" },
      { name: "Turkish", level: "Native", icon: "Language" }
    ].map((lang, index) => (
      <div
        key={index}
        className="bg-gradient-to-r from-blue-100/30 to-sky-100/20 border border-blue-300/30 p-4 rounded-xl flex items-center justify-between hover:scale-105 transition-all duration-300 flex-1 min-w-[33rem] max-w-sm"
        >

        <div className="flex space-x-3">
          <Globe className="text-blue-400" size={24} />
          <span className="text-lg font-medium text-gray-800">{lang.name}</span>
        </div>
        <span className="text-sm text-gray-600 italic">{lang.level}</span>
      </div>
    ))}
  </div>
</section>


{/* Hobbies & Interests Section */}
<section id="hobbies" className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
    Hobbies & Interests
  </h2>
  <div className="max-w-6xl mx-auto">
    <div className="bg-gradient-to-br from-yellow-100/30 to-orange-100/20 p-8 rounded-2xl border border-yellow-300/30 hover:border-orange-400/50 transition-all duration-300 group">
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-center">
        <p>
          Outside of tech, I’m a big fan of visual storytelling—whether through film, TV, or photography. I enjoy exploring how stories are told across different mediums and cultures.
        </p>
        <p>
          I also created a small photography portfolio to share some of my work:
        </p>
        <a
          href="https://zedyjy.github.io/galleria-souvlaki/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-orange-600 transition"
        >
          View Photography Site
        </a>
      </div>
    </div>
  </div>
</section>

{/* Contact Me Section */}
<section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
    Contact Me
  </h2>
  <div className="bg-gradient-to-br from-indigo-100/30 to-sky-100/20 p-8 rounded-2xl border border-indigo-300/30 hover:border-sky-400/50 transition-all duration-300 max-w-6xl mx-auto space-y-8 text-gray-700 text-lg">
    
    {/* Phone & Email */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-32">
      <div className="flex items-center space-x-3">
        <Phone className="text-indigo-500" size={24} />
        <span>+90 553 207 10 42</span>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="text-indigo-500" size={24} />
        <span>zeynep.dellal@gmail.com</span>
      </div>
    </div>

    {/* GitHub & LinkedIn */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-32">
      <div className="flex items-center space-x-3">
        <Github className="text-indigo-500" size={24} />
        <a
          href="https://github.com/zedyjy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          github.com/zedyjy
        </a>
      </div>
      <div className="flex items-center space-x-3">
        <Linkedin className="text-indigo-500" size={24} />
        <a
          href="https://linkedin.com/in/zeynep-dellal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          linkedin.com/in/zeynep-dellal
        </a>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-purple-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-8 mb-6">
            <a
              href="mailto:zeynep.dellal@gmail.com"
              className="flex items-center space-x-2 text-gray-700 hover:text-rose-600 transition-colors"
            >
              <Mail size={20} />
              <span>zeynep.dellal@gmail.com</span>
            </a>
            <a
              href="https://github.com/zedyjy"
              className="flex items-center space-x-2 text-gray-700 hover:text-rose-600 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zeynep-dellal"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="text-gray-600">
            Built by Zeynep Dellal © 2025
          </p>
        </div>
      </footer>
    </div>
  );
}