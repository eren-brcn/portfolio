"use client";

import { useState } from "react";

const certificates = [
  {
    title: "React Developer Certificate",
    issuer: "Udemy",
    date: "2025",
  },
  {
    title: "TypeScript Essentials",
    issuer: "Coursera",
    date: "2024",
  },
  {
    title: "Modern JavaScript",
    issuer: "freeCodeCamp",
    date: "2024",
  },
  {
    title: "Git and GitHub",
    issuer: "Google",
    date: "2023",
  },
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section className="section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">Credentials that support my frontend and software fundamentals.</p>
      <div className="card-grid">
        {list.map((item) => (
          <article className="card" key={item.title}>
            <span className="pill">{item.date}</span>
            <h3>{item.title}</h3>
            <p style={{ marginBottom: 0, color: "var(--muted)" }}>{item.issuer}</p>
          </article>
        ))}
      </div>
      {certificates.length > 3 && (
        <button className="btn" style={{ marginTop: "1rem" }} onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
}