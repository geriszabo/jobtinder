import "./App.css";

import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Buttons from "./Components/Buttons";
import Match from "./Components/Match";
import { persons } from "./Components/Data";

function App() {
  const [likeAction, setLikeAction] = useState({
    likeHovered: false,
    likePressed: false,
    dislikeHovered: false,
    dislikePressed: false,
  });

  return (
    //Container of the whole app
    <motion.div className="bg-gradient-to-br from-purple-700 to-cyan-400 w-screen h-screen flex items-center flex-col items-center"

    
    >
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
      {likeAction.likePressed && <Match likeAction={likeAction} setLikeAction={setLikeAction}></Match>}
    </motion.div>
  );
}

export default App;
