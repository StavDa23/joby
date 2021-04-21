import React from "react";
import Skills from "../Skills/Skills";
import Tags from "../Tags/Tags";
import "./Post.css";
import { IconContext } from "react-icons";
import { MdWork, MdLocationOn } from "react-icons/md";

function Post({ post, isOpen, handleClick }) {
  return (
    <div className="post" onClick={() => handleClick(post.id)}>
      <h1 className="job-title">{post.title}</h1>
      <div className="secondary-details">
        <IconContext.Provider value={{ className: "work-icon" }}>
          <MdWork />
        </IconContext.Provider>
        <p className="company">{post.company}</p>
        <IconContext.Provider value={{ className: "location-icon" }}>
          <MdLocationOn />
        </IconContext.Provider>
        <p className="company">{post.location}</p>
      </div>
      <p className="description">{post.description}</p>
      {isOpen && <Skills skills={post.skills.required} type="required" />}
      {isOpen && post.skills.advantage.length > 0 && (
        <Skills skills={post.skills.advantage} type="advantage" />
      )}
      <Tags tags={post.tags} />
    </div>
  );
}

export default Post;
