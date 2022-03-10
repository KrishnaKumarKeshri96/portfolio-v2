import { useState, useRef } from "react";

import "./scss/main.scss";

import Loader from "./components/Loader";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

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

  // Sections references
  const references = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  window.onload = () => showLoader(1000);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Header
        content={content.header}
        setContent={setContent}
        showLoader={showLoader}
        showHeader={showHeader}
      />
      <div className="sections">
        <Home content={content.home} refProperty={references.home} />
        <About content={content.about} refProperty={references.about} />
      </div>
    </>
  );
}

export default App;
