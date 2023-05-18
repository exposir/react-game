import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./tailwind.css";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://5a44dcc96c4f41e096eb5470468f4bb4@o4504489380478976.ingest.sentry.io/4505203589906432",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
