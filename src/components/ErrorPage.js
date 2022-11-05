import React from "react";

export default function ErrorPage() {
  return (
    <section>
      <div style={{ marginTop: "50px", height: "100vh" }}>
        <h1 style={{ color: "red", margin: "0 auto", fontSize: "xx-large" }}>
          Error 404
        </h1>
        <p style={{ color: "red", fontSize: "x-large", marginTop: "5px" }}>
          This page cannot be found!!!
        </p>
      </div>
    </section>
  );
}
