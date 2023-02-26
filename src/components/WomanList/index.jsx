import React from 'react'
import { useSelector } from 'react-redux'
import People from '../People';
import s from './style.module.css'


export default function WomanList() {

    const woman = useSelector(state => state);

    return (
        <div className={s.container}>
        <p className={s.title}>Женщины</p>
        <div className={s.innerContainer}>
        {
          woman
            .filter((people) => people.gender === 2)
            .map((people) => <People key={people.id} {...people} />)
        }
        </div>
      </div>
    )
}
