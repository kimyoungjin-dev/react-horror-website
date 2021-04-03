import React from "react";
import GlobalStyles from "Components/GlobalStyles";
import Router from "Components/Router";
import Hero from "Components/Hero";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
      <Hero />
    </>
  );
};

export default App;
