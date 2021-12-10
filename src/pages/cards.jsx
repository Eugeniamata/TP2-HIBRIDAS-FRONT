import React from "react";
import Card from "./card";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: "Megatlon",
    image: image1,
    text: "Megatlon es lo mas del mundo ", 
    url: "https://megatlon.com/",
   
  },
  {
    id: 2,
    title: "Sport Club",
    image: image2,
    url: "https://www.sportclub.com.ar/",
    text: "Megatlon", 
  },
  {
    id: 3,
    title: "BIGG Fit",
    text: "Megatlon", 
    image: image3,
    url: "https://bigg.fit/",
   
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
