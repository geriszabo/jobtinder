import React, {useState} from "react";
import { motion } from "framer-motion";

function Buttons({ setLikeAction, likeAction }) {
  const [reverseButtons, setReverseButtons] = useState(false)


  return (
    <div className={`flex flex-row${reverseButtons && "-reverse"}  justify-around`}>
      <motion.button
        className="w-20 h-20 bg-white rounded-full flex justify-center items-center bg-gradient-to-br from-rose-400 to-rose-700 border-2 drop-shadow-md"
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 0.1,
          type: "spring",
          damping: 25,
          stiffness: 500,
        }}
        whileTap={{ scale: 0.9 }}

        onClick={() =>
          setLikeAction({
            ...likeAction,
            dislikePressed: !likeAction.dislikePressed,
          })
        }
        onMouseEnter={() =>{
          setLikeAction({
            ...likeAction,
            dislikeHovered: !likeAction.dislikeHovered,
          })
          setReverseButtons(!reverseButtons)
          }
        }
        onMouseLeave={() =>
          setLikeAction({
            ...likeAction,
            dislikeHovered: !likeAction.dislikeHovered,
          })
        }

      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-8 h-8"
          
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </motion.button>

      <motion.button
        className="w-20 h-20 bg-white rounded-full flex justify-center items-center bg-gradient-to-br from-green-400 to-green-700 border-2 drop-shadow-md"
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 0.1,
          type: "spring",
          damping: 25,
          stiffness: 500,
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() =>
          setLikeAction({
            ...likeAction,
            likePressed: !likeAction.likePressed,
          })
        }
        onMouseEnter={() =>
          setLikeAction({
            ...likeAction,
            likeHovered: !likeAction.likeHovered,
          })
        }
        onMouseLeave={() =>
          setLikeAction({
            ...likeAction,
            likeHovered: !likeAction.likeHovered,
          })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-8 h-8"
          
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </motion.button>
    </div>
  );
}

export default Buttons;
