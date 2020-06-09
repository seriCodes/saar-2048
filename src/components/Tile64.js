import React from 'react'
import { motion} from "framer-motion";

export const Tile64 = ({renderSpeed}) => {
  // console.log(renderSpeed)
  return (
    <div style={{ 
      height:"100%",
    }}>
    <motion.div
    initial={{ scale: 0.5,opacity: 1,
        backgroundColor: "#f65e3b" }}
        style={{ 
          width: "100%",
          height:"100%",
          fontWeight: "bold",
          font:'Clear sans',
                    color: '#f9f6f2',

padding:1,
fontSize: '45px',
    }}
    exit={{ opacity: 1 }}
    animate={{  scale: 1 }}
    transition={{
        opacity: 1,
        duration: Number(renderSpeed),
        // ease: "easeIn"
      }}
    
    className="col">
64    </motion.div>
    
    </div>
  )
}


