import React, { Fragment, useContext, useEffect } from 'react';

import { Form } from '../components/Form.jsx';
import { Loader } from '../components/Loader.jsx';
import { Notes } from '../components/Notes.jsx';
import { fireBaseContext } from '../context/firebase/firebaseContext';

export const Home = () => {
  const { loading, notes, fetchNotes, removeNode  } = useContext(fireBaseContext);
  useEffect(()=> {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Form />
      <hr/>
      { loading
          ? <Loader/> 
          : <Notes notes={notes} onRemove={removeNode}/>
      }
      
    </Fragment>
  )
}