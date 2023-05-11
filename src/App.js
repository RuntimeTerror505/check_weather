import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => (
   <section className="weather">
      <section className="weather__widget">
         <Header />
         <Content />
      </section>
   </section>
);

export default App;
