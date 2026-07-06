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
    tags: ["WebSockets", "Yjs", "Node,js"]
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

export default function Home() {
  return (
    <main className="px-6">

      {/* Introduction */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-2x1 w-full">
          <h1 className="text-5x1 font-bold mb-4">
            Hi, I&apos;m Noah
          </h1>
          <p className='text-x1 text-gray-600 mb-8'>
            A Melbourne based Software Developer who loves building things.
            I work with Javascript, React and Node.js to bring ideas to life.
            Currently looking for my next opportunity in Melbourne
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href='#projects'
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transistion"
            >
              View My Work
            </a>

            <a
              href='#/resume.pdf'
              className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100 transistion"
            >
              Download Resume
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Nocobe" target="_blank">
              <FaGithub size={28}/>
            </a>
            <a href="https://www.linkedin.com/in/noah-convery-44364a166/" target="_blank">
              <FaLinkedin size={28}></FaLinkedin>
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5x1 mx-auto py-24">
        <h2 className="text-3x1 font-bold mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="border border-gray-200 rounded-x1 p-6 flex flex-col gap-4"
            >
              <h3 className="text-x1 font-bold">{project.title}</h3>
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
      
    </main>
  );
}
