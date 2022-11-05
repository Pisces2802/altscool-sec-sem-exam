import React from "react";
import "../styles/content.css";

export default function Content({ children }) {
  return <section className="content">{children}</section>;
}
