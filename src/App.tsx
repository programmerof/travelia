import React, { useEffect, useState } from "react";
import {
  CTA,
  Destination,
  Experience,
  Footer,
  Gallery,
  Header,
  Hero,
  Loader,
  Service,
  TripPlanner,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="App">
      {/* {loading && <Loader />} */}
      <Router>
        <Header />
        <Routes>
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>

      <main>
        <Hero />
        <Service />
        <Destination />
        <TripPlanner />
        <Experience />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
