import './app.scss';
import Topbar from "./components/topbar/Topbar";
import Sidemenu from './components/sidemenu/Sidemenu';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className='container'>
        <Sidemenu />
        <Home />
      </div>
    </div>
  );
}

export default App;
