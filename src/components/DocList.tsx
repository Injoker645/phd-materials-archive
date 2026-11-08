import { Link } from "react-router-dom";
import type { DocumentRef } from "../lib/types";

function viewerPath(programId: string | undefined, doc: DocumentRef): string | null {
  const isText = doc.type === "md" || doc.type === "txt";
  if (!isText) return null;

  if (programId && doc.path.startsWith(`/materials/programs/${programId}/`)) {
    const rel = doc.path
      .slice(`/materials/programs/${programId}/`.length)
      .split("/")
      .map(encodeURIComponent)
      .join("/");
    return `/programs/${programId}/docs/${rel}`;
  }

  if (doc.path.startsWith("/materials/")) {
    const encoded = doc.path
      .replace(/^\/materials\//, "")
      .split("/")
      .map(encodeURIComponent)
      .join("/");
    return `/view/materials/${encoded}`;
  }

  return null;
}

export function DocList({
  docs,
  programId,
}: {
  docs: DocumentRef[];
  programId?: string;
}) {
  if (!docs.length) return <p className="page-intro">No documents yet.</p>;

  return (
    <ul className="doc-list">
      {docs.map((doc) => {
        const viewer = viewerPath(programId, doc);
        return (
          <li key={doc.path} className="doc-item">
            <div>
              <strong>{doc.title}</strong>
              <div style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
                {String(doc.type).toUpperCase()}
              </div>
            </div>
            {viewer ? (
              <Link to={viewer}>Read</Link>
            ) : (
              <a href={doc.path} target="_blank" rel="noreferrer">
                {doc.type === "pdf" ? "Open PDF" : "Open"}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
