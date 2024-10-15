// react imports
import * as React from "react";

// custom components
import Header from "./header/Header";
import Map from "./map/Map";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Map />
    </>
  );
};

export default App;
