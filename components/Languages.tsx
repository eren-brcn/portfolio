const languages = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Full Professional" },
  { name: "Russian", level: "Full Professional" },
  { name: "Ukrainian", level: "Professional Working" },
];

export default function Languages() {
  return (
    <section className="section" id="languages">
      <h2 className="section-title">Languages</h2>
      <p className="section-subtitle">Communication skills for collaboration and remote work.</p>
      <div className="card-grid">
        {languages.map((language) => (
          <article className="card" key={language.name}>
            <h3 style={{ marginTop: 0 }}>{language.name}</h3>
            <p style={{ marginBottom: 0, color: "var(--muted)" }}>{language.level}</p>
          </article>
        ))}
      </div>
    </section>
  );
}