import { Link } from "react-router-dom";
import { funding } from "../lib/data";
import { STATE_NAMES } from "../lib/types";
import { DocList } from "../components/DocList";

export function FundingPage() {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Funding</span>
      </nav>
      <h1 className="page-title">Funding &amp; fees</h1>
      <p className="page-intro">
        Cross-program fee and funding labels from STATUS and shortlist notes.
        Empty cells mean the source did not record a value — nothing was invented.
      </p>

      <section className="section" style={{ marginTop: "1rem" }}>
        <h2>All programs</h2>
        <ul className="funding-list">
          {funding.programs.map((row) => (
            <li key={row.programId}>
              <Link className="funding-item" to={`/programs/${row.programId}`}>
                <div>
                  <strong>{row.name}</strong>
                  <div style={{ color: "var(--muted)", fontSize: "0.92rem" }}>
                    {row.university}
                    {row.state
                      ? ` · ${STATE_NAMES[row.state] ?? row.state.toUpperCase()}`
                      : ""}
                    {row.stage ? ` · ${row.stage}` : ""}
                  </div>
                  <div style={{ marginTop: "0.45rem", fontSize: "0.95rem" }}>
                    <span className="pill">{row.fee || "Fee not recorded"}</span>{" "}
                    {row.deadline ? (
                      <span className="pill muted">Due {row.deadline}</span>
                    ) : null}
                  </div>
                  {row.fundingNotes ? (
                    <p style={{ margin: "0.55rem 0 0", color: "var(--ink-soft)" }}>
                      {row.fundingNotes}
                    </p>
                  ) : null}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {funding.referenceDocs.length ? (
        <section className="section">
          <h2>Reference documents</h2>
          <p className="lede">
            Shortlist, deadlines calendar, fee-waiver notes, and sample SoP
            guides.
          </p>
          <DocList docs={funding.referenceDocs} />
        </section>
      ) : null}
    </>
  );
}
