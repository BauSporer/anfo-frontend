import React from 'react'

export const Second = () => {
  return (
    <div className='grid grid-cols-1 text-2xl gap-2 w-40'>
        <h1 className='underline font-bold'>Anmeldeformular</h1>
        <input className='border-blue-800 border-2' placeholder='Vorname'></input>
        <input className='border-blue-800 border-2' placeholder='Nachname'></input>
        <input className='border-blue-800 border-2' placeholder='Adresse'></input>
        <input className='border-blue-800 border-2' placeholder='PLZ'></input>
        <input className='border-blue-800 border-2' placeholder='E-Mail'></input>
        <input className='border-blue-800 border-2' type='date' ></input>
        <button className='bg-blue-800 w-40'>Klick mich</button>
   
    </div>
  )
}
