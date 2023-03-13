import './App.css';
import Smoke from './Assests/Vector 2.png';
import Rocket from './Assests/Rocket.png';
import Coming from './Assests/comingsoon.png';
import Logo  from './Assests/Logo.png';
function App() {
  return (
    <div className="Main">
      <div className="Overlay">
      <div className="Logo"><img src={Logo} alt="Coesis Logo" /></div>
      <div className="Text"><center>Empower through Innovation</center></div>
      <div className="Commingsoon"><img src={Coming} alt="Comming Soon Logo" /></div>
      <div className="Rocket"><img src={Rocket} alt="Rocket" /></div>
      <div className="Smoke"><img src={Smoke} alt="Smoke" />
        <div className="OverlayText"><center>Organized by COESIS</center></div>
      </div>
      </div>
    </div>
  );
}

export default App;
