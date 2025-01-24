import React, { useState } from "react";

const Kontaktoss = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Skjemaet er sendt!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Navn:
            <input type="text" required />
          </label>
        </div>
        <div>
          <label>
            E-post:
            <input type="email" required />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Kontaktoss;
