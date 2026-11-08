import { Link, Navigate, useParams } from "react-router-dom";
import { programsByState } from "../lib/data";
import { STATE_NAMES } from "../lib/types";
import { ProgramCard } from "../components/ProgramCard";

export function StatePage() {
  const { state = "" } = useParams();
  const code = state.toLowerCase();
  const name = STATE_NAMES[code];
  const list = programsByState(code);

  if (!name) return <Navigate to="/states" replace />;

  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/states">States</Link>
        <span>/</span>
        <span>{name}</span>
      </nav>
      <h1 className="page-title">
        {name}{" "}
        <span style={{ color: "var(--muted)", fontSize: "0.55em" }}>
          {code.toUpperCase()}
        </span>
      </h1>
      <p className="page-intro">
        {list.length} program{list.length === 1 ? "" : "s"} with research notes
        in this archive.
      </p>
      <div className="program-grid">
        {list.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>
    </>
  );
}
