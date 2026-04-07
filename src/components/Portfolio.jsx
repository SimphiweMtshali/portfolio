import React, { useEffect, useState } from 'react';
import {
  Award,
  Check,
  Code,
  Download,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Music,
  Palette,
  User,
  X
} from 'lucide-react';
import Lottie from 'lottie-react';
import dashboardAnimation from '../animated-dashboards.json';
import gradPic from '../Gradpic.JPG';
import carHouseImg from '../assets/carhouse.png';
import loginDashboardImg from '../assets/login-dashboard.png';

const navigationItems = ['Home', 'About', 'Portfolio', 'Contact'];
const tabs = ['projects', 'certificates', 'tech stack'];

const projects = [
  {
    id: 1,
    title: 'Simphiwe-CarWeb',
    description:
      'A responsive car showcase website built with modern web technologies, highlighting my skills in front-end development, clean UI design, and interactive user experiences.',
    image: carHouseImg,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    github: 'https://github.com/SimphiweMtshali/Simphiwe-CarWeb.git',
    demo: 'https://simphiwemtshali.github.io/Simphiwe-CarWeb/',
    features: ['Dynamic Car Showcase', 'Responsive Design', 'Search & Filter', 'Modern UI/UX']
  },
  {
    id: 2,
    title: 'Dashboard CRUD with Weather API',
    description:
      'A full-stack React/PHP application combining secure task management with weather insights and JWT authentication.',
    image: loginDashboardImg,
    tech: ['React', 'PHP', 'JWT', 'MySQL'],
    github: 'https://github.com/SimphiweMtshali/Data-Analytics-Dashboard.git',
    demo: 'https://simphiwemtshali.github.io/Data-Analytics-Dashboard/',
    features: [
      'User registration and login',
      'CRUD operations for items',
      'API Weather display',
      'Protected routes using JWT tokens'
    ]
  },
  {
    id: 3,
    title: 'Task Management App Concept',
    description:
      'A project concept for collaborative task planning, reminders, and team progress tracking that is still being shaped into a full product.',
    image: '',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    github: '',
    demo: '',
    status: 'In Progress',
    features: ['Team collaboration', 'Task tracking', 'Deadline reminders', 'File sharing']
  }
];

const caseStudies = [
  {
    id: 1,
    label: 'Case Study 01',
    title: 'Simphiwe-CarWeb',
    role: 'Front-end build',
    challenge: 'Create a car marketplace website that feels modern, clean, and easy to use on both desktop and mobile screens.',
    build: [
      'Designed a responsive multi-page experience with clear navigation and strong visual hierarchy.',
      'Added filtering, favorites, and detailed vehicle views using JavaScript.',
      'Focused on making the interface feel simple for buyers and sellers.'
    ],
    result: 'This project shows that I can build polished front-end experiences, organize content well, and improve usability without depending on a heavy framework.'
  },
  {
    id: 2,
    label: 'Case Study 02',
    title: 'Dashboard CRUD with Weather API',
    role: 'Full-stack build',
    challenge: 'Build a dashboard that does more than just look good by combining authentication, CRUD features, and live weather information in one place.',
    build: [
      'Used React for the interface and PHP for the back-end logic.',
      'Added login flows, protected routes, JWT authentication, and MySQL data handling.',
      'Connected an API so the dashboard could show live weather details.'
    ],
    result: 'This project proves I can work across the full stack, connect different moving parts together, and build something that feels closer to a real-world application.'
  },
  {
    id: 3,
    label: 'Case Study 03',
    title: 'Task Management App Concept',
    role: 'Product thinking',
    challenge: 'Plan a task management tool that helps teams stay organized, track progress, and avoid losing important work.',
    build: [
      'Mapped the core features like task tracking, reminders, and shared progress views.',
      'Chose a stack direction with React, Firebase, and Tailwind CSS.',
      'Used the concept to think through how a real collaboration tool should feel before full development starts.'
    ],
    result: 'Even though this one is still growing, it shows that I do not only code screens. I also think about user needs, feature planning, and how an idea becomes a real product.'
  }
];

