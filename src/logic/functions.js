import React, {useState,useEffect} from "react";
// import { gameArray } from "./array";
import { Tile2 } from "../components/Tile2";
import { Tile4 } from "../components/Tile4";
import { Tile8 } from "../components/Tile8";
import { Tile16 } from "../components/Tile16";
import { Tile32 } from "../components/Tile32";
import { Tile64 } from "../components/Tile64";
import { Tile128 } from "../components/Tile128";
import { Tile256 } from "../components/Tile256";
import { Tile512 } from "../components/Tile512";
import { Tile1024 } from "../components/Tile1024";
import { Tile2048 } from "../components/Tile2048";

var prevArray=[[],[],[],[]]


var uniqid = require('uniqid');



console.log('id')
console.log(uniqid())

// let gameArray= [ //not all make moves are abled

//       [{value:2,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false}],

//     [{value:2,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false}],

//     [{value:2,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false}],

//     [{value:2,isMergedThisTurn:false},
//     {value:0,isMergedThisTurn:false},
//     {value:2,isMergedThisTurn:false},
//     {value:2,isMergedThisTurn:false}]
// ]

// let gameArray= [ //not all make moves are abled

//     [{value:4,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false}],

//   [{value:0,isMergedThisTurn:false},
//   {value:4,isMergedThisTurn:false},
//   {value:4,isMergedThisTurn:false},
//   {value:4,isMergedThisTurn:false}
// ],



//     [{value:4,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false}],
    
//   [{value:4,isMergedThisTurn:false},
//     {value:4,isMergedThisTurn:false},
//     {value:4,isMergedThisTurn:false},
//     {value:0,isMergedThisTurn:false}]
// ]

let gameArray= [ //tests array

    [{value:0,isMergedThisTurn:false,uniqid: ["3","4"]},
    {value:0,isMergedThisTurn:false},
        
        {value:0,isMergedThisTurn:false},
        {value:0,isMergedThisTurn:false}],

    [{value:0,isMergedThisTurn:false},
        {value:0,isMergedThisTurn:false,uniqid: ["6"]},
        {value:0,isMergedThisTurn:false},
        {value:0,isMergedThisTurn:false}],

    [{value:0,isMergedThisTurn:false},
        {value:0,isMergedThisTurn:false},
        {value:0,isMergedThisTurn:false,uniqid: ["7"]},
        {value:0,isMergedThisTurn:false}],

    [{value:0,isMergedThisTurn:false},
    {value:0,isMergedThisTurn:false},
    {value:0,isMergedThisTurn:false},
    {value:0,isMergedThisTurn:false,uniqid: ["8"]}]
]

// let gameArray= [

//     [{value:2,isMergedThisTurn:false},{value:2,isMergedThisTurn:false},{value:2,isMergedThisTurn:false},{value:2,isMergedThisTurn:false}],

//     [{value:4,isMergedThisTurn:false},{value:4,isMergedThisTurn:false},{value:4,isMergedThisTurn:false},{value:4,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},{value:0,isMergedThisTurn:false},{value:4,isMergedThisTurn:false},{value:8,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},{value:2,isMergedThisTurn:false},
//     {value:0,isMergedThisTurn:false},{value:8,isMergedThisTurn:false}]
// ]

// let gameArray= [

//     [{value:8,isMergedThisTurn:false},
//         {value:1024,isMergedThisTurn:false},
//         {value:2048,isMergedThisTurn:false},
//         {value:512,isMergedThisTurn:false}],

//     [{value:64,isMergedThisTurn:false},
//         {value:128,isMergedThisTurn:false},
//         {value:256,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false},
//         {value:8,isMergedThisTurn:false}],

//     [{value:16,isMergedThisTurn:false},
//     {value:32,isMergedThisTurn:false},
//     {value:0,isMergedThisTurn:false},
//     {value:8,isMergedThisTurn:false}]
// ]


// let gameArray= [// gameover 1

//     [{value:0,isMergedThisTurn:false},
//         {value:8,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false}],

//     [{value:8,isMergedThisTurn:false},
//         {value:32,isMergedThisTurn:false},
//         {value:256,isMergedThisTurn:false},
//         {value:32,isMergedThisTurn:false}],

//     [{value:4,isMergedThisTurn:false},
//         {value:8,isMergedThisTurn:false},
//         {value:128,isMergedThisTurn:false},
//         {value:16,isMergedThisTurn:false}],

