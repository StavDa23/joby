import React from "react";
import "./App.css";
import "./wallpaper1.jpeg";
import Posts from "../Posts/Posts";
import posts_JSON from "../../posts.json";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app">
        <div className="sidebar"></div>
        <Posts posts={posts_JSON} />
        <div className="sidebar"></div>
      </div>
    </div>
  );
}

export default App;
