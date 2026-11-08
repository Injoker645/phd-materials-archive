import { Link } from "react-router-dom";
import { docCount, funding, pastEu, programs, stateSummaries } from "../lib/data";
import { ProgramCard } from "../components/ProgramCard";

export function HomePage() {
  const states = stateSummaries();
  const docs = docCount();
  const zeroFee = funding.highlights.filter((h) => /\$0|waived|none/i.test(h.fee));

  return (
    <>
      <section className="hero" aria-label="Archive introduction">
        <div className="hero-inner">
          <h1>PhD Materials Archive</h1>
          <p className="purpose">
            A public, read-only collection of PhD application research —
            programs by U.S. state, funding and fee notes, and past Sweden/EU
            cover letters.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/states">
              Browse by state
            </Link>
            <Link className="btn btn-ghost" to="/funding">
              Funding &amp; fees
            </Link>
            <Link className="btn btn-ghost" to="/past-eu">
              Past EU
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>What&apos;s here</h2>
        <p className="lede">
          {programs.length} programs across {states.length} states · {docs}{" "}
          documents · {pastEu.length} past EU letters. Identity files and
          recommendation letters are excluded.
        </p>
        <div className="program-grid">
          {states.map((s) => (
            <Link key={s.code} className="program-card" to={`/states/${s.code}`}>
              <span className="pill muted">{s.code.toUpperCase()}</span>
              <h3>{s.name}</h3>
              <p className="uni">
                {s.count} program{s.count === 1 ? "" : "s"}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {zeroFee.length > 0 ? (
        <section className="section">
          <h2>$0 fee / waived highlights</h2>
          <p className="lede">
            Drawn from the shortlist and STATUS notes — verify on each program
            page before relying on a figure.
          </p>
          <div className="highlight-strip">
            {zeroFee.slice(0, 8).map((h) => (
              <Link key={h.programId} className="funding-item" to={`/programs/${h.programId}`}>
                <div>
                  <strong>{h.name}</strong>
                  <div style={{ color: "var(--muted)", fontSize: "0.92rem" }}>
                    {h.fee}
                    {h.fundingNotes ? ` · ${h.fundingNotes}` : ""}
                  </div>
                </div>
                <span className="pill">View</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section">
        <h2>Recently tracked programs</h2>
        <p className="lede">Drafting and considering entries from the current cycle.</p>
        <div className="program-grid">
          {programs
            .filter((p) => /drafting|considering/i.test(p.stage))
            .slice(0, 6)
            .map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
        </div>
      </section>
    </>
  );
}
