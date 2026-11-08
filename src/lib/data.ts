import programsData from "../data/programs.json";
import pastEuData from "../data/pastEu.json";
import fundingData from "../data/funding.json";
import extrasData from "../data/extras.json";
import type { FundingData, PastEuItem, Program } from "./types";
import { STATE_NAMES, STATE_ORDER } from "./types";

export const programs = programsData as Program[];
export const pastEu = pastEuData as PastEuItem[];
export const funding = fundingData as FundingData;
export const extras = extrasData as {
  projects: Array<{ title: string; path: string; type: string }>;
  samples: Array<{ title: string; path: string; type: string }>;
  treeDocs: Array<{ title: string; path: string; type: string }>;
};

export function getProgram(id: string): Program | undefined {
  return programs.find((p) => p.id === id);
}

export function programsByState(state: string): Program[] {
  return programs.filter((p) => p.state === state.toLowerCase());
}

export function stateSummaries() {
  return STATE_ORDER.map((code) => ({
    code,
    name: STATE_NAMES[code],
    count: programs.filter((p) => p.state === code).length,
  }));
}

export function isZeroFee(fee: string): boolean {
  return /\$0|^0\b|waived|none/i.test(fee);
}

export function docCount(): number {
  return (
    programs.reduce((n, p) => n + p.documents.length, 0) +
    pastEu.length +
    extras.projects.length +
    extras.samples.length +
    extras.treeDocs.length
  );
}
