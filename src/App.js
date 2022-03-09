import { useState } from "react";

import "./scss/main.scss";

import Loader from "./components/Loader";
import Header from "./components/Header.jsx";

import dataJSON from "./data/english.js";

function App() {
  // Set page loader
  const [loading, setLoading] = useState(true);

  //set data
  const [content, setContent] = useState(dataJSON);
  const [showHeader, setShowHeader] = useState(window.innerWidth > 1000);

  const showLoader = (time) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, time);
  };

  window.onload = () => showLoader(1000);
  return loading ? (
    <Loader />
  ) : (
    <Header
      content={content.header}
      setContent={setContent}
      showLoader={showLoader}
      showHeader={showHeader}
    />
  );
}

export default App;
