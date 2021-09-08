import React, { useState, useEffect } from "react";
import "../Styles/App.scss";
import axios from "axios";

//Component imports
import Card from "../Components/Card.js";

//Img imports
import Rabbit from "../assets/Rabbit.png";
import Talkie from "../assets/Talkie.png";
import Shield from "../assets/Shield.png";

const imgs = [Talkie, Rabbit, Shield];

const apiURI = "https://api.mwi.dev/content/home";

export default function App() {
  const [content, setContent] = useState();

  useEffect(() => {
    axios.get(apiURI).then(res => {
      setContent(res.data.data);
    });
  }, []);

  return (
    <div className='container'>
      <div className='card_container'>
        {content &&
          content.map((elem, index) => {
            return (
              <Card
                key={index}
                img={imgs[index]}
                title={elem.title}
                content={elem.content}
              />
            );
          })}
      </div>
    </div>
  );
}
