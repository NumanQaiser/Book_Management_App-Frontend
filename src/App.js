import './App.css';
import Header from './Components/Header';
import { Context } from './StateManagement/Context';
import MainNavigation from './Navigation/MainNavigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <Context>
      <Header />
      <BrowserRouter>
        <MainNavigation />
      </BrowserRouter>
    </Context>

  );
}

export default App;
