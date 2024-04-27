import "./assets/styles/index.css";
import menuImage from "./assets/images/video.png";
import Header from "./components/Header";
import geometryIcon from "./assets/images/geometry.png";
import diagramIcon from "./assets/images/diagram.png";
import meetingIcon from "./assets/images/meeting.png";
import Card from "./components/Card";

function App() {
  return (
    <div className="main">
      <Header
        title="Managed agency selection"
        subtitle="Stenghten your onboarding process"
      />
      <div className="menu-container">
        <div className="photo">
          <img src={menuImage} alt="video" />
        </div>
        <div className="card-container">
          <Card
            title="Brief"
            text=" Complete brief writing or simple guidance on what to include, we've
          got you covered"
            image={geometryIcon}
          />
           <Card
            title="Search"
            text=" In-depth agency search covering; criteria matching, door-knocking and due-dillegence vetting"
            image={diagramIcon}
          />
           <Card
            title="Pitch"
            text="Comprehensive pitch management; including comms, diary management and pitch hosting;"
            image={meetingIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
