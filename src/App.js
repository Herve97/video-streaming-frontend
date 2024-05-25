import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Index from "./components/Layout";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  //
  return (
    <>
      <Index isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </>
  );
}

export default App;
