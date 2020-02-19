# Elorin : a custom Dungeons and Dragons world

## Features

### For DM

#### Random encounter generator (Open5e API)
- [x] take party data
- [x] calculate xp thresholds
- [ ] return suggested monsters based on CR
- [ ] setup threshold check table in DB rather than as array
- [ ] BUG: low prio. Few cases where xp calculator fails due to bad information in level input fields, hard to reproduce.

#### Calendar
- [ ] Calendar

### User access

- [x] Register (can only be done via admin)
- [x] Login
- [ ] Logout (code exists, need to put on page)


### Character creation by users

- [x] Character ERD
- [ ] Character key info form
- [ ] Character inventory
- [ ] DM question list(s)

### World creation

- [ ] Race/Subraces
- [ ] Cities/Countries
- [ ] Key historical moments

----

## Notes

### ERD

Character

<img src='https://raw.githubusercontent.com/jennikate/elorin/master/readme_images/character-ERD.png' width='300px' />

Place

<img src='https://raw.githubusercontent.com/jennikate/elorin/master/readme_images/place-ERD.png' width='300px' />