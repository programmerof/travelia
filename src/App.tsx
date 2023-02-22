import React, { useEffect, useState } from "react";
import { Header, Loader } from "./components";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  return (
    <div className="App">
      {/* {loading && <Loader />} */}
      <Header />
    </div>
  );
}

export default App;
