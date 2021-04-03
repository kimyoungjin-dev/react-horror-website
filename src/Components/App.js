import React, { useState } from "react";
import GlobalStyles from "Components/GlobalStyles";
import Router from "Components/Router";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <GlobalStyles />
      <Router toggle={toggle} isOpen={isOpen} />
    </>
  );
};

export default App;
