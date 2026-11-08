import { Link } from "react-router-dom";
import { stateSummaries } from "../lib/data";

export function StatesPage() {
  const states = stateSummaries();

  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>States</span>
      </nav>
      <h1 className="page-title">Programs by state</h1>
      <p className="page-intro">
        U.S. PhD programs in this archive, grouped by two-letter state code.
      </p>
      <ul className="state-list">
        {states.map((s) => (
          <li key={s.code}>
            <Link className="state-item" to={`/states/${s.code}`}>
              <div>
                <strong>
                  {s.name}{" "}
                  <span style={{ color: "var(--muted)", fontWeight: 600 }}>
                    ({s.code.toUpperCase()})
                  </span>
                </strong>
                <div style={{ color: "var(--muted)" }}>
                  {s.count} program{s.count === 1 ? "" : "s"}
                </div>
              </div>
              <span className="pill muted">Open</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
