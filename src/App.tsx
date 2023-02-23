import React, { useEffect, useState } from "react";
import { Header, Hero, Loader } from "./components";

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
      </main>
    </div>
  );
}

export default App;
