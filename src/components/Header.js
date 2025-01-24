import React from "react";

const Header = ({ setPage }) => {
  return (
    <header>
      <nav>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
          <li>
            <button onClick={() => setPage("Hovedside")}>Hovedside</button>
          </li>
          <li>
            <button onClick={() => setPage("Omoss")}>Om Oss</button>
          </li>
          <li>
            <button onClick={() => setPage("Kontaktoss")}>Kontakt Oss</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
