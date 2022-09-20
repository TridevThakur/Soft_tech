import React, { useEffect } from "react";
import { useState } from "react";
import "./ima.css";
import axios from "axios";
import Card from "./Card";

function Posts() {
  const [Posts, setPosts] = useState([])
  useEffect(() => {
    axios
      .post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((result) => {
        setPosts(result.data.result)
      })
      .catch((error) => {});
  }, []);

  return <>
    <div className="container">
      <div className="row">
        
         { Posts.map((post)=>{

            return (
              <div className="col-md-4">
                <Card props={post} />
              </div>
            )
          })}
        
      </div>
    </div>
  </>;
}

export default Posts;