//     [{value:2,isMergedThisTurn:false},
//     {value:4,isMergedThisTurn:false},
//     {value:16,isMergedThisTurn:false},
//     {value:8,isMergedThisTurn:false}]
// ]
// let gameArray= [//

//     [{value:0,isMergedThisTurn:false},
//         {value:8,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},
//         {value:2,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:8,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//         {value:4,isMergedThisTurn:false}],

//     [{value:0,isMergedThisTurn:false},
//         {value:0,isMergedThisTurn:false},
//     {value:0,isMergedThisTurn:false},
//     {value:2,isMergedThisTurn:false}]
// ]


let gameArrayCopy=[   
[{},{},{},{}],
[{},{},{},{}],
[{},{},{},{}],
[{},{},{},{}]
];

function returnZeroValueindexesInArray(){
    console.table(gameArray)
    let zeroValueIndexes=[];
    for(var row=0;row<4;row++){  
        for(var column=0;column<4;column++){
            if(gameArray[row][column].value==0){
                zeroValueIndexes.push(row+""+column)
            }
        }
    }
    return zeroValueIndexes
}

function choose2or4(){
  if(Math.random()>=0.5){
    return 4
  }else{
    return 2
  }
}


export function makeArrayObjectsPositionStaticId(){
    // gameArrayCopy=

    for(var row=0;row<4;row++){  
        for(var column=0;column<4;column++){
            
                gameArray[row][column].StaticPositinId= row+""+column
              }
            }
        }
export function slideTileInbrowser(initialPosition,endPosition){
    let parentContainerDiv= document.getElementById(initialPosition);
    console.log('slideTileInbrowser')

    console.log( parentContainerDiv)
    let divToSlide=parentContainerDiv.children[0]
    
    let initialRow= initialPosition[0]
    let initialcolumn= initialPosition[1]

    let endRow= endPosition[0]
    let endcolumn= endPosition[1]
    console.log("endRow", endRow)
    console.log("initialRow", initialRow)

    if(initialRow>endRow){

        divToSlide.classList.add("moveUpClass")
        return
     }
     if(initialRow<endRow){

        divToSlide.classList.add("moveDownClass")
        return
     }

     if(initialcolumn>endcolumn){
        divToSlide.classList.add("moveLeftClass")

//         setTimeout(//futile!
    
//     // divToSlide.classList.remove("moveLeftClass")

// console.log("waited 3 sec"),3000)
        

// divToSlide.classList.remove("moveLeftClass")


        return
     }

     if(initialcolumn<endcolumn){
        divToSlide.classList.add("moveRightClass")
        return
     }
    
     

    // a.children[0].classList.add("moveLeftClass")
    console.log( divToSlide)

        
        }


export function comparePrevArrayToGameArrayAndRenderAnimation(){

    console.log(JSON.stringify(gameArray))    
    console.log(JSON.stringify(prevArray))

    let currentPosition;

    for(var row=0;row<4;row++){  
        for(var column=0;column<4;column++){
            if(prevArray
                [row][column].value!=0){
                    currentPosition=getPositionInCurrentArray(prevArray
                        [row][column].uniqid[0])
                        // console.log(currentPosition.row+""+currentPosition.column)
                        makeSlideAnimation(currentPosition,row,column)

            }
        }
    }

        }
 function makeSlideAnimation(currentPosition,initialRow,initialColumn){

    console.log(currentPosition.row+" "+currentPosition.column+" "+initialRow+" "+initialColumn)
    let parentContainerDiv= document.getElementById(initialRow+""+initialColumn);
    
    let divToSlide=parentContainerDiv.children[0]

    console.log(divToSlide)
    let slideDistance
    if(currentPosition.row==initialRow){
                slideDistance = currentPosition.column-initialColumn
                console.log(slideDistance)

                switch (slideDistance) {
                  case +3:
                    divToSlide.classList.add("moveRightThreeTimesClass");
                    return;
                  case 2:
                    divToSlide.classList.add("moveRightTwiceClass");
                    return;
                  case 1:
                    divToSlide.classList.add("moveRightOnceClass");
                    return;

                  case -3:
                    divToSlide.classList.add("moveLeftThreeTimesClass");
                    return;
                  case -2:
                    divToSlide.classList.add("moveLeftTwiceClass");
                    return;
                  case -1:
                    console.log("case -1");

                    divToSlide.classList.add("moveLeftOnceClass");
                    return;
                  default:
                    return;
                }
            }else{
                slideDistance = currentPosition.row-initialRow
                switch (slideDistance) {
                    case +3:
                      divToSlide.classList.add("moveDownThreeTimesClass");
                      return;
                    case 2:
                      divToSlide.classList.add("moveDownTwiceClass");
                      return;
                    case 1:
                      divToSlide.classList.add("moveDownOnceClass");
                      return;
  
                    case -3:
                      divToSlide.classList.add("moveUpThreeTimesClass");
                      return;
                    case -2:
                      divToSlide.classList.add("moveUpTwiceClass");
                      return;
                    case -1:
                      console.log("case -1");
  
                      divToSlide.classList.add("moveUpOnceClass");
                      return;
                    default:
                      return;
                  }
  

            }
    
        
        }

        function getPositionInCurrentArray(id){
            for(var row=0;row<4;row++){  
                for(var column=0;column<4;column++){
                if(gameArray
                    [row][column].uniqid && gameArray
                    [row][column].uniqid.includes(id)){
                        return {row,column}
                }
            }
        }
    }

