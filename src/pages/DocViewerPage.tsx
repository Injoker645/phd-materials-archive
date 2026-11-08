import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getProgram } from "../lib/data";

function decodeSplat(splat: string | undefined): string {
  if (!splat) return "";
  return splat
    .split("/")
    .map((part) => {
      try {
        return decodeURIComponent(part);
      } catch {
        return part;
      }
    })
    .join("/");
}

export function DocViewerPage() {
  const params = useParams();
  const programId = params.id;
  const splat = decodeSplat(params["*"]);

  const filePath = programId
    ? `/materials/programs/${programId}/${splat}`
    : splat
      ? `/materials/${splat}`
      : "";

  const label = splat.split("/").pop() || "Document";
  const program = programId ? getProgram(programId) : undefined;
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const isMarkdown = useMemo(() => /\.md$/i.test(filePath), [filePath]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError("");
      try {
        if (!filePath) throw new Error("Missing document path.");
        const res = await fetch(filePath);
        if (!res.ok) throw new Error(`Could not load document (${res.status}).`);
        const body = await res.text();
        if (!cancelled) setText(body);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Load failed.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [filePath]);

  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        {program ? (
          <>
            <Link to={`/programs/${program.id}`}>{program.name}</Link>
            <span>/</span>
          </>
        ) : null}
        <span>{label}</span>
      </nav>

      <h1 className="page-title">{label}</h1>
      {program ? (
        <p className="page-intro">
          From <Link to={`/programs/${program.id}`}>{program.name}</Link>
        </p>
      ) : (
        <p className="page-intro">Archive document</p>
      )}

      {loading ? <p>Loading…</p> : null}
      {error ? <p style={{ color: "var(--warn)" }}>{error}</p> : null}

      {!loading && !error ? (
        isMarkdown ? (
          <article className="markdown">
            <ReactMarkdown>{text}</ReactMarkdown>
          </article>
        ) : (
          <pre
            className="markdown"
            style={{
              whiteSpace: "pre-wrap",
              background: "rgba(255,255,255,0.65)",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              borderRadius: "12px",
              padding: "1.1rem",
            }}
          >
            {text}
          </pre>
        )
      ) : null}
    </>
  );
}
