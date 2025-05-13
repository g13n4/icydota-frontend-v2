import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Page from "@/components/page/Page";
import App from "@/App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