const proofCards = [
  {
    id: 1,
    label: 'Responsive Front-End',
    accentClass: 'border-purple-500/20 bg-purple-500/10',
    title: 'I can build clean responsive interfaces.',
    proof: 'The CarWeb project includes a multi-page layout, mobile navigation, vehicle cards, and detailed vehicle views that still feel organized on smaller screens.',
    evidence: ['Responsive page structure', 'Clear navigation and visual hierarchy']
  },
  {
    id: 2,
    label: 'Full-Stack Features',
    accentClass: 'border-cyan-500/20 bg-cyan-500/10',
    title: 'I can connect front-end and back-end work.',
    proof: 'The dashboard project combines React, PHP, JWT authentication, and MySQL so it can do real application work instead of only showing static screens.',
    evidence: ['Authentication and protected routes', 'CRUD logic with database handling']
  },
  {
    id: 3,
    label: 'API Integration',
    accentClass: 'border-emerald-500/20 bg-emerald-500/10',
    title: 'I can bring outside data into an app.',
    proof: 'The dashboard project also pulls in weather data, which shows I can connect an external API and fit live information into the user experience.',
    evidence: ['Live weather information', 'Real data mixed into the dashboard flow']
  },
  {
    id: 4,
    label: 'Shipping Work',
    accentClass: 'border-amber-400/20 bg-amber-400/10',
    title: 'I can package and publish projects.',
    proof: 'Your portfolio and project demos are set up for GitHub Pages, which proves you are not only building projects locally but also making them available for people to see.',
    evidence: ['Live demos available online', 'GitHub project links and deployment']
  }
];

const certificates = [
  { name: 'Bachelor of Science in Information Technology', issuer: 'Richfield College', year: '2022' }
];

const techStack = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
  { category: 'Backend', techs: ['Node.js', 'Python', 'Express', 'Django'] },
  { category: 'Database', techs: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL'] },
  { category: 'Tools', techs: ['Git', 'Docker', 'VS Code', 'Figma'] },
  { category: 'Data Analytics', techs: ['Power BI', 'Tableau', 'Pandas', 'NumPy'] }
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/SimphiweMtshali',
    icon: Github,
    hoverClass: 'hover:bg-purple-600/30 hover:shadow-lg hover:shadow-purple-500/50'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/simphiwe-mtshali-06ba58249',
    icon: Linkedin,
    hoverClass: 'hover:bg-cyan-600/30 hover:shadow-lg hover:shadow-cyan-500/50'
  },
  { label: 'Instagram', href: '', icon: Instagram, hoverClass: 'hover:bg-pink-600/30 hover:shadow-lg hover:shadow-pink-500/50' },
  { label: 'TikTok', href: '', icon: Music, hoverClass: 'hover:bg-purple-600/30 hover:shadow-lg hover:shadow-purple-500/50' }
];

function SocialLinks({ className, iconSize = 'w-6 h-6' }) {
  return socialLinks.map((link) => {
    const Icon = link.icon;
    if (!link.href) {
      return (
        <span key={link.label} aria-label={`${link.label} coming soon`} title={`${link.label} coming soon`} className={`${className} opacity-50 cursor-not-allowed`}>
          <Icon className={iconSize} />
        </span>
      );
    }

    return (
      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} title={link.label} className={`${className} transition-all ${link.hoverClass}`}>
        <Icon className={iconSize} />
      </a>
    );
  });
}

function ProjectPreview({ project, imageHeight }) {
  if (project.image) {
    return <img src={project.image} alt={project.title} className={`w-full ${imageHeight} object-cover`} />;
  }

  return (
    <div className={`w-full ${imageHeight} bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-end p-6`}>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2">{project.status || 'Project'}</p>
        <h4 className="text-xl font-bold text-white">{project.title}</h4>
      </div>
    </div>
  );
}

