import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaFire, FaShieldAlt, FaNetworkWired } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss, SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiVercel, SiNpm } from "react-icons/si";
import { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  "React": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "JavaScript": <SiJavascript />,
  "TypeScript": <SiTypescript />,
  "HTML": <SiHtml5 />,
  "CSS": <SiCss />,
  "Node.js": <FaNodeJs />,
  "Express": <SiExpress />,
  "MongoDB": <SiMongodb />,
  "PostgreSQL": <SiPostgresql />,
  "Prisma": <SiPrisma />,
  "REST API": <FaNetworkWired />,
  "Git": <FaGitAlt />,
  "GitHub": <FaGithub />,
  "Vercel": <SiVercel />,
  "npm": <SiNpm />,
  "Firebase": <FaFire />,
  "OWASP": <FaShieldAlt />,
  "Penetration Testing": <FaShieldAlt />,
  "Secure Coding": <FaShieldAlt />,
  "Vulnerability Assessment": <FaShieldAlt />,
  "Network Security": <FaNetworkWired />,
  "AI-Assisted Dev": <FaDatabase />,
};

const skillGroups = [
  {
    title: "Frontend Development",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Backend & Databases",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "REST API"],
  },
  {
    title: "Development & Deployment",
    items: ["Git", "GitHub", "Vercel", "npm", "Firebase", "AI-Assisted Dev"],
  },
  {
    title: "Security & Analysis",
    items: ["OWASP", "Penetration Testing", "Secure Coding", "Vulnerability Assessment", "Network Security"],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">My current core stack and daily development tools.</p>
      <div className="card-grid">
        {skillGroups.map((group) => (
          <article className="card" key={group.title}>
            <h3 style={{ marginTop: 0 }}>{group.title}</h3>
            <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
              {group.items.map((item) => (
                <span
                  className="pill"
                  key={item}
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
                >
                  {iconMap[item] && (
                    <span style={{ fontSize: "0.95em", lineHeight: 1 }}>{iconMap[item]}</span>
                  )}
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}