import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Card from "./Card";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <Card />
    <div class="attribution">
      <br />
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
      Coded by <a href="https://github.com/alencardotpy">alencarDotPy</a>.
    </div>
  </>
);

reportWebVitals(sendToVercelAnalytics);
