import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { StatesPage } from "./pages/StatesPage";
import { StatePage } from "./pages/StatePage";
import { ProgramPage } from "./pages/ProgramPage";
import { FundingPage } from "./pages/FundingPage";
import { PastEuPage } from "./pages/PastEuPage";
import { DocViewerPage } from "./pages/DocViewerPage";

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="states" element={<StatesPage />} />
          <Route path="states/:state" element={<StatePage />} />
          <Route path="programs/:id" element={<ProgramPage />} />
          <Route path="programs/:id/docs/*" element={<DocViewerPage />} />
          <Route path="funding" element={<FundingPage />} />
          <Route path="past-eu" element={<PastEuPage />} />
          <Route path="view/materials/*" element={<DocViewerPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
