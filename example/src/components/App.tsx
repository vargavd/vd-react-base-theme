// react imports
import * as React from "react";

// custom components
import Header from "./header/Header";


// state management
import { Provider } from "react-redux";
import { store } from "../store/store";


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <div style={{ height: "100vh", width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Map Placeholder
      </div>
    </Provider>
  );
};

export default App;
