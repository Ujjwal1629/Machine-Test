import axios from "axios"; //i am using axios to fetch the data from the api
import React, { useEffect, useState } from "react";
import "./MainContent.css";

export default function MainContent() {
  //using the useState hook to store the data
  const [video, setVideo] = useState([]);
  //using the useEffect hook to display the data
  useEffect(() => {
    axios
      .get("https://api.ineedaword.org/video?showcaseId=7769133")
      .then((res) => {
        console.log(res.data);
        setVideo(res.data.data.files); //fetching the nested data from the api
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="main_content">
      <div className="main_heading">
        <h1>Movies</h1>
        <p>See All</p>
      </div>
      <div className="movies_list">
        {/* mapping through the video array and displaying the elements */}
        {video.map((element, index) => (
          <div key={index} className="movies">
            <img src={element.thumbnail} alt="" />
            <div className="movies_content">
              <h1>{element.name}</h1>
              <video muted autoPlay loop>
                <source src={element.uri} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
