


// ask if players are all the same level

// if all players are same level then 
  // take number of players via + and -
  // display level input field
  // on calculate 
    // CALCULATOR
    // (level * numPlayers) * easy / med / diff / deadly
    // return results

  // after calculate
    // if number of players changes AND all players remain same level then
    // on calculate
      // CALCULATOR
      // update numPlaters
      // (level * numPlayers) * easy / med / diff / deadly 
      // return results

    // all players changes to be different levels
      // refresh numPlayers to 0
      // refresh level to 0
      // leave different level selected

// if all players are different level then
  // take number of players via + and -
  // for each +
    // add 1 to numPlayers
    // show input form for level for player[n]
  // for each - 
    // remove 1 from numPlayers
    // hide the last input
    // clear any value from the last input
  // on calculate
    // CALCULATOR
    // for each player
      // get charLevel
      // easyValue = easyXP + easyValue (repeat for med, diff, deadly)
      // return results
      

// TRICKY THINGS
// one calculation is pure *, the other is find level and +
// once a user has calculated, can they add more & recalculate - how do I handle that

