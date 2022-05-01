import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';

import { AlertContext } from '../context/alert/alertContext';

export const Alert = () => {
//используем useContext и передаём в него созданный нами ранее контекст, для получения доступа к state и функциям
  const { alert, hide } = useContext(AlertContext);
  return(
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350
      }}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || "warning"} alert-dismissible `} role="alert">
        <strong>Внимание</strong>
        {alert.text}
        <button
          type="button" 
          className="close" 
          aria-label="Close"
          onClick={hide}
        >
        &times;
        </button>
      </div>
    </CSSTransition>
  )
}