import React from "react";
import "./Figure.css";

const Figure = ({ data }) => {
  return (
    <figure>
      <h3>
        {data.title} - {data.date}
      </h3>
      <img src={data.url} alt={data.title} />
      <figcaption>{data.copyright}</figcaption>
      <p>{data.explanation}</p>
    </figure>
  );
};

export default Figure;
