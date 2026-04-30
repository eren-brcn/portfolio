import Image from "next/image";

export default function Hero() {
  return (
    <section className="section" id="about" style={{ paddingTop: "1rem" }}>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "1.2fr 1fr",
          alignItems: "stretch",
        }}
      >
        <div className="card" style={{ padding: "1.6rem" }}>
          <span className="pill">Junior Developer</span>
          <h1
            style={{
              margin: "0.8rem 0 0.6rem",
              fontFamily: "var(--font-space-grotesk)",
              letterSpacing: "-0.04em",
              fontSize: "clamp(2rem, 6vw, 3.8rem)",
              lineHeight: 1,
            }}
          >
            Eren
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: "58ch" }}>
            Quadrilingual Full Stack Developer and Cybersecurity Analyst. Recently completed an intensive
            AI Web Development program at Ironhack, mastering the MERN stack with a focus on AI-assisted
            workflows. Expert in building secure, production-ready applications.
          </p>
          <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <a href="#projects" className="btn" style={{ textDecoration: "none" }}>
              View Projects
            </a>
            <a href="#contact" className="btn secondary" style={{ textDecoration: "none" }}>
              Contact Me
            </a>
          </div>
        </div>
        <div
          className="card"
          style={{
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
            padding: 0,
            background:
              "linear-gradient(150deg, rgba(15,118,110,0.22), rgba(255,138,0,0.2)), var(--card)",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "280px" }}>
            <Image
              src="/eren15.jpeg"
              alt="Eren profile photo"
              fill
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}