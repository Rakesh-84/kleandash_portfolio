import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Help from "./components/Help";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

// Page Imports
import Ready from "./components/Ready";
import Workflow from "./components/Workflow";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f0c08] text-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Help />
                <Service />
                <Workflow />
                <Ready />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
