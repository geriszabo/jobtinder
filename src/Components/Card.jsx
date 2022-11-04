import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Card({
  img1,
  img2,
  name,
  age,
  rotate,
  translateX,
  translateY,
  likeAction,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`
      relative 
      duration-500
      ${likeAction.likePressed ? "translate-x-96 rotate-12 " : ""}
      ${likeAction.likeHovered ? "translate-x-20 rotate-12 " : ""}
      ${likeAction.dislikePressed ? "-translate-x-96 -rotate-12 " : ""}
      ${likeAction.dislikeHovered ? "-translate-x-20 -rotate-12 " : ""}
      `}
      drag
      dragConstraints={{
        left: 0,
        bottom: 0,
        top: 0,
        right: 0,
      }}
    >
      <motion.div
        //Animation settings
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          rotate: rotate,
          translateX: translateX,
          translateY: translateY,
        }}
        transition={{
          layout: {
            duration: 0.5,
            type: "spring",
          },
          delay: 0,
        }}
        whileHover={{ scale: 1.05 }}
        layout
        //Functional settings
        onClick={() => setIsOpen(!isOpen)}
        //Classes
        className="bg-white rounded-md shadow-md p-0  text-gray-700 max-w-[18rem] max-h-[34rem] drop-shadow-xl overflow-scroll z-10"
      >
        {/* Card image with buttons*/}
        <div
          className="flex flex-row overflow-x-auto snap-mandatory snap-x scrollbar-hide"
          style={{ border: "1px solid red red" }}
        >
          <button
            className="absolute left-0 top-40 bg-white h-10 w-10 rounded-full"
            // onClick={(e) => e.stopPropagation()}
          >
            left
          </button>
          <motion.img
            draggable="false"
            layout
            className="object-contain w-96  snap-center"
            src={img1}
            alt={`picture of ${name}`}
          />
          <motion.img
            draggable="false"
            layout
            className="object-cover w-96  snap-center"
            src={img2}
            alt={`picture of ${name}`}
          />
          <button
            className="absolute right-0 top-40 bg-white h-10 w-10 rounded-full"
            onClick={(e) => e.stopPropagation()}
          >
            right
          </button>
        </div>

        {/* Card header */}
        <motion.h2 className="text-2xl py-4 px-2" layout="position">
          {name}, {age}
        </motion.h2>

        {/* Bio */}
        {isOpen && (
          <motion.div
            //Animation settings
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="px-2"
            className="text-sm px-3"
          >
            <p>Hi I'm Geri 🙋🏻‍♂️</p>
            <br />

            <p>
              I'm looking for a serious work relationship as a developer. React
              would be my preferred framework of choice, but I'm planning to
              learn TS and Angular in the very near future. 👨‍💻
              <br />
              <br />
              Right now I'm scripting a cloud based☁️ low-code platform for a
              living in Budapest Hungary.
            </p>
            <br />
            <p>
              You can find me on <a href="https://www.linkedin.com/in/gergoszabo87/" target="_blank" className="text-blue-500 font-bold">LinkedIn</a> and on <a href="https://github.com/geriszabo" target="_blank" className="text-blue-500 font-bold">Github</a> as well.
            </p>
            <br />
            <p>
              I speak native hungarian and I'm pretty confident in my english
              and german skills as well. 🇭🇺🇬🇧🇩🇪
            </p>
            <br />
            <p></p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Card;