export function getElementXYposition(position){
    let parentContainerDiv= document.getElementById(position);

    let divToSlide=parentContainerDiv.children[0]

   let data= divToSlide.getBoundingClientRect()
//    console.log(divToSlide)

   console.log(data.x)    
   console.log(data.y)

   return {x:data.x, y:data.y }
}

export function makeArrayCopy(){
    // gameArrayCopy=

    for(var row=0;row<4;row++){  
        for(var column=0;column<4;column++){
            
                gameArrayCopy[row][column].value=gameArray[row][column].value;


            gameArrayCopy[row][column].id=gameArray[row][column].id;

           
        }


}
}

export function add2or4toArray(){
console.log('add2or4toArray')
let zeroValueIndexes = returnZeroValueindexesInArray()
console.log(zeroValueIndexes)
let arrayPosition = zeroValueIndexes[Math.floor(Math.random() * zeroValueIndexes.length)];

let value= choose2or4()

gameArray[arrayPosition[0]][arrayPosition[1]]={value,
    isMergedThisTurn:false,
isNew:true,
uniqid:[uniqid()]
}
}
export function makeMove(keyCode, moveCount_debugPorpuses){
console.log(keyCode)
let relativeRowIndex=null;
let relativeColumnIndex=null;

if(keyCode){
    console.log('will makeMove, key code is',keyCode+" moveCount_debugPorpuses", moveCount_debugPorpuses )
}

switch (keyCode) {
    
        case 37:
         console.log('Left key is pressed') 
        return makeLeft(37,moveCount_debugPorpuses)

     
        //  break;

        case 38:
         console.log('Up  key is pressed')

         return  makeUp(38,moveCount_debugPorpuses)
        //  break;
        case 39:
        console.log('Right key is pressed')

        return  makeRight(39,moveCount_debugPorpuses)
        // break;
        case 40:
        console.log('Down key is pressed') 
 
        return makeDown(40,moveCount_debugPorpuses)
        // break;
        default:
            // alert("press an arrow ssssss")

    }

   

}
function assignNumber(row,endColumnPosition,copiedTileValue,gameArray,copiedTileUniqueId){
    gameArray[row][endColumnPosition].value=copiedTileValue
    gameArray[row][endColumnPosition].uniqid= copiedTileUniqueId
}
function assignZero(row,column,gameArray){
    gameArray[row][column].value=0
    delete gameArray[row][column].uniqid
}

function assignDoubleNumber(row,column,gameArray,id1,id2){
    let uniqidArray=[]

    console.log(gameArray)

    gameArray[row][column].value=gameArray[row][column].value*2

    gameArray[row][column].uniqid=[id1[0],id2[0]]

    // gameArray[row][column].uniqid=id1.concat(id2); 
    // gameArray[row][column].uniqid.push(id1)
    // gameArray[row][column].uniqid.push(id2)
    // if(gameArray[row][column].uniqid){//uniqidArray already exist/ use for 8 & above
    // }else{//use a new uniqidArray = use to form 4 or 8 only

    // }
    

    gameArray[row][column].isMergedThisTurn=true
    console.log(gameArray)
}




