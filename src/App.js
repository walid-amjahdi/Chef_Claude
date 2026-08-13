import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { FavoriteThings } from './Components/FavoriteThings';
import { ConditionalComp } from './Components/ConditionalComp';

function App() {
  return (
    <>
      <Header />
      <Main />
      <FavoriteThings />
      <ConditionalComp />
    </>
  );
}

export default App;
