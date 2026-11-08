export type DocType = "pdf" | "md" | "txt" | "file";

export interface DocumentRef {
  title: string;
  path: string;
  type: DocType | string;
}

export interface Program {
  id: string;
  name: string;
  university: string;
  state: string;
  country: string;
  stage: string;
  deadline: string;
  fee: string;
  fundingNotes: string;
  greNotes: string;
  documents: DocumentRef[];
}

export interface PastEuItem {
  id: string;
  title: string;
  institution: string;
  country: string;
  path: string;
  type: string;
}

export interface FundingData {
  highlights: Array<{
    programId: string;
    name: string;
    fee: string;
    fundingNotes: string;
    stage: string;
  }>;
  programs: Array<{
    programId: string;
    name: string;
    university: string;
    state: string;
    stage: string;
    fee: string;
    fundingNotes: string;
    greNotes: string;
    deadline: string;
  }>;
  referenceDocs: DocumentRef[];
}

export const STATE_NAMES: Record<string, string> = {
  ny: "New York",
  ma: "Massachusetts",
  pa: "Pennsylvania",
  md: "Maryland",
  ca: "California",
  tx: "Texas",
  mn: "Minnesota",
  ut: "Utah",
  wa: "Washington",
};

export const STATE_ORDER = ["ny", "ma", "pa", "md", "ca", "tx", "mn", "ut", "wa"];
