import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Charts,
} from "./components";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);

serviceWorker.unregister();
