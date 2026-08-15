import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
// import { FavoriteThings } from './Components/FavoriteThings';
// import { ConditionalComp } from './Components/ConditionalComp';
import { Notification } from './Components/Notification';

function App() {
  return (
    <>
      <Header />
      <Main />
      {/* <FavoriteThings />
      <ConditionalComp />*/}
      <Notification /> 
    </>
  );
}

export default App;
