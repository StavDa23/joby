import React from "react";
import "./App.css";
import "./wallpaper1.jpeg";
import Posts from "../Posts/Posts";
import posts_JSON from "../../posts.json";

function App() {
  return (
    <div className="app">
      <Posts posts={posts_JSON} />
    </div>
  );
}

export default App;
