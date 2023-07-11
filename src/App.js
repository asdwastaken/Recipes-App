import './App.css';
import Navigation from './Components/Navigation/Navigation';
import { AuthContext } from './Context/AuthContext';
import RoutesComp from './Routes/RoutesComp';

function App() {


  return (
    <AuthContext>
      <div className="App">
        <Navigation />

        <main>
          <RoutesComp />
        </main>

      </div>
    </AuthContext>
  );
}

export default App;
