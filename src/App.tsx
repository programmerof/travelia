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

import Test1 from "./components/Test1";
import Test from "./components/Test/Test";
import Form from "./components/Form/Form";

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
        {/* <Test /> */}
        <Routes>
          <Route path="/service" element={<Service />} />
          <Route path="/cta" element={<CTA />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/header" element={<Header />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/loader" element={<Loader />} />
          {/* <Route path="/service" element={<Service />} /> */}
          {/* <Route path="/trip-planner" element={<TripPlanner />} /> */}
          <Route path="/Form" element={<Form />} />

        </Routes>
      </Router>
      <main>
        <Hero />
        {/* <Test1 /> */}
        <Service />
        <Destination />
        <Form/>
        {/* <TripPlanner /> */}
        <Experience />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
