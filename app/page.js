import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    title: "DocuChat",
    description: "An AI-powered document chat application. Coming soon",
    tags: ["RAG", "Claude API", "pgvector"],
  },
  {
    title: "CoWrite",
    description: "A real time collaborative writing tool. Coming soon.",
    tags: ["WebSockets", "Yjs", "Node.js"]
  },
  {
    title: "LinkVault",
    description: "A smart bookmark manager. Coming soon",
    tags: ["Next.js", "Supabase"]
  },
  {
    title: "FocusFlow",
    description: "A productivity app for iOS. Coming soon",
    tags: ["iOS", "SwiftUI"],
  },
];

// Placeholder content — replace with your own
const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "PostgreSQL", "Supabase", "Vercel"],
  },
];

const experience = [
  {
    role: "Software Developer",
    organisation: "Pulse Mining Systems",
    dates: "2023 - 2026",
    description: "One or two lines about what you worked on and what you achieved.",
  },
  {
    role: "Internship",
    organisation: "Incubator Tank",
    dates: "2023 – 2025",
    description: "One or two lines about what you worked on and what you achieved.",
  },
  {
    role: "Bachelor of Information Technology",
    organisation: "University of Newcastle",
    dates: "2019 - 2022",
    description: "Major in Systems Development",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <>
    {/* Navigation */}
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold">
          Noah Convery
        </a>
        <ul className="flex gap-4 sm:gap-6 text-sm text-gray-600">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-black transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>

    <main className="px-6">

      {/* Introduction */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full">
          <h1 className="text-5xl font-bold mb-2">Noah Convery</h1>
          <p className="text-xl text-gray-500 mb-6">
            Software Developer · Melbourne
          </p>
          <p className='text-lg text-gray-600 mb-8'>
            I enjoy solving problems and building things people actually use,
            working with JavaScript, React, Next.js and Node.js. Currently
            looking for my next opportunity.
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href='#projects'
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              View My Work
            </a>

            <a
              href='/resume.pdf'
              download
              className="border border-black px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/Nocobe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={28}/>
            </a>
            <a
              href="https://www.linkedin.com/in/noah-convery-44364a166/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28}/>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto py-24 scroll-mt-16">
        <h2 className="text-3xl font-bold mb-12">
          About
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4 text-gray-600">
            <p>
              Placeholder: a few sentences on how you got into software
              development and what you enjoy working on.
            </p>
            <p>
              Placeholder: your background, such as your degree, courses or
              previous career, and the kind of role you&apos;re looking for next.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="font-bold mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto py-24 scroll-mt-16">
        <h2 className="text-3xl font-bold mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-2">
                <button
                  disabled
                  className="border border-gray-200 text-gray-400 px-4 py-2 rounded-lg text-sm cursor-not-allowed"
                >
                  Live Demo
                </button>
                <button
                  disabled
                  className="border border-gray-200 text-gray-400 px-4 py-2 rounded-lg text-sm cursor-not-allowed"
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto py-24 scroll-mt-16">
        <h2 className="text-3xl font-bold mb-12">
          Experience
        </h2>
        <ol className="border-l border-gray-200 flex flex-col gap-10">
          {experience.map((item, index) => (
            <li key={index} className="relative pl-8">
              <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-black" />
              <p className="text-sm text-gray-500 mb-1">{item.dates}</p>
              <h3 className="text-xl font-bold">{item.role}</h3>
              <p className="text-gray-600 mb-2">{item.organisation}</p>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-2xl mx-auto py-24 scroll-mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          I&apos;m currently looking for new opportunities. Whether you have a
          role in mind or just want to say hi, my inbox is open.
        </p>
        <a
          href="mailto:you@example.com"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://github.com/Nocobe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={28}/>
          </a>
          <a
            href="https://www.linkedin.com/in/noah-convery-44364a166/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28}/>
          </a>
        </div>
      </section>

    </main>
    </>
  );
}
