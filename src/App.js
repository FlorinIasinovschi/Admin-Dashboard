import './app.scss';
import Topbar from "./components/topbar/Topbar";
import Sidemenu from './components/sidemenu/Sidemenu';


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className='container'>
        <Sidemenu className="sidemenu" />
        <div className='other'>
          Other stuff
        </div>
      </div>
    </div>
  );
}

export default App;
