import React from 'react'
import {motion} from "framer-motion"
import {classes} from "./Classnames"

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
    className={classes.header.container}>
        <h1 className={classes.header.firstChild}><span className='line-through'>Tind</span>er</h1>
        <h1 className={classes.header.secondChild}>Work</h1>
    </motion.div>
  )
}

export default Header