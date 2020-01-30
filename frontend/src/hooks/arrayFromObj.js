// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'

function arrayFromObj(data) {

  const [items, setItems] = useState([])

  function getItems() {
    const itemsArr = []

    for (const [key, value] of Object.entries(data)) {
      itemsArr.push({ type: key, value: value })
    }
    setItems(itemsArr)
  }

  //run the functions when the monster data changes
  useEffect(() => {
    getItems()
  }, [data])

  return items
}

export default arrayFromObj