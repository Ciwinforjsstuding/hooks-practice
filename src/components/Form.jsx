import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { fireBaseContext } from '../context/firebase/firebaseContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const { show } = useContext(AlertContext);
  const firebase = useContext(fireBaseContext);
  const submitHandler = (event) => {
    event.preventDefault();

    if(value.trim()) {
      firebase.addNote(value.trim()).then(() => { 
        show("Заметка была добавлена", "success");
      }).catch(() => {
        show("Что-то пошло не так");
      })

      //...
      show("Заметка была создана", "success");
      setValue("");//очищаем input
    } else { 
      show(" Введите название заметки");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название заметки"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </form>
  )
}