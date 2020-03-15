import React, { useState, useEffect } from 'React'



const Calendar = () => {

  const months = [
    { monthNum: 1, monthName: 'Birindh' },
    { monthNum: 2, monthName: 'Oburan' },
    { monthNum: 3, monthName: 'Ucuna' },
    { monthNum: 4, monthName: 'Dorteth' },
    { monthNum: 5, monthName: 'Besindh' },
    { monthNum: 6, monthName: 'Altida' },
    { monthNum: 7, monthName: 'Saptela' },
    { monthNum: 8, monthName: 'Optulah' },
    { monthNum: 9, monthName: 'Nouane' },
    { monthNum: 10, monthName: 'Zecela' },
    { monthNum: 11, monthName: 'Onbira' },
    { monthNum: 12, monthName: 'Onika' },
    { monthNum: 13, monthName: 'Nihai' }
  ]

  const [days, setDays] = useState()

  const createDays = () => {
    const days = []
    for (let i = 0; i < 28; i++) {
      days.push(i + 1)
    }
  }

  useEffect(() => {
    setDays()
  }, [])

  return (
    <section>
      <h2>Calendar</h2>

      <div className='calendar flex-horizontal'>

        {/* {days.map((day, i) => {
          return (
            <div key={i} className='header day'>
              {day.dayName}
            </div>
          )
        })} */}

        {days.map((day) => {
          return (
            <div key={day.dayNum} className='day'>
              {day.dayNum}
            </div>
          )
        })}
        

      </div>



    </section>
  )
}

export default Calendar


