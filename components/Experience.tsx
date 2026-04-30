const jobs = [
  {
    role: "Cybersecurity Intern",
    company: "CyberTech",
    date: "2022 - 2023",
    summary: "Performed vulnerability assessments and penetration testing. Integrated secure coding principles into development workflows. Monitored network traffic and participated in real-world cyber-attack simulations.",
  },
  {
    role: "Full Stack Developer",
    company: "Ironhack",
    date: "2025 - 2026",
    summary: "Completed 400+ hours intensive AI Web Development training with focus on MERN stack and AI-assisted workflows. Built production-ready applications with secure coding practices.",
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">My recent work journey and practical development experience.</p>
      <div className="card-grid">
        {jobs.map((job) => (
          <article key={job.role} className="card">
            <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
              <h3 style={{ margin: 0 }}>{job.role}</h3>
              <span className="pill">{job.date}</span>
            </div>
            <p style={{ margin: "0.45rem 0", color: "var(--hot)", fontWeight: 700 }}>{job.company}</p>
            <p style={{ margin: 0, color: "var(--muted)" }}>{job.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}