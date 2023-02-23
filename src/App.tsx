import React, { useEffect, useState } from "react";
import { Destination, Header, Hero, Loader, Service } from "./components";

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
      </main>
    </div>
  );
}

export default App;