export function removeAnimationClassesFromAllElements() {

    console.log('removeAnimationClassesFromAllElements()')
    let parentContainerDiv
    let divToSlide

    for(var row=0;row<4;row++){  
        for(var column=0;column<4;column++){
            
            parentContainerDiv= document.getElementById(row+""+column);
            
            if(parentContainerDiv.children[0]){
                divToSlide=parentContainerDiv.children[0]
                divToSlide.classList.remove("moveLeftOnceClass")
                divToSlide.classList.remove("moveLeftTwiceClass")
                divToSlide.classList.remove("moveLeftThreeTimesClass")


                divToSlide.classList.remove("moveRightOnceClass")
                divToSlide.classList.remove("moveRightTwiceClass")
                divToSlide.classList.remove("moveRightThreeTimesClass")

                divToSlide.classList.remove("moveUpOnceClass")
                divToSlide.classList.remove("moveUpTwiceClass")
                divToSlide.classList.remove("moveUpThreeTimesClass")

                divToSlide.classList.remove("moveDownOnceClass")
                divToSlide.classList.remove("moveDownTwiceClass")
                divToSlide.classList.remove("moveDownThreeTimesClass")



            }
            
        }
    }
}


export function makeLeft(keyCode,moveCount_debugPorpuses){

   let relativeColumnIndex=-1
let madeMove=false
    // let endRowPosition
    let endColumnPosition

    let numberID;

        console.log(keyCode)
    for(var row=0;row<4;row++){  
        for(var column=0;column<4;column++){
            endColumnPosition=column+relativeColumnIndex

            numberID=gameArray[row][column].uniqid

           if(endColumnPosition<0||endColumnPosition>3 ||
            gameArray[row][column].value==0){
               continue;

           }else if(gameArray[row][endColumnPosition].value==0){            
            assignNumber(row,endColumnPosition,gameArray[row][column].value,gameArray,numberID)
            // slideTileInbrowser(row+""+column,row+""+ endColumnPosition)
            assignZero(row,column,gameArray)
            console.log(gameArray)

            madeMove=true
        }else{

            if(gameArray[row][endColumnPosition].value==gameArray[row][column].value && 
                gameArray[row][endColumnPosition].isMergedThisTurn==false &&
                gameArray[row][column].isMergedThisTurn==false ){

                assignDoubleNumber(row,endColumnPosition,gameArray,gameArray[row][endColumnPosition].uniqid,gameArray[row][column].uniqid)
                
                // slideTileInbrowser(row+""+column,row+""+ endColumnPosition)


                assignZero(row,column,gameArray)
                console.log(gameArray)

                madeMove=true

            }
           }

        }
    }

    if(madeMove){
        console.log('moveCount_debugPorpuses is',moveCount_debugPorpuses)

        console.log(gameArray)
    }
   
if(!madeMove){
    console.log('can NOT move this way')
    // alert('can NOT move this way')
    return madeMove
}
return madeMove
}
export function deleteIsNew(){
    console.log(gameArray)
    for(var row=0;row<4;row++){  
        for(var column=0;column<4;column++){
           if( gameArray[row][column].isNew){
            console.log("resetIsNew",gameArray)

            delete gameArray[row][column].isNew
            console.log("resetIsNew",gameArray)

           }
        }
    }
    console.log(gameArray)

}

export function resetIsMergedThisTurn(){
    console.log('resetIsMergedThisTurn')

    console.log(gameArray)
    for(var row=0;row<4;row++){  
        for(var column=0;column<4;column++){
            gameArray[row][column].isMergedThisTurn=false;
        }
    }
    console.log(gameArray)

}

export function isLose(){
    console.table(gameArray)
    console.log("before returnZeroValueindexesInArray")
    console.log(returnZeroValueindexesInArray())

    if(returnZeroValueindexesInArray().length==0){
    for(var row=0;row<4;row++){  
        for(var column=0;column<4;column++){

            if(row<3 && column<3){
                if(gameArray[row][column].value == gameArray[row+1][column].value ||
                    gameArray[row][column].value==gameArray[row][column+1].value){
                        console.log("not lost")
                        return
                }
            }else if(row==3 && column<3&&
                gameArray[row][column].value==gameArray[row][column+1].value){
                                            console.log("not lost")

                    return
            }else if(column==3 &&row<3&& gameArray[row][column].value==gameArray[row+1][column].value){
                                        console.log("not lost")

                return
            }
        }
    }
alert('Game Over')
window.location.reload(false)           
}else{
    console.log("there is zero")
    return
}

console.log("not suppose to be here")

}


export function isWon(){
    for(var row=0;row<4;row++){  
        for(var column=0;column<4;column++){
            if(gameArray[row][column].value==2048){
                alert("You WON")
                window.location.reload(false)           
             }
        }
    }
 
}

