import "./App.css"

import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Buttons from "./Components/Buttons";
import Match from "./Components/Match";
import Geri1 from "./Images/geri.jpg";
import Geri2 from "./Images/geri2.png";
import Person1 from "./Images/person1.jpg";
import Person2 from "./Images/person2.jpg";
import Carousel from "./Components/Carousel";

function App() {
  const [likeAction, setLikeAction] = useState({likeHovered: false, likePressed: false, dislikeHovered: false, dislikePressed: false})

 


  //Database of persons who have cards
  const persons = [
    // {
    //   name: "Sam",
    //   age: 135,
    //   bio: "Hi I'm An idiot",
    //   img1: Person1,
    //   rotate: 25,
    //   translateY: "1rem",
    //   translateX: "5rem"
    // },
    // {
    //   name: "Igor",
    //   age: 69,
    //   bio: "Well what a fucking waste of time this is",
    //   img1: Person2,
    //   rotate: -25,
    //   translateY: "1rem",
    //   translateX: "-5rem"
    // },
    {
      name: "Geri",
      age: 35 + "🚀",
      img1: Geri1,
      img2: Geri2,
      rotate: 0,
      translateY: "0rem",
      translateX: "0rem",
    },
  ];

  return (
    //Container of the whole app
    <div className="bg-gradient-to-br from-red-400 to-rose-600 w-screen h-screen flex items-center flex-col items-center">
      {/* A header obviously */}
      <Header></Header>

      {/* Container of all the cards being mapped*/}
      <div className="height-fix flex flex-col justify-between items-between  h-screen px-4 pb-4">
        {persons.map((e, i) => (
          <Card
            key={i}
            name={e.name}
            age={e.age}
            img1={e.img1}
            img2={e.img2}
            rotate={e.rotate}
            translateX={e.translateX}
            translateY={e.translateY}
            likeAction={likeAction}
          ></Card>
        ))}
        <Buttons
        setLikeAction={setLikeAction}
          likeAction={likeAction}
        ></Buttons>
      </div>
     {likeAction.likePressed && <Match></Match>}

  
    </div>
  );
}

export default App;
