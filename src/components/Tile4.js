import React from 'react'

import { motion} from "framer-motion";

export const Tile4 = ({renderSpeed, initialScaleProp}) => {
  console.log(renderSpeed)
  console.log(initialScaleProp)

  return (
    <div style={{ 
    height:"100%",
  }}>
    <motion.div
    initial={{ scale: initialScaleProp,
    opacity: 1,
        backgroundColor: "#ede0c8" }}

        style={{ 
          width: "100%",
          height:"100%",
          fontWeight: "bold",
          font:'Clear sans',
padding:1,
fontSize: '45px',
    }}
    
    exit={{ opacity: 1 }}
    animate={{  scale: 1 }}
    transition={{
        opacity: 1,
        // scale: 11,
        duration: Number(renderSpeed),
        // ease: "easeIn"
      }}
    
    >
        4
    </motion.div>
    
    </div>
  )
}


