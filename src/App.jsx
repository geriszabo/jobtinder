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
    
    <motion.div className="bg-gradient-to-br from-purple-700 to-cyan-400 w-screen h-screen sm:min-h-screen flex items-center flex-col items-center overflow-x-hidden"
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{
      duration: 0.4,
      delay: 0.4,
      staggerChildren: 1,
      type: "spring",
      bounce: 0.5,
    }}
    
    >
      {/* A header obviously */}
      <Header></Header>

      {/* Container of all the cards being mapped*/}
      {likeAction.likePressed ? "" : <div className="flex flex-col justify-between items-between px-4 pb-4 gap-5">
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
      </div>}

      {/* Match screen */}
      {likeAction.likePressed && <Match likeAction={likeAction} setLikeAction={setLikeAction}></Match>}
    </motion.div>
  );
}

export default App;