export function makeUp(keyCode ,moveCount_debugPorpuses){

    let relativeRowIndex=-1
    let madeMove=false
        
    let endRowPosition

    let numberID;

    console.log(keyCode)
 for(var row=0;row<4;row++){  
        for(var column=0;column<4;column++){
            endRowPosition=row+relativeRowIndex
            
            numberID=gameArray[row][column].uniqid


           if(endRowPosition<0||endRowPosition>3 ||
            gameArray[row][column].value==0){
               continue;

           }else if(gameArray[endRowPosition][column].value==0){   
                        
            assignNumber(endRowPosition,column,gameArray[row][column].value,gameArray,numberID)

            // slideTileInbrowser(row+""+column,endRowPosition+""+ column)

            assignZero(row,column,gameArray)

            console.log(gameArray)

            madeMove=true
        }else{

            if(gameArray[endRowPosition][column].value==gameArray[row][column].value && 

                gameArray[endRowPosition][column].isMergedThisTurn==false &&
                gameArray[row][column].isMergedThisTurn==false ){

                assignDoubleNumber(endRowPosition,column,gameArray,gameArray[endRowPosition][column].uniqid,gameArray[row][column].uniqid)
                
                // slideTileInbrowser(row+""+column,endRowPosition+""+ column)


                assignZero(row,column,gameArray)
                console.log(gameArray)

                madeMove=true

            }
           }

        }
    }

    if(madeMove){
        console.log('moveCount_debugPorpuses is',moveCount_debugPorpuses)

        console.log(gameArray)
    }
   
if(!madeMove){
    console.log('can NOT move this way')
    // alert('can NOT move this way')
    return madeMove
}
return madeMove


}
export function makeDown(keyCode,moveCount_debugPorpuses){

    let relativeRowIndex=+1
    let madeMove=false
        
    let endRowPosition
    let numberID;

    
    console.log(keyCode)
 for(var row=3;row>-1;row--){  
        for(var column=3;column>-1;column--){
            endRowPosition=row+relativeRowIndex

            numberID=gameArray[row][column].uniqid


           if(endRowPosition<0||endRowPosition>3 ||
            gameArray[row][column].value==0){
               continue;

           }else if(gameArray[endRowPosition][column].value==0){   
                        
            assignNumber(endRowPosition,column,gameArray[row][column].value,gameArray,numberID)

            // slideTileInbrowser(row+""+column,endRowPosition+""+ column)

            assignZero(row,column,gameArray)

            console.log(gameArray)

            madeMove=true
        }else{

            if(gameArray[endRowPosition][column].value==gameArray[row][column].value && 

                gameArray[endRowPosition][column].isMergedThisTurn==false &&
                gameArray[row][column].isMergedThisTurn==false ){

                assignDoubleNumber(endRowPosition,column,gameArray,gameArray[endRowPosition][column].uniqid,gameArray[row][column].uniqid)
                
                // slideTileInbrowser(row+""+column,endRowPosition+""+ column)


                assignZero(row,column,gameArray)
                console.log(gameArray)

                madeMove=true

            }
           }

        }
    }

    if(madeMove){
        console.log('moveCount_debugPorpuses is',moveCount_debugPorpuses)

        console.log(gameArray)
    }
   
if(!madeMove){
    console.log('can NOT move this way')
    // alert('can NOT move this way')
    return madeMove
}
return madeMove


}
export function makeRight(keyCode,moveCount_debugPorpuses){

    let relativeColumnIndex=+1
 let madeMove=false
     // let endRowPosition
     let endColumnPosition
     let numberID;

     console.log(keyCode)
     for(var row=3;row>-1;row--){  
         for(var column=3;column>-1;column--){
             endColumnPosition=column+relativeColumnIndex
 
             numberID=gameArray[row][column].uniqid

            if(endColumnPosition<0||endColumnPosition>3 ||
             gameArray[row][column].value==0){
                continue;
 
            }else if(gameArray[row][endColumnPosition].value==0){            
             assignNumber(row,endColumnPosition,gameArray[row][column].value,gameArray,numberID)
            //  slideTileInbrowser(row+""+column,row+""+ endColumnPosition)
             assignZero(row,column,gameArray)
             console.log(gameArray)
 
             madeMove=true
         }else{
 
             if(gameArray[row][endColumnPosition].value==gameArray[row][column].value && 

                 gameArray[row][endColumnPosition].isMergedThisTurn==false &&
                 gameArray[row][column].isMergedThisTurn==false ){
 
                 assignDoubleNumber(row,endColumnPosition,gameArray,gameArray[row][endColumnPosition].uniqid,gameArray[row][column].uniqid)
                 
                //  slideTileInbrowser(row+""+column,row+""+ endColumnPosition)
 
 
                 assignZero(row,column,gameArray)
                 console.log(gameArray)
 
                 madeMove=true
 
             }
            }
 
         }
     }
 
     if(madeMove){
         console.log('moveCount_debugPorpuses is',moveCount_debugPorpuses)
 
         console.log(gameArray)
     }
    
 if(!madeMove){
     console.log('can NOT move this way')
     // alert('can NOT move this way')
     return madeMove
 }
 return madeMove
 }

 export function saveCopyPreviousArray(placeWasCalled_debugger){
    console.log(gameArray)


    console.log(placeWasCalled_debugger)

    for(var row=0;row<4;row++){  
        for(var column=0;column<4;column++){
            prevArray[row][column]=JSON.parse(JSON.stringify(gameArray[row][column]))
// console.log(JSON.parse(JSON.stringify(gameArray[row][column])))
// console.log(JSON.stringify(gameArray[row][column]))
        
}
        
    }
    console.log(JSON.stringify(prevArray))
    // console.log(prevArray)

}

