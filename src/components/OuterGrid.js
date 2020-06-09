import React, {useState,useEffect} from "react";
import { gameArray } from "../logic/array";
import {slideTileInbrowser, makeArrayObjectsPositionStaticId, isLose,render,makeMove,resetIsMergedThisTurn ,isWon,add2or4toArray,deleteIsNew,removeAnimationClassesFromAllElements} from "../logic/functions";
import { motion} from "framer-motion";
import { Tile2} from "../components/Tile2";
// import "../style";
import '../style/outerGrid.css';
import { MyComponent } from "./MotionPlay";
// import "../style/outerGrid";
import "../style/animations.css";



// document.onkeydown = function() {
//     console.log(window.event.keyCode)
//     if((/(37|38|39|40)/).exec(  window.event.keyCode) ){
   
//     // if((window.event.keyCode+"").exec(/(37|38|39|40)/) ){
//       makeMove(window.event.keyCode)

//    }
//        else{
//         alert("press an arrow")
//        }
// };

let enableEvents=false;//Prevents from firing more than one event simultanously . must be outside the component for not reinitialized after every new render.
let atLeastOneMAkeMovewasSuccessful=null
let keyCode=null
let newRender0=null

let newRender1=null

let newRender2=null
let newRender3=null
let newRender4=null
let useEffectTimeForSetTimeout= 110
let isInitialRendering=true

console.log("enableEvents BEFORE the START of the component",enableEvents)

