import Logo from "../Assests/Logo.png";
import ComingSoons from "../Assests/comingsoon.png";
import Rocket from "../Assests/Rocket.png";
import "./ComingSoon.css";
function ComingSoon() {
  return (
    <div className="comingMain">
      <div className="upperPart">
        <div className="koshishLogo">
          <img src={Logo} alt="Koshis Logo"></img>
        </div>
        <div className="empower">Empower through Innovation</div>
        <div className="comingSoon">
          <img src={ComingSoons} alt="coming soon"></img>
        </div>
      </div>

      <div className="lowerPart">
        <div className="rocketimg"><img  src={Rocket}></img></div>
        <div className="svg">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path className="svgPath"
              d="M43.507 59.5C1.50703 64.7 -3.99297 85.6667 -1.49297 95.5V188H1444.01V84.5C1439.01 64.5 1415.01 28 1359.01 42C1289.01 59.5 1250.01 131.5 1199.01 95.5C1148.01 59.5 1053.5 16.4266 981.507 27C952 31.3336 893.307 62.2 836.507 77C765.507 95.5 746.507 33.5 740.007 5H700.507C715.707 70.2 624.007 77 551.507 86.5C438.507 86.5 418.507 12.3 340.507 59.5C262.507 106.7 200.007 103.167 178.507 95.5C151.007 81.3333 85.507 54.3 43.507 59.5Z"
              fill="white"
              stroke="none"
            />
            <text className="organizer" x="50%" y="80%" text-anchor="middle">
              Organized by COESIS
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
