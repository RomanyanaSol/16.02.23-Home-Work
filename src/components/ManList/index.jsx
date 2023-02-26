import React from 'react'
import { useSelector } from 'react-redux'
import People from '../People';
import s from './style.module.css'



export default function ManList() {

  const man = useSelector(state => state);



  return (

    <div className={s.container}>
      {
        man.length === 0
        ? ''
        :<p className={s.title}>Мужчины</p>
      }
      <div className={s.innerContainer}>
      {
        man
          .filter((people) => people.gender === 1)
          .map((people) => <People key={people.id} {...people} />)
      }
      </div>
    </div>


  )
}
