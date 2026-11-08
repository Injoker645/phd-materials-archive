import { Link } from "react-router-dom";
import type { Program } from "../lib/types";
import { STATE_NAMES } from "../lib/types";
import { isZeroFee } from "../lib/data";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link className="program-card" to={`/programs/${program.id}`}>
      {program.stage ? <span className="pill">{program.stage}</span> : null}
      <h3>{program.name}</h3>
      <p className="uni">
        {program.university}
        {program.state ? ` · ${STATE_NAMES[program.state] ?? program.state.toUpperCase()}` : ""}
      </p>
      {program.fee ? (
        <span className={isZeroFee(program.fee) ? "pill" : "pill muted"}>
          Fee: {program.fee}
        </span>
      ) : null}
    </Link>
  );
}