export const OuterGrid = () => {

  console.log("enableEvents RIGHT AFTER the START of the component",enableEvents)
  
  ////initialization useEffect
  useEffect(() => {
    console.log("to prevent events from firing at initialization of the game before the end of time of other use effects",enableEvents)

      const timer = setTimeout(() => {
        console.log('now the game can begin',enableEvents)
        enableEvents=true
        isInitialRendering=false

        add2or4toArray()
        add2or4toArray()
    
        makeArrayObjectsPositionStaticId()
        setNewRenderGeneral(!newRenderGeneral)

        // deleteIsNew()//no need b/c makeMove() doesn't copy isNew property


}, useEffectTimeForSetTimeout*0.25);
      return () => clearTimeout(timer);
    }, []);

  
  
  // const[newRender1,setNewRender1]=useState(true)
    // const[keyCodeRender2,setKeyCodeRender2]=useState(null)
    // const[keyCodeRender3,setKeyCodeRender3]=useState(null)
    // const[keyCode,setkeyCode]=useState(null)

    // const[newRender2,setNewRender2]=useState(true)
    // const[newRender3,setNewRender3]=useState(true)
    // const[newRender4,setNewRender4]=useState(true)
    
    const[newRenderGeneral,setNewRenderGeneral]=useState(true)
       
/////input keyboard events////////
    document.onkeydown = function() {
      // console.log(window.event.keyCode)
      // console.log("enableEvents in document.onkeydown OUTSIDE if", enableEvents)

if(enableEvents){//prevents from making a new event before the last one is finished.

console.log("enableEvents in document.onkeydown INSIDE if", enableEvents)


if((/(37|38|39|40)/).exec(  window.event.keyCode) ){
  console.log("enableEvents from first eventHandler BEFORE change",enableEvents)

  enableEvents =false
  console.log("enableEvents from first eventHandler AFTER change",enableEvents)

  keyCode =(window.event.keyCode)           

  newRender0=!newRender0
  
  ////removeAnimationClassesFromAllElements()
  removeAnimationClassesFromAllElements()

  setNewRenderGeneral(!newRenderGeneral)

}
}

    }
    /////first movement////////
useEffect(() => {
  console.log("enableEvents in 1 movement useEffect (fire twice: initial rendering and newRender-0- state change):",enableEvents)


  let didMakeMove= makeMove(keyCode,1)

  console.log('didMakeMove is', didMakeMove)


  let timer

  if(didMakeMove){//prevents from making a new tile when not moving
    
    timer = setTimeout(() => {
      console.log('0 movement-This will run after useEffectTimeForSetTimeout !')


  console.log('inside if(didMakeMove)didMakeMove is', didMakeMove)
console.log('newRender1 before', newRender1)

    newRender1=!newRender1

    atLeastOneMAkeMovewasSuccessful=true

    console.log('newRender1 AFTER' ,newRender1)

    ////removeAnimationClassesFromAllElements()
  removeAnimationClassesFromAllElements()

    setNewRenderGeneral(!newRenderGeneral)


}, useEffectTimeForSetTimeout);
  }else if(atLeastOneMAkeMovewasSuccessful){//if the makeMovesucceded only once- do a DoubleCheck if needed
    enableEvents =true

  }else{//if the keyPress event was an arrow but it couldn't be made the 'set' will enable a new one.
    enableEvents =true

  }
       
    return () => clearTimeout(timer);
  }, [newRender0]);


    ////second movement
    useEffect(() => {
      console.log("enableEvents in second movement useEffect (fire twice: initial rendering and newRender-1- state change):",enableEvents)

      let isMakeNoveWasMade
      isMakeNoveWasMade=  makeMove(keyCode,2)

      let timer

      if(isMakeNoveWasMade){
        timer = setTimeout(() => {
          console.log('second movement-This will run after useEffectTimeForSetTimeout second!')

          newRender2= !newRender2

          ////removeAnimationClassesFromAllElements()
  removeAnimationClassesFromAllElements()

          setNewRenderGeneral(!newRenderGeneral)

        }, useEffectTimeForSetTimeout);
      }else if(atLeastOneMAkeMovewasSuccessful){
        timer = setTimeout(() => {
          console.log('second movement-was NOT successful. go directly to useEffect for end of play ')

          newRender3=!newRender3

          ////removeAnimationClassesFromAllElements()
  removeAnimationClassesFromAllElements()

          setNewRenderGeneral(!newRenderGeneral)

        }, useEffectTimeForSetTimeout);
      }
        

        return () => clearTimeout(timer);

      }, [newRender1]);
      
    ////3 movement//////////////////
    useEffect(() => {
              console.log("enableEvents in third movement useEffect (fire twice: initial rendering and newRender-2- state change):",enableEvents)
        
        
        let isMakeNoveWasMade

        isMakeNoveWasMade=  makeMove(keyCode,3)

        console.log('isMakeNoveWasMade in 3 movement', isMakeNoveWasMade)

        let timer
        if(isMakeNoveWasMade){
          timer =  setTimeout(() => {
            console.log('3 movement -This will run after useEffectTimeForSetTimeout second!')
            console.log('before makeMove 3 keyCode is',keyCode )
  
            console.log('after makeMove 3')
  
            // setNewRender3(!newRender3)
            console.log('newRender3', newRender3)

            newRender3=!newRender3

            // removeAnimationClassesFromAllElements()

            console.log('newRender3', newRender3)

////removeAnimationClassesFromAllElements()
removeAnimationClassesFromAllElements()

            setNewRenderGeneral(!newRenderGeneral)
  
          //   resetIsMergedThisTurn()
          //   isWon()
          }, useEffectTimeForSetTimeout*1.3);
          
        }else if(atLeastOneMAkeMovewasSuccessful){
          timer = setTimeout(() => {
            console.log('3 movement-was NOT successful. go directly to useEffect for end of play ')
  
            newRender3=!newRender3

            // removeAnimationClassesFromAllElements()

            ////removeAnimationClassesFromAllElements()
  removeAnimationClassesFromAllElements()

            setNewRenderGeneral(!newRenderGeneral)
  
          }, useEffectTimeForSetTimeout);
        }
         

         
        return () => clearTimeout(timer);
      }, [newRender2]);
      


      //useEffect for end of play & all possible moves
      useEffect(() => {
        // console.log('before resetIsMergedThisTurn')
        console.log('end of play')

        console.log("enableEvents in useEffect for end of play (fire twice: initial rendering and newRender-3- state change):",enableEvents)


        console.log("keyCode in useEffect for end of play (fire twice: initial rendering and newRender-3- state change):",keyCode)

        resetIsMergedThisTurn()
        isWon()
let isSetTimeoutForIsLoseActivated;
let timer;
        if(keyCode){//prevent firing at initial rendering without an event
          console.log('end of play if(keyCode) ')

            add2or4toArray()

            newRender4=!newRender4

////removeAnimationClassesFromAllElements()
removeAnimationClassesFromAllElements()

            setNewRenderGeneral(!newRenderGeneral)//rerender component with the new 2or4 to be rendered


            // setNewRender4(!newRender4)//rerender component with the new 2or4 to be rendered

            timer=  setTimeout(() => {isLose()
              isSetTimeoutForIsLoseActivated=true
            
            },2000)//for rendering the last tile that caused losing before declaring it

        }
        console.log('after resetIsMergedThisTurn')
        console.log('bEFORE new assign in enableEvents=true, namely it must be FALSE',enableEvents )
        if(!isInitialRendering){
          enableEvents=true
        }
        keyCode=null
        atLeastOneMAkeMovewasSuccessful=null
if(isSetTimeoutForIsLoseActivated){
  return () => clearTimeout(timer);

}

    }, [newRender3]);

    // useEffect(() => {

    //         // setNewRender4(!newRender4)

    //         isLose()


    // }, [newRender4]);

  return (
    <div className="container game-container">
      <div className="row mx-0 mb-2 aw-grid gridStyle justify-content-center ">
         <div id="00" className="col col-1 border  tile border-0 gridStyle  px-0">{render(0, 0)}
        </div>
        
        <div id="01" className="col col-1 border tile gridStyle border-0 px-0 "  >{render(0, 1)}</div>
        <div id="02" className="col col-1 border  tile border-0 px-0">{render(0, 2)}</div>
        <div id="03" className="col col-1 border tile border-0 px-0" >{render(0, 3)}</div>
      </div>
      <div className="row mx-0 mb-2 aw-grid  justify-content-center">
        <div id="10" className="col col-1 border  tile border-0 px-0">{render(1, 0)}</div>
        <div id="11" className="col col-1 border tile border-0 px-0">{render(1, 1)}</div>
        <div id="12" className="col col-1 border tile border-0 px-0">{render(1, 2)}</div>
        <div id="13" className="col col-1 border tile border-0 px-0">{render(1, 3)}</div>
      </div>
      <div className="row mx-0 mb-2 aw-grid justify-content-center ">
        <div id="20" className="col col-1 border tile border-0 px-0">{render(2, 0)}</div>
        <div id="21" className="col col-1 border tile border-0 px-0">{render(2, 1)}</div>
        <div id="22" className="col col-1 border tile border-0 px-0">{render(2, 2)}</div>
        <div id="23" className="col col-1 border tile border-0 px-0">{render(2, 3)}</div>
      </div>
      <div className="row mx-0 mb-2 aw-grid justify-content-center ">
        <div id="30" className="col col-1 border tile border-0 px-0">{render(3, 0)}</div>
        <div id="31" className="col col-1 border tile border-0 px-0">{render(3, 1)}</div>
        <div id="32" className="col col-1 border tile border-0 px-0">{render(3, 2)}</div>
        <div id="33" className="col col-1 border tile border-0 px-0">{render(3, 3)}</div>
      </div>
    </div>
  );
};
