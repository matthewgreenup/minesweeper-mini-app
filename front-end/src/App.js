import logo from './logo.svg'
import './App.css'
import { MakeGrid } from './MakeGrid'
import React, { useEffect, useContext, createContext, useState } from 'react'

export const AppContext = React.createContext()

function randomNumbers (numBombs, boardSize) {
  let bombLocations = []
  for (let i = 0; i < numBombs; i++) {
    let randomNum = Math.floor(Math.random() * (boardSize * boardSize))
    if (bombLocations.includes(randomNum)) {

      bombLocations.push(999)

    } else {
      bombLocations.push(randomNum)
    }
  }
  
  return bombLocations
}

function makeBoxArray () {
  let boxArray = []
  let numBombs = 10
  let boardSize = 8
  let idCounter = 0
  let bombLocations = randomNumbers(numBombs, boardSize)

  console.log('These are the bomb locations', bombLocations)

  for (let r = 0; r < boardSize; r++) {
    let boxRow = []
    for (let c = 0; c < boardSize; c++) {
      let isMineValue = false;
      if(bombLocations.includes(idCounter)){
        isMineValue = true
      }

      boxRow.push({
        boxId: idCounter,
        row: r,
        col: c,
        beenClicked: false,
        isMine: isMineValue,
        numMines: null
      })
      idCounter++
    }
    boxArray.push(boxRow)
  }
  return boxArray
}

function App () {
  const [boxArray, setBoxArray] = useState([])
  const [colClass, setColClass] = useState('')
  const passContext = { boxArray, setBoxArray, colClass, setColClass }

  useEffect(() => {
    console.log('this make box array useEffect should only run once')
    setBoxArray(makeBoxArray())
  }, [])

  useEffect(() => {
    console.log("this is box array ",boxArray)
  }, [boxArray])

  // useEffect(() => {
  //   let boxLength = boxArray.length.toString
  //   let columnClassString = `grid grid-cols-${boxArray.length.toString()}`
  //   console.log(`${boxArray.length}`)
  //   console.log(columnClassString)
  //   setColClass(columnClassString)
  // }, [boxArray])

  return (
    <>
      <AppContext.Provider value={passContext}>
        <MakeGrid />
      </AppContext.Provider>
    </>
  )
}

export default App
