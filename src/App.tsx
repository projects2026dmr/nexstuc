import { HashRouter, Routes, Route } from "react-router-dom";
import { services } from "./data/services";
import HomePage from "./pages/HomePage";
import PillarPage from "./pages/PillarPage";

/*
 * NexStuc – Strak vakmanschap voor heel Nederland
 * 
 * Architecture:
 * - Homepage: / (one-page with anchor navigation)
 * - Pillar pages: /stukadoor, /stucwerk, /latexspuiten, etc.
 * - Future: /{service}/{city} for 96 location pages per service
 *
 * Using HashRouter for single-file build compatibility.
 * For production Vercel deployment, switch to BrowserRouter
 * and configure rewrites in vercel.json.
 */

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {services.map((service) => (
          <Route
            key={service.slug}
            path={`/${service.slug}`}
            element={<PillarPage service={service} />}
          />
        ))}
        {/*
          // ============================================================
          // PROGRAMMATIC SEO: Location page routes
          // Future route pattern: /{service.slug}/:city
          // Example: /stukadoor/amsterdam, /stucwerk/rotterdam
          // These will be generated programmatically for 96 cities
          // ============================================================
        */}
      </Routes>
    </HashRouter>
  );
}
