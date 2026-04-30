"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="section" style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem", position: "sticky", top: 0, zIndex: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid var(--line)",
          background: "rgba(18, 21, 35, 0.85)",
          borderRadius: "999px",
          padding: "0.65rem 1rem",
          backdropFilter: "blur(10px)",
          gap: "0.75rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" style={{ width: "2rem", height: "2rem", borderRadius: "8px", flexShrink: 0 }}>
            <rect width="64" height="64" rx="14" fill="url(#hbg)"/>
            <text x="32" y="45" fontFamily="monospace" fontWeight="700" fontSize="36" fill="white" textAnchor="middle">E</text>
            <polyline points="8,20 2,32 8,44" stroke="#a78bfa" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="56,20 62,32 56,44" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="hbg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e1b4b"/>
                <stop offset="100%" stopColor="#0f172a"/>
              </linearGradient>
            </defs>
          </svg>
          <strong style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em" }}>
            eren.dev
          </strong>
        </div>
        <nav style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center", flex: 1 }}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className="pill">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="https://github.com/eren-brcn" target="_blank" rel="noreferrer" className="btn secondary" style={{ textDecoration: "none" }}>
          Github Profile
        </a>
      </div>
    </header>
  );
}