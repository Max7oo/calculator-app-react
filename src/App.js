import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import { useState } from "react";

function App() {
  const [result, setResult] = useState([0]);

  return (
    <>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home result={result} setResult={setResult} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
