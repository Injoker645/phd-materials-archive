import { Link } from "react-router-dom";
import { extras, pastEu } from "../lib/data";
import { DocList } from "../components/DocList";

export function PastEuPage() {
  const byInstitution = pastEu.reduce<Record<string, typeof pastEu>>((acc, item) => {
    (acc[item.institution] ??= []).push(item);
    return acc;
  }, {});

  const institutions = Object.keys(byInstitution).sort();

  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Past EU</span>
      </nav>
      <h1 className="page-title">Past Sweden / EU cover letters</h1>
      <p className="page-intro">
        Closed summer applications kept as writing-style reference. PDFs open in
        a new tab.
      </p>

      {institutions.map((name) => (
        <section key={name} className="eu-group">
          <h3>
            {name}{" "}
            <span style={{ color: "var(--muted)", fontWeight: 500, fontSize: "0.85rem" }}>
              ({byInstitution[name].length})
            </span>
          </h3>
          <ul className="eu-list">
            {byInstitution[name].map((item) => (
              <li key={item.id}>
                <a className="eu-item" href={item.path} target="_blank" rel="noreferrer">
                  <div>
                    <strong>{item.title}</strong>
                    <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                      {item.country} · PDF
                    </div>
                  </div>
                  <span className="pill muted">Open</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {extras.projects.length ? (
        <section className="section">
          <h2>Project PDFs</h2>
          <p className="lede">Supporting project write-ups included in the archive.</p>
          <DocList docs={extras.projects} />
        </section>
      ) : null}
    </>
  );
}
