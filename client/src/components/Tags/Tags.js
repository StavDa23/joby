import React from "react";
import "./Tags.css";

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <p className="tag" key={index}>
          {tag}
        </p>
      ))}
    </div>
  );
}

export default Tags;
