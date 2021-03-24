import './App.css';
import { Tableau } from './components/Tableau';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Tableau />
    </GlobalProvider>
  );
}

export default App;
