import React from "react";
import { motion } from "framer-motion";

function Match({ likeAction, setLikeAction }) {
  return (
    <motion.div
      className="absolute flex flex-col justify-center items-center min-h-full w-screen bg-gradient-to-br from-green-500 to-cyan-500 "
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.4,
        staggerChildren: 1,
        type: "spring",
        bounce: 0.2,
      }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white rounded-md flex flex-col justify-center items-center p-2">
        <div className=" italic flex justify-center items-center flex-col text-6xl leading-3 p-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
          <h3>It's a</h3>
          <motion.h1 className=" text-8xl font-black tracking-tighter text-fill">
            MATCH!
          </motion.h1>
          <motion.h1 className="text-transparent text-stroke text-8xl font-black tracking-tighter text-fill leading-3">
            MATCH!
          </motion.h1>
          <motion.h1 className="text-stroke text-8xl font-black tracking-tighter text-fill leading-16">
            MATCH!
          </motion.h1>
        </div>
      </div>

      {/* Linkedin CTA */}
      <div className="relative flex items-center flex-col m-4 group">
        <div className="absolute bg-gradient-to-r from-red-300 to-pink-300 -inset-1 blur opacity-75 duration-500 group-hover:opacity-100"></div>
            <a href="https://www.linkedin.com/in/gergoszabo87/">
        <button className="relative flex items-center justify-center bg-white rounded-md p-3 gap-3 ">
          <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#0072b1"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">

          Hit me up on LinkedIn if you think we could be a good team!
          </span>
        </button>
            </a>
      </div>

      {/* this is a form if someone might want to send an email */}
      {/* <form
        action=""
        className="flex justify-between gap-2 mt-10 h-10 bg-white rounded-md p-2 w-2/6"
      >
        <input
          type="text"
          placeholder="write me an email.."
          className="flex grow"
        />

        <button
          type="submit"
          className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 "
        >
          SUBMIT
        </button>
      </form> */}
    </motion.div>
  );
}

export default Match;