export function render(row, column) {
    let componentToRender;
let speedRenderFromExistingComponents=0
let initialScale=1
    switch (gameArray[row][column].value) {
      case 0:
        componentToRender=(
            <div style={{opacity: "0"}} >empty tile</div>
        )//it makes a empty row in the grid to be visible
      return componentToRender
      // return 'null';
      case 2:
          if(gameArray[row][column].isNew){
            speedRenderFromExistingComponents=0.5;
            initialScale=0.5
          }
        componentToRender=(
            <Tile2 renderSpeed={speedRenderFromExistingComponents}
            initialScaleProp={initialScale}></Tile2>
        )
        // console.log(componentToRender)
        return componentToRender
        // return  {<Tile2></Tile2>}
        // return 2;
      case 4:
        if(gameArray[row][column].isNew){
            speedRenderFromExistingComponents=0.5; 
            initialScale=0.5
          }
        componentToRender=(
            <Tile4 renderSpeed={speedRenderFromExistingComponents}
            initialScaleProp={initialScale}></Tile4>
        )

        return componentToRender;
      case 8:
        componentToRender=(
            <Tile8 renderSpeed={speedRenderFromExistingComponents}></Tile8>
        )

        return componentToRender;
      case 16:
        componentToRender=(
            <Tile16 renderSpeed={speedRenderFromExistingComponents}></Tile16>
        )

        return componentToRender;
      case 32:
        componentToRender=(
            <Tile32 renderSpeed={speedRenderFromExistingComponents}></Tile32>
        )

        return componentToRender;
      case 64:
        componentToRender=(
            <Tile64 renderSpeed={speedRenderFromExistingComponents}></Tile64>
        )

        return componentToRender;
      case 128:
        componentToRender=(
            <Tile128 renderSpeed={speedRenderFromExistingComponents}></Tile128>
        )

        return componentToRender;
      case 256:
        componentToRender=(
            <Tile256 renderSpeed={speedRenderFromExistingComponents}></Tile256>
        )

        return componentToRender;
      case 512:
        componentToRender=(
            <Tile512 renderSpeed={speedRenderFromExistingComponents}></Tile512>
        )

        return componentToRender;
      case 1024:
        componentToRender=(
            <Tile1024 renderSpeed={speedRenderFromExistingComponents}></Tile1024>
        )

        return componentToRender;
      case 2048:
        componentToRender=(
            <Tile2048 renderSpeed={speedRenderFromExistingComponents}></Tile2048>
        )

        return componentToRender;
      default:
        return 'fdfdfde';
    }
  }

 
//   for(var i=0;i<gameArray.length;i++){  
//     for(var j=0;j<gameArray[i].length;j++){
//         endRowPosition=i+relativeRowIndex;
//         endColumnPosition=j+relativeColumnIndex

//        if(endRowPosition<0||endRowPosition>3||
//         endColumnPosition<0||endColumnPosition>3 ){
//            continue;
//        }else if(gameArray[endRowPosition][endColumnPosition]==0){
//            makeSwap()
//        }
//        else{
//         if(gameArray[i][j]==gameArray[i][j]){

//         }
//        }
//     }
// }