import React from 'react'
import { motion} from "framer-motion";

export const Tile2  = ({renderSpeed,initialScaleProp }) => {
  console.log(renderSpeed)
  console.log(initialScaleProp)
  return (
    <div style={{ 
    height:"100%",
  }}
  > 
    <motion.div
    initial={{ scale: initialScaleProp ,
      opacity: 1,
        backgroundColor: "#eee4da",
        // textAlign: "center",
        // textAlign: 'center',
                  // verticalAlign: 'middle',
                  // justifyContent: 'center'

         }}
        style={{ 
          // columnFill: "auto"
          // boxsizing:  "border-box",
          width: "100%",
          height:"100%",
          fontWeight: "bold",
          font:'Clear sans',
          // verticalAlign: 'middle',
          // justifyContent: 'center'
padding:1,
fontSize: '45px',
      // x:-14 
    }}
        
    exit={{ opacity: 1 }}
    animate={{  scale: 1 }}
    transition={{
        opacity: 1,
        duration: Number(renderSpeed),
        // ease: "easeIn"
      }}
    
    >
    2
    </motion.div>
    
    </div>
  )
}