function ActionButton({ href, label, icon: Icon, variant = 'secondary', ariaLabel }) {
  const solidClass = 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-lg hover:shadow-purple-500/50 text-white';
  const mutedClass = 'bg-gray-700 hover:bg-gray-600 text-white';
  const baseClass = 'flex-1 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2';

  if (!href) {
    return <span className={`${baseClass} ${variant === 'primary' ? 'bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border border-purple-500/20 text-gray-300 cursor-not-allowed' : 'bg-gray-700/50 text-gray-500 cursor-not-allowed'}`}><Icon className="w-5 h-5" />{label}</span>;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel || label} className={`${baseClass} ${variant === 'primary' ? solidClass : mutedClass}`}><Icon className="w-5 h-5" />{label}</a>;
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('projects');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactFeedback, setContactFeedback] = useState({ type: '', message: '' });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const publicAssetPath = (fileName) => `${process.env.PUBLIC_URL || ''}/${fileName.replace(/^\/+/, '')}`;

  const clearContactFeedback = () => {
    if (contactFeedback.message) {
      setContactFeedback({ type: '', message: '' });
    }
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      setContactFeedback({ type: 'error', message: 'Please fill in your name, email, and message before sending.' });
      return;
    }

    setContactFeedback({ type: 'success', message: 'Thanks for reaching out. This form is still a portfolio preview, so it does not send email yet.' });
    event.currentTarget.reset();
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-pulse">Welcome to My Portfolio</h1>
          <div className="flex justify-center gap-8 mb-8">
            <div className="animate-bounce" style={{ animationDelay: '0ms' }}><Code className="w-16 h-16 text-purple-400" /></div>
            <div className="animate-bounce" style={{ animationDelay: '200ms' }}><User className="w-16 h-16 text-cyan-400" /></div>
            <div className="animate-bounce" style={{ animationDelay: '400ms' }}><Palette className="w-16 h-16 text-indigo-400" /></div>
          </div>
          <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 opacity-50 animate-gradient"></div>
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SM</div>
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-all relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            <button onClick={() => setMenuOpen((current) => !current)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} className="md:hidden text-white">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Simphiwe Mtshali</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">Software Engineer, Full-Stack Engineer, and Web Developer</p>
            <p className="text-lg text-gray-400">Turning data into decisions and ideas into code</p>
            <div className="flex gap-4">
              <a href="#portfolio" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">View Projects</a>
              <a href="#contact" className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/30 transition-all">Contact Me</a>
            </div>
            <div className="flex gap-4 pt-4">
              <SocialLinks className="p-3 bg-gray-800/50 rounded-full" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <Lottie animationData={dashboardAnimation} loop autoplay style={{ width: '100%', height: '400px' }} />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-2xl opacity-50 animate-pulse" />
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500/50">
                  <img src={gradPic} alt="Simphiwe Mtshali portrait" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate software developer and web specialist with a Bachelor&apos;s degree in Information Technology (NQF Level 7) from Richfield College. I specialize in building custom applications and modern web applications and transforming complex data into actionable insights. My journey in tech has equipped me with a unique blend of development and analytical skills.
              </p>
              <div className="flex gap-4">
                <a href={publicAssetPath('Simphiwe_Mtshali_CV.pdf')} download aria-label="Download CV" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
                <a href="#portfolio" className="px-6 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all">View Projects</a>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 text-center hover:border-purple-500/50 transition-all">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">10+</div>
                  <div className="text-gray-400 text-sm mt-2">Projects</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 text-center hover:border-cyan-500/50 transition-all">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">1</div>
                  <div className="text-gray-400 text-sm mt-2">Certificate</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20 text-center hover:border-blue-500/50 transition-all">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">2+</div>
                  <div className="text-gray-400 text-sm mt-2">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-full font-semibold transition-all ${activeTab === tab ? 'bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg shadow-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-700/50'}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all group">
                  <div className="relative overflow-hidden">
                    <ProjectPreview project={project} imageHeight="h-48" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-600/20 rounded-full text-sm text-purple-300">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button onClick={() => setSelectedProject(project)} className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">Details</button>
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="px-4 py-2 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <span aria-label={`${project.title} demo coming soon`} title="Live demo coming soon" className="px-4 py-2 border-2 border-purple-500/40 rounded-lg font-semibold text-gray-500 flex items-center gap-2 cursor-not-allowed">
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificates.map((cert) => (
                <div key={cert.name} className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-7 h-7 text-cyan-300" />
                  </div>
                  <h3 className="font-bold mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-sm text-cyan-400 mt-1">{cert.year}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tech stack' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStack.map((category) => (
                <div key={category.category} className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{category.category}</h3>
                  <div className="space-y-2">
                    {category.techs.map((tech) => (
                      <div key={tech} className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 hover:bg-purple-600/20 transition-all">{tech}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">Project Case Studies</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How I <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Think Through Projects</span>
            </h2>
            <p className="text-lg text-gray-300">
              These little story cards explain the problem, what I built, and why the work matters. This helps people understand not just what I made, but how I think.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="grid gap-6 rounded-3xl border border-white/10 bg-gray-900/35 p-8 backdrop-blur-lg lg:grid-cols-[220px,1fr]"
              >
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">{study.label}</p>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                    <p className="text-sm text-purple-300 mt-2">{study.role}</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-purple-300 mb-3">The Goal</p>
                    <p className="text-sm text-gray-200 leading-6">{study.challenge}</p>
                  </div>

                  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 mb-3">What I Built</p>
                    <ul className="space-y-3">
                      {study.build.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-gray-200 leading-6">
                          <Check className="w-4 h-4 text-cyan-300 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-amber-300 mb-3">Why It Matters</p>
                    <p className="text-sm text-gray-200 leading-6">{study.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">Proof of Skills</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Proof of Work</span>
            </h2>
            <p className="text-lg text-gray-300">
              These cards show real things already inside your projects, so people do not have to guess what you can do.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {proofCards.map((card) => (
              <article
                key={card.id}
                className={`rounded-3xl border p-6 backdrop-blur-lg ${card.accentClass}`}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-white/70 mb-4">{card.label}</p>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{card.title}</h3>
                <p className="text-sm text-gray-100 leading-6 mb-5">{card.proof}</p>
                <div className="space-y-3">
                  {card.evidence.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-gray-200">
                      <Check className="w-4 h-4 mt-1 flex-shrink-0 text-white" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Get In <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input type="text" name="name" required onChange={clearContactFeedback} className="w-full px-4 py-3 bg-gray-700/50 rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" name="email" required onChange={clearContactFeedback} className="w-full px-4 py-3 bg-gray-700/50 rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-all" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea rows="6" name="message" required onChange={clearContactFeedback} className="w-full px-4 py-3 bg-gray-700/50 rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-all resize-none" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Send Message
              </button>
              {contactFeedback.message && (
                <p className={`rounded-lg border px-4 py-3 text-sm ${contactFeedback.type === 'error' ? 'border-pink-400/40 bg-pink-500/10 text-pink-200' : 'border-cyan-400/40 bg-cyan-500/10 text-cyan-100'}`}>
                  {contactFeedback.message}
                </p>
              )}
            </form>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-center">Connect With Me</h3>
              <div className="flex justify-center gap-4">
                <SocialLinks className="p-4 bg-gray-700/50 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">&copy; 2025 Simphiwe Mtshali. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a>
              <a href="#portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30" onClick={(event) => event.stopPropagation()}>
            <div className="relative">
              <ProjectPreview project={selectedProject} imageHeight="h-64" />
              <button onClick={() => setSelectedProject(null)} aria-label="Close project details" className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-full hover:bg-gray-900 transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{selectedProject.title}</h2>
              <p className="text-gray-300 text-lg">{selectedProject.description}</p>
              <div>
                <h3 className="text-xl font-bold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-purple-300">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <ActionButton href={selectedProject.github} label={selectedProject.github ? 'View Code' : 'Code Soon'} icon={Github} ariaLabel={`${selectedProject.title} source code`} />
                <ActionButton href={selectedProject.demo} label={selectedProject.demo ? 'Live Demo' : 'Demo Soon'} icon={ExternalLink} variant="primary" ariaLabel={`${selectedProject.title} live demo`} />
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
