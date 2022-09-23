import React, { useContext, useEffect, useState } from 'react'
import { Boxes } from './Boxes'
import { AppContext } from './App'

export const MakeGrid = () => {
  const { boxArray, setBoxArray, colClass, setColClass } = useContext(
    AppContext
  )

  //   const boxIdArray = [
  //     [1, 2, 3, 4, 5, 6, 7, 8],
  //     [9, 10, 11, 12, 13, 14, 15, 16],
  //     [17, 18, 19, 20, 21,22, 23, 24],
  //     [25, 26, 27 ,28, 29, 30, 31, 32],
  //     [33, 34, 35 ,36, 37, 38, 39, 40],
  //     [41, 42, 43 ,44, 45, 46, 47, 48],
  //     [49, 50, 51 ,52, 53, 54, 55, 56],
  //     [57, 58, 59 ,60, 61, 62, 63, 64],
  //   ]

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='grid grid-cols-8'>
        {/* <div className={colClass}> */}
        {/* <div className={`grid grid-cols-${boxArray.length}`}> */}
        {/* <div class= "grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4"> */}
        
        {/* {boxArray.map(row => row.map(col => <Boxes box={col} />))} */}

        <Boxes box={boxArray[2][2]} />
      </div>
    </div>
  )
}
