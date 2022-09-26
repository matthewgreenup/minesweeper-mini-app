import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from './App'



export const Boxes = props => {
//     const [returnValue, setReturnValue] = useState()
    const { boxArray, setBoxArray} = useContext(AppContext)
useEffect(()=>{
// props.box = boxArray[props.box.row][props.box.col]
console.log('current box ' , boxArray[props.box.row][props.box.col].boxId)
}, [boxArray])


  return (
  <>
    { props.box.beenClicked ? (
        <button onClick={()=>{
            console.log('been clicked top', props.box.beenClicked)

        }} className='max-w-50 bg-red-500 hover:bg-teal-700 text-white font-bold h-20 w-20 border border-white-700'>
  
        <p>{`${props.box.boxId} ${props.box.isMine}`}</p>
        
        </button>

    ) : (
        <button onClick={()=>{

            // console.log(boxArray[props.box.row][props.box.col].beenClicked)

            setBoxArray(curr => {
                curr[props.box.row][props.box.col].beenClicked = true;
                return curr;
            })

        }}className='max-w-50 bg-teal-500 hover:bg-teal-700 text-white font-bold h-20 w-20 border border-white-700'>
  
        <p>{`${props.box.boxId} ${props.box.isMine}`}</p>
        
        </button>
    )}
</>
  )
}




{/* <button onClick={()=>{
    console.log('been clicked', props.box.beenClicked)
}}className='max-w-50 bg-teal-500 hover:bg-teal-700 text-white font-bold h-20 w-20 border border-white-700'>

<p>{`${props.box.boxId} ${props.box.isMine}`}</p>

</button> */}





            
            
            // let newObject = boxArray[props.box.row][props.box.col]
            // let temp = boxArray;
            // console.log("01 new obejct", newObject)
            // newObject = {...newObject, beenClicked: true}
            // console.log("02 new obejct", newObject)
            // setBoxArray(curr => 
            //     curr.map((row, index) => {
                    
            //         console.log('row: ', row)
            //         // console.log('maybe box row ', props.box.row)
            //         console.log('full row maybe', boxArray[props.box.row])
            //         console.log('this is the props column: ', props.box.col)
            //         // console.log('maybe box array ', boxArray[2][2])
            //         if(row==boxArray[props.box.row]){
            //             row.map(obj => {
            //                 console.log('obj: ', obj.col)
            //                 if(obj.col == props.box.col){
            //                     return {...obj, beenClicked:true}
            //                     // return obj
            //                 }else{
            //                     return obj
            //                 }
            //                 // return boxArray[1][1]
            //             })
            //         }else{
            //             return row
            //         }
            //     })
            //     )






                
            // setBoxArray({...boxArray, test:newObject })
            // setBoxArray({...boxArray, [boxArray[props.box.row][props.box.col]]:newObject })
            // setBoxArray({...boxArray, :666 })
            // setBoxArray({...boxArray, [boxArray[2][2]]:666 })