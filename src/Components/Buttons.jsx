import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeartIcon, CrossIcon } from "./IconsImages";
import { classes } from "./Classnames";

function Buttons({ setLikeAction, likeAction }) {
  const [reverseButtons, setReverseButtons] = useState(false);

  return (
    <div
      className={`flex flex-row${reverseButtons && "-reverse"}  justify-around`}
    >
      <motion.button
        className={`${classes.buttons.buttons} from-rose-400 to-rose-700`}
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
        onMouseEnter={() => {
          setLikeAction({
            ...likeAction,
            dislikeHovered: true,
          });
          setReverseButtons(!reverseButtons);
        }}
        onMouseLeave={() =>
          setLikeAction({
            ...likeAction,
            dislikeHovered: false,
          })
        }
      >
        <CrossIcon></CrossIcon>
      </motion.button>

      <motion.button
      className={`${classes.buttons.buttons} from-green-400 to-green-700`}
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
        <HeartIcon></HeartIcon>
      </motion.button>
    </div>
  );
}

export default Buttons;
