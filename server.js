const uuid = require("uuid").v4;

const express = require("express");

const app = express();

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

const fs = require("fs");

app.get("/api/jobs", (req, res) => {
  const posts = JSON.parse(fs.readFileSync("./posts.json"));
  res.send(posts);
});

app.get("/api/jobs/:id", (req, res) => {
  const { id } = req.params;
  const posts = JSON.parse(fs.readFileSync("./posts.json"));
  const post = posts.find((post) => post.id === id);
  res.send(post);
});

app.post('/api/jobs',(req,res) => {
    const posts = JSON.parse(fs.readFileSync("./posts.json"));
 
    const newPost = {
        "id": uuid(),
        "title": "test", 
        "company": "test-point",
        "description": "test",
        "salary": 0,
        "tags": [],
        "location": "Test",
        "skills":{
            "required":[],
            "advantage":[]
        }
    }
    posts.push(newPost);
    fs.writeFileSync("./posts.json",JSON.stringify(posts));
    res.send(newPost);
})
