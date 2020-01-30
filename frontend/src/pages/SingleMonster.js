/* eslint-disable brace-style */
import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

import CoreStats from '../components/creatures/CoreStats'
import Saves from '../components/creatures/Saves'
import Type from '../components/creatures/Type'
import Abilities from '../components/creatures/Abilities'
import Skills from '../components/creatures/Skills'
import Languages from '../components/creatures/Languages'
import Challenge from '../components/creatures/Challenge'
import SpecialAbilities from '../components/creatures/SpecialAbilities'
import Actions from '../components/creatures/Actions'
import Legendary from '../components/creatures/Legendary'



const SingleMonster = (props) => {
  //get the single monster data
  const monster = useFetch(`https://api.open5e.com/monsters/${props.match.params.slug}`)

  //turn the monster data into an array
  const [monsterArray, setMonsterArray] = useState([])

  function makeMonsterArray() {
    let monsterDetail = []
    for (const [key, value] of Object.entries(monster)) {
      monsterDetail = [...monsterDetail]
      monsterDetail.push({ key, value })
      setMonsterArray(monsterDetail)
    }
  }

  //run the functions when the monster data changes
  useEffect(() => {
    makeMonsterArray()
  }, [monster])


  //loading
  if (monster.length === 0) {
    return <h1>Loading</h1>
  }
  return (
    <div>
      <div className='dnd-card'>
        <Type data={monster} />
        <CoreStats data={monster} />
        <div className='dnd-section'>
          <Saves data={monsterArray} />
          <Skills data={monster} />
          <Abilities data={monster} />
          <Languages data={monster} />
          <Challenge data={monster} />
        </div>
        <div className='dnd-block'>
          <SpecialAbilities data={monster} />
          <Actions data={monster} />
          <Legendary data={monster} />
        </div>
      </div>
    </div>
  )
}

export default SingleMonster
