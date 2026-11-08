import { Link, Navigate, useParams } from "react-router-dom";
import { getProgram } from "../lib/data";
import { STATE_NAMES } from "../lib/types";
import { DocList } from "../components/DocList";

export function ProgramPage() {
  const { id = "" } = useParams();
  const program = getProgram(id);

  if (!program) return <Navigate to="/states" replace />;

  const stateName = STATE_NAMES[program.state] ?? program.state.toUpperCase();

  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/states">States</Link>
        <span>/</span>
        <Link to={`/states/${program.state}`}>{stateName}</Link>
        <span>/</span>
        <span>{program.name}</span>
      </nav>

      <h1 className="page-title">{program.name}</h1>
      <p className="page-intro">
        {program.university} · {stateName}, {program.country}
      </p>

      <dl className="detail-grid">
        <div className="detail">
          <dt>Stage</dt>
          <dd>{program.stage || "—"}</dd>
        </div>
        <div className="detail">
          <dt>Deadline</dt>
          <dd>{program.deadline || "—"}</dd>
        </div>
        <div className="detail">
          <dt>Application fee</dt>
          <dd>{program.fee || "—"}</dd>
        </div>
        <div className="detail">
          <dt>GRE</dt>
          <dd>{program.greNotes || "—"}</dd>
        </div>
      </dl>

      {program.fundingNotes ? (
        <section className="section" style={{ marginTop: "0.5rem" }}>
          <h2>Funding notes</h2>
          <p className="lede">{program.fundingNotes}</p>
        </section>
      ) : null}

      <section className="section">
        <h2>Documents</h2>
        <p className="lede">
          Markdown and text open in-app; PDFs open in a new tab.
        </p>
        <DocList docs={program.documents} programId={program.id} />
      </section>
    </>
  );
}
