import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {loading ? (
        <PacmanLoader
        color="#fec940" size={30} />
      ) : (
        <div>
          <h1>Page Content</h1>
          <p>The content is loaded!</p>
          {/* <img src="/images/loading-gif.gif" alt="" className="w-[50%]" /> */}
        </div>
      )}
    </div>
  );
}

export default App;
