export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0a0a0a] border-t border-[#141414] px-6 py-10"
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div>
          <span className="text-white text-sm tracking-widest uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
            YourName
          </span>
          <p className="text-[#333] text-xs tracking-widest mt-1">
            Full Stack Developer
          </p>
        </div>

        {/* Center links */}
        <div className="flex gap-8">
          {["Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] tracking-widest text-[#333] uppercase hover:text-[#ff6b35] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right */}
        <p className="text-[10px] tracking-widest text-[#2a2a2a] uppercase">
          © {year} — All rights reserved
        </p>
      </div>
    </footer>
  );
}