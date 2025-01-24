import React, { useState } from "react";
import Header from "./components/Header";
import Hovedside from "./components/Hovedside";
import Omoss from "./components/Omoss";
import Kontaktoss from "./components/Kontaktoss";
import "./styles.css";

const App = () => {
  const [page, setPage] = useState("Hovedside");

  let Content;
  if (page === "Hovedside") Content = <Hovedside />;
  else if (page === "Omoss") Content = <Omoss />;
  else if (page === "Kontaktoss") Content = <Kontaktoss />;

  return (
    <div>
      <Header setPage={setPage} />
      <main>{Content}</main>
    </div>
  );
};

export default App;
