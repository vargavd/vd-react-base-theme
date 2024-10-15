// react imports
import * as React from "react";

// custom components
import Header from "./header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div style={{ height: "100vh", width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Map Placeholder
      </div>
    </>
  );
};

export default App;
