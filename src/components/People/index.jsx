import React from 'react'
import s from './style.module.css'


export default function People({name, image}) {
  return (
    <div className={s.man}>
        <img src={image} alt="avatarka" />   
        <p>{name}</p>
    </div>
  )
}
