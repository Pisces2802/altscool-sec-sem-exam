import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useFetch from "../Hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/userpagehr.css";

export default function User() {
  const [pageCount, setPageCount] = useState(1);

  const { loading, error, data } = useFetch(
    `https://api.github.com/users/pisces2802/repos`
  );

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <section>
      <Helmet>
        <title>User Public Repositories</title>
        <meta
          name="description"
          content="This is a page about the user repositories"
        />
      </Helmet>
      <h2 style={{ color: "#474E68", margin: "20px 0 10px" }}>
        List of Github Repositories
      </h2>
      {data?.slice(skip, skip + USERS_PER_PAGE).map((each, index) => {
        const repos = `${each.name}`;
        return (
          <li
            style={{
              margin: "20px auto",
              width: "70%",
              border: "1px solid #6C4AB6",
              backgroundColor: "rgb(108, 74, 182, 0.7)",
              padding: "5px",

              borderRadius: "20px",
            }}
            key={repos.toLowerCase().replaceAll(" ", "")}
          >
            <Link
              to={`/repos/${repos}`}
              style={{
                listStyle: "none",
                color: "#001253",
                textDecoration: "none",
              }}
            >{`${repos}`}</Link>
          </li>
        );
      })}

      <div style={{ margin: "20px" }}>
        {
          <button
            style={{
              color: "white",
              backgroundColor: "#404258",
              margin: "5px 5px",
              padding: "5px",
              width: "100px",
              boxShadow: "4px 4px 8px 1px rgba(0,0,0,0.5)",
              borderRadius: "20px 20px 20px 20px",
            }}
            disabled={pageCount <= 1}
            onClick={() => setPageCount((prev) => prev - 1)}
          >
            prev
          </button>
        }
        <p style={{ fontWeight: "bold" }}>
          Pages: {pageCount} of {USERS_PER_PAGE}
        </p>
        {
          <button
            style={{
              color: "white",
              backgroundColor: "#404258",
              margin: "5px",
              padding: "5px",
              width: "100px",
              boxShadow: "4px 4px 8px 1px rgba(0,0,0,0.5)",
              borderRadius: "20px 20px 20px 20px",
            }}
            disabled={pageCount >= USERS_PER_PAGE}
            aria-disabled={pageCount >= USERS_PER_PAGE}
            onClick={() => setPageCount((prev) => prev + 1)}
          >
            next
          </button>
        }
      </div>
      {Array.from({ length: USERS_PER_PAGE }, (value, index) => index + 1).map(
        (each) => (
          <button
            style={{
              color: "white",
              backgroundColor: "#404258",
              width: "50px",
              margin: "0 5px 0 5px",
              borderRadius: "20px 20px 20px 20px",
              padding: "5px",
            }}
            onClick={() => setPageCount(each)}
          >
            {each}
          </button>
        )
      )}
      <br />
      <hr className="hr" style={{ marginTop: "20px" }} />
      <Outlet />
    </section>
  );
}
