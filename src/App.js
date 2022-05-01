import React from 'react';
import { 
  BrowserRouter ,
  Switch,
  Route,
} from 'react-router-dom';

import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Alert } from './components/Alert.jsx';
import { AlertState } from './context/alert/AlertState.jsx';
import { FirebaseState } from './context/firebase/FirebaseState.jsx';
import './index.scss';

const App = () => {
  return (
    <FirebaseState>
      <AlertState> {/*компонент обёртка, для того что бы у приложения был доступ к контексту alerta*/}
        <BrowserRouter>
          <Navbar />
          <div className="container pt4">
          <Alert />
            <Switch>
              <Route path={"/"} exact component={Home}/>
              <Route path={"/about"} component={About}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
