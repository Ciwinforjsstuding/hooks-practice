import React, { useReducer } from 'react';
import axios from 'axios'

import { fireBaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from '../types';

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };


  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async() => {
    showLoader();
    const result = await axios.get(`${url}/notes.json`);
    const payload =  Object.keys(result.data).map(key => {//меняем объект со вложенными объектами на массив объектов
      return {
        ...result.data[key],
        id: key
      }
    });

    dispatch({
      type: FETCH_NOTES,
      payload,
    });
  }

  const addNote = async title => {
    const note = {
      title,
      date: new Date().toJSON()
    }
    try {
      const result = await axios.post(`${url}/notes.json`, note);
      const payload = {
        ...note,
        id: result.data.name
      }
      dispatch({
        type: ADD_NOTE,
        payload,
      })
    } catch (e) {
      throw new Error(e.message);
    }
  }

  const removeNode = async id => {
    await axios.delete(`${url}/notes/${id}.json`);
    dispatch({
      type: REMOVE_NOTE,
      payload: id
    });
  }
//создаём функции для показа и скорытия alerta , а также передаём в контекст текущее состояние alerta true/false
  return (
    <fireBaseContext.Provider value={{
      showLoader, addNote, removeNode, fetchNotes,
      loading: state.loading,
      notes: state.notes,
    }}>
    { children }
    </fireBaseContext.Provider>
  )
}