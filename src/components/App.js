import React from "react";
import blogData from "../data/blog";
import Header from './Header'
import ArticleList from './ArticleList'
import About from './About'

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList articles={blogData.posts} />
    </div>
  );
}

export default App;
