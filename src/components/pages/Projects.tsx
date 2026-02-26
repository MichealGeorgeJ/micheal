import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full stack e-commerce app with cart, payments, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description: "Socket.io powered chat with rooms, notifications, and media sharing.",
    tags: ["React", "Socket.io", "Express", "Redis"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Task Management SaaS",
    description: "Kanban board with team collaboration, roles, and analytics.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Portfolio CMS",
    description: "Headless CMS with dynamic content management and SEO optimization.",
    tags: ["Next.js", "Sanity", "TypeScript", "Vercel"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#0a0a0a]"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.3em] text-[#ff6b35] uppercase mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            — Selected Work
          </p>
          <h2 className="text-5xl md:text-7xl font-800 text-white leading-none">
            Projects
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative bg-[#0a0a0a] p-8 group transition-all duration-300 cursor-pointer"
              style={{
                background:
                  hovered === project.id
                    ? "linear-gradient(135deg, #111 0%, #0f0f0f 100%)"
                    : "#0a0a0a",
              }}
            >
              {/* Number */}
              <span
                className="text-[#ff6b35] text-xs tracking-widest mb-6 block"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                0{project.id}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff6b35] transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#666] text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-widest px-3 py-1 border border-[#222] text-[#555] uppercase"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                <a
                  href={project.link}
                  className="text-xs text-white tracking-widest uppercase border-b border-[#ff6b35] pb-px hover:text-[#ff6b35] transition-colors"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Live →
                </a>
                <a
                  href={project.github}
                  className="text-xs text-[#444] tracking-widest uppercase border-b border-[#333] pb-px hover:text-white transition-colors"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  GitHub →
                </a>
              </div>

              {/* Hover accent line */}
              <div
                className="absolute left-0 top-0 w-[2px] h-0 bg-[#ff6b35] group-hover:h-full transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}