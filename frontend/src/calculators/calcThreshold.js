// eslint-disable-next-line no-unused-vars
import React from 'react'

const calcThreshold = (difficulty, levels) => {

  // Array of XP Thresholds by Char Level (move to Db and call via API in future)
  const xpThresholdArr = [
    { charLevel: '2', easy: 50, medium: 100, hard: 150, deadly: 200 },
    { charLevel: '3', easy: 75, medium: 150, hard: 225, deadly: 400 },
    { charLevel: '4', easy: 125, medium: 250, hard: 375, deadly: 500 }
  ]

  //CALCULATE XP THRESHOLDS
  //reset variables
  let diffLevel = 0

  levels.map((elem) => {
    const obj = xpThresholdArr.find(xp => xp.charLevel === elem)
    switch (difficulty) {
      case 'easy': diffLevel = diffLevel + obj.easy; break
      case 'medium': diffLevel = diffLevel + obj.medium; break
      case 'hard': diffLevel = diffLevel + obj.hard; break
      case 'deadly': diffLevel = diffLevel + obj.deadly; break
    }
  })
  return diffLevel
}

export default calcThreshold