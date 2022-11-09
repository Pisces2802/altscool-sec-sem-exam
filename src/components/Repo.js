import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function Repo() {
  let { repoId } = useParams();
  console.log(repoId);

  return (
    <section>
      <Helmet>
        <title>User repository</title>
        <meta name="description" content="This is a page about a repository" />
      </Helmet>
      <h2 style={{ color: "#474E68" }}>Repository</h2>
      <br />
      <p
        style={{
          margin: "20px auto",
          width: "70%",
          border: "1px solid #6C4AB6",
          backgroundColor: "#8D72E1",
          padding: "5px",

          borderRadius: "20px",
        }}
      >
        {repoId}
      </p>
    </section>
  );
}
