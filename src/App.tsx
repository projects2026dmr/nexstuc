import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { services } from "./data/services";
import HomePage from "./pages/HomePage";
import PillarPage from "./pages/PillarPage";

import StukadoorCityPage from "./pages/stukadoor/[citySlug]";
import StucwerkCityPage from "./pages/stucwerk/[citySlug]";
import SpackspuitenCityPage from "./pages/spackspuiten/[citySlug]";
import SchilderwerkCityPage from "./pages/schilderwerk/[citySlug]";
import BetonCireCityPage from "./pages/beton-cire/[citySlug]";
import BadkamerrenovatieCityPage from "./pages/badkamerrenovatie/[citySlug]";
import LatexspuitenCityPage from "./pages/latexspuiten/[citySlug]";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ServiceLocationTemplateRouterWrapper = ({ service }) => {
  switch (service.slug) {
    case "stukadoor":
      return <StukadoorCityPage />;
    case "stucwerk":
      return <StucwerkCityPage />;
    case "spackspuiten":
      return <SpackspuitenCityPage />;
    case "schilderwerk":
      return <SchilderwerkCityPage />;
    case "beton-cire":
      return <BetonCireCityPage />;
    case "badkamerrenovatie":
      return <BadkamerrenovatieCityPage />;
    case "latexspuiten":
      return <LatexspuitenCityPage />;
    default:
      return <div>Not Found</div>;
  }
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {services.map((service) => (
          <Route
            key={service.slug}
            path={`/${service.slug}`}
            element={<PillarPage service={service} />}
          />
        ))}

        {services.map((service) => (
          <Route
            key={`${service.slug}-city`}
            path={`/${service.slug}/:citySlug`}
            element={<ServiceLocationTemplateRouterWrapper service={service} />}
          />
        ))}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
