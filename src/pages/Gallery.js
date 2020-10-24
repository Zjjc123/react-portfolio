import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import ImageGrid from "../components/Gallery/ImageGrid";

function Gallery() {
  return (
    <div>
      <Jumbotron style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} className="bg-transparent jumbotron-fluid">
        <ImageGrid />
      </Jumbotron>
    </div>
  )
}

export default Gallery;