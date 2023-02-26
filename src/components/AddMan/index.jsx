import React from 'react';
import { useDispatch } from 'react-redux';
import s from './style.module.css'


export default function AddMan() {


  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    const { name, image, gender } = event.target;

    dispatch({
      type: 'MAN_ADD', payload:
      {
        id: Date.now(),
        name: name.value,
        image: image.value,
        gender: +gender.value
      }
    })

    name.value = '';
    image.value = '';
  }

  const taskType = [
    { id: 1, title: 'Мужской', value: 1 },
    { id: 2, title: 'Женский', value: 2 }
  ];

  return (
    <form onSubmit={submit} className={s.form}>
      <input type="text" name='name' placeholder='Имя' />
      <input type="text" name='image' placeholder='Ссылка на аватарку' />
      <select name="gender">
        {
          taskType.map(({ id, value, title }) => <option key={id} value={value}>{title}</option>)
        }
      </select>
      <button>Добавить</button>
    </form>
  )
}
