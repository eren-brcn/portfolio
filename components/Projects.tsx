"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Project = {
  title: string;
  category: "web" | "mobile";
  summary: string;
  stack: string[];
  image?: string;
  demoUrl?: string;
};

const data: Project[] = [
  {
    title: "VibeCheck",
    category: "web",
    summary: "Production-ready MERN Stack dashboard matching users with live music events. Integrated AI workflows for debugging and component generation, reducing development time by 30%. Deployed on Vercel with responsive UI and real-time data integration.",
    stack: ["React", "Node.js", "MongoDB", "Express", "AI-Assisted Dev"],
    image: "/vibbe2.png",
    demoUrl: "https://vibecheck-sigma-virid.vercel.app/login",
  },
  {
    title: "CardioWeb",
    category: "web",
    summary: "A health-focused full stack web app built for cardio tracking, daily routines, and progress visualization.",
    stack: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
    image: "/cardioweb.png",
  },
  {
    title: "Endless Ball",
    category: "mobile",
    summary: "An endless arcade-style game project focused on smooth controls, score progression, and responsive gameplay.",
    stack: ["JavaScript", "React Native", "Game Loop", "Firebase"],
    image: "/endless-ball.png",
  },
  {
    title: "WeatherNow",
    category: "web",
    summary: "A weather app with location search and clean data visualization.",
    stack: ["React", "OpenWeather", "Chart.js"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const list = filter === "all" ? data : data.filter((item) => item.category === filter);
    return showAll ? list : list.slice(0, 3);
  }, [filter, showAll]);

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Selected work focused on real-world usability.</p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
        <button className="pill" onClick={() => { setFilter("all"); setShowAll(false); }}>
          All
        </button>
        <button className="pill" onClick={() => { setFilter("web"); setShowAll(false); }}>
          Web Apps
        </button>
        <button className="pill" onClick={() => { setFilter("mobile"); setShowAll(false); }}>
          Mobile Apps
        </button>
      </div>
      <div className="card-grid">
        {filtered.map((project) => (
          <article key={project.title} className="card">
            {project.image && (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(180px, 26vw, 240px)",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  marginBottom: "0.9rem",
                  border: "1px solid color-mix(in srgb, var(--line) 75%, transparent)",
                }}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  style={{ objectFit: "cover", transform: "scale(1.01)", transition: "transform 300ms ease" }}
                />
              </div>
            )}
            <h3 style={{ marginTop: 0 }}>{project.title}</h3>
            <p style={{ color: "var(--muted)" }}>{project.summary}</p>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn secondary"
                style={{ textDecoration: "none", display: "inline-block", marginBottom: "0.8rem" }}
              >
                Live Demo
              </a>
            )}
            <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
              {project.stack.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      {(filter === "all" ? data.length : data.filter((item) => item.category === filter).length) > 3 && (
        <button className="btn" style={{ marginTop: "1rem" }} onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
}