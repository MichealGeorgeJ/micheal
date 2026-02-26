import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your form handler (EmailJS, Resend, etc.)
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#0d0d0d]"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p
            className="text-xs tracking-[0.3em] text-[#ff6b35] uppercase mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            — Get In Touch
          </p>
          <h2 className="text-5xl md:text-6xl font-800 text-white leading-tight mb-6">
            Let's Work<br />Together
          </h2>
          <p className="text-[#555] text-sm leading-relaxed mb-10 max-w-sm">
            Open to full-time roles, freelance projects, and exciting collaborations.
            Based remotely — available for UAE opportunities.
          </p>

          <div className="space-y-4">
            {[
              { label: "Email", value: "yourname@email.com", href: "mailto:yourname@email.com" },
              { label: "LinkedIn", value: "linkedin.com/in/yourname", href: "#" },
              { label: "GitHub", value: "github.com/yourname", href: "#" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 group">
                <span
                  className="text-[10px] text-[#ff6b35] tracking-widest w-16 uppercase"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {item.label}
                </span>
                <a
                  href={item.href}
                  className="text-sm text-[#444] group-hover:text-white transition-colors border-b border-transparent group-hover:border-[#ff6b35] pb-px"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div>
          {sent ? (
            <div className="h-full flex flex-col justify-center">
              <div className="text-[#ff6b35] text-4xl mb-4">✓</div>
              <h3 className="text-white text-2xl font-bold mb-2">Message Sent</h3>
              <p className="text-[#555] text-sm">I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <label
                    className="block text-[10px] tracking-widest text-[#ff6b35] uppercase mb-2"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-[#222] text-white text-sm py-3 placeholder-[#333] focus:outline-none focus:border-[#ff6b35] transition-colors"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-[10px] tracking-widest text-[#ff6b35] uppercase mb-2"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-[#222] text-white text-sm py-3 placeholder-[#333] focus:outline-none focus:border-[#ff6b35] transition-colors resize-none"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 text-sm text-white uppercase tracking-widest hover:text-[#ff6b35] transition-colors pt-2"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <span className="w-10 h-px bg-white group-hover:bg-[#ff6b35] group-hover:w-16 transition-all duration-300" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}