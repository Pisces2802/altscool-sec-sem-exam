import React from "react";
import "../styles/errorpage.css";

export default function Errorboundarypage({ error, resetErrorBoundary }) {
  return (
    <section className="Error_message">
      <p
        style={{
          color: "red",
          fontWeight: "bolder",
          fontSize: "xx-large",
          marginTop: "20px",
        }}
      >
        Something went wrong!!!
      </p>
      <button className="btn_error" onClick={resetErrorBoundary}>
        Go back Home
      </button>
    </section>
  );
}
