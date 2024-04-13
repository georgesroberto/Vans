import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Components/Navigation";
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  return <Navigation />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
