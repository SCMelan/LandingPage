import React from "react";
import Footer from "./components/footerComp/footerComponent.tsx";
import Header from "./components/headerComp/headerComponent.tsx";
import Main from "./components/mainComp/mainComponent.tsx";
import "./scss/app.scss";

function App() {
  return (
    <div className="Body">
      <Header />
      <Footer />
      <Main />
    </div>
  );
}

export default App;
