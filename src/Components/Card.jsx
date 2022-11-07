import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { classes } from "./Classnames";
import { Bio } from "./Data";
import { ChevronRight, ChevronLeft } from "./IconsImages";

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

  const pic1Ref = useRef();
  const pic2Ref = useRef();

  return (
    <motion.div
      className={`

      relative 
      duration-500
      ${likeAction.likePressed ? "translate-x-96 rotate-12 " : ""}
      ${likeAction.likeHovered ? "translate-x-20 rotate-12 " : ""}
      
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
        className={classes.card.firstDiv}
      >
        {/* Card image with buttons*/}
        <div className={classes.card.pic}>
          <button
            className={`left-0 ${classes.card.picButtons}`}
            onClick={(e) => {
              pic1Ref.current.scrollIntoView({ behavior: "smooth" });
              e.stopPropagation();
            }}
          >
            <ChevronLeft></ChevronLeft>
          </button>
          <motion.img
            draggable="false"
            layout
            className={classes.card.images}
            src={img1}
            alt={`picture of ${name}`}
            ref={pic1Ref}
          />

          <motion.img
            draggable="false"
            layout
            className={classes.card.images}
            src={img2}
            alt={`picture of ${name}`}
            ref={pic2Ref}
          />
          <button
            className={`right-0 ${classes.card.picButtons}`}
            onClick={(e) => {
              pic2Ref.current.scrollIntoView({ behavior: "smooth" });
              e.stopPropagation();
            }}
          >
            <ChevronRight></ChevronRight>
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
            <Bio></Bio>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Card;
