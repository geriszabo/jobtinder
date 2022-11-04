import React from 'react'
import {motion} from "framer-motion"

function Header() {
  return (
    <motion.div 
    whileHover={{ scale: 1.1 }}
    transition={{
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500}
    }
    style={{userSelect: "none"}}
    className='text-6xl font-bold color-gradient-to-r from-red-500 to-cyan-500 relative drop-shadow-md m-5'>
        <h1 className='text-6xl text-white'><span className='line-through'>Tind</span>er</h1>
        <h1 className='absolute -left-5 top-0 text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 -rotate-12 '>Work</h1>
    </motion.div>
  )
}

export default Header