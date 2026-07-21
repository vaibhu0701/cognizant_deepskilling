import React from "react";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  return (

    <div style={{ padding: "20px" }}>

      <BookDetails />

      <hr />

      <BlogDetails />

      <hr />

      <CourseDetails />

    </div>

  );

}

export default App;