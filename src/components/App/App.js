import React from "react";

// import styles from "../App/App.module.css";
import Header from "../Header/Header";
import About from "../About/About";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
