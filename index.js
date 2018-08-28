import React from "react";
import { render } from "react-dom";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
const App = () => (
  <Header />
  // <Main/>
  // <Footer/>
);

render(<App />, document.getElementById("root"));
