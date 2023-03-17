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

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  return (
    <div className="App">
      {/* {loading && <Loader />} */}
      <Header />
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
