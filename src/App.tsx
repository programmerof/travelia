import React, { useEffect, useState } from "react";
import {
  Destination,
  Experience,
  Gallery,
  Header,
  Hero,
  Loader,
  Service,
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
        <Experience />
        <Gallery />
      </main>
    </div>
  );
}

export default App;
