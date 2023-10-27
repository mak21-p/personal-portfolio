import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faReact,
  faWordpress,
  faHtml5,
  faCss3Alt,
  faJs,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

const Frontend = () => {
  return (
    <div className="stackRow">
      <div className="cat">
        <h2>Frontend</h2>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faAngular} color="#fff" />
        <p>Angular</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faReact} color="#fff" />
        <p>React</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faVuejs} color="#fff" />
        <p>Vue.JS</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faWordpress} color="#fff" />
        <p>Wordpress</p>
      </div>
      <div className="feature">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
        >
          <path d="M 27 3 A 1.0001 1.0001 0 0 0 26.292969 3.2929688 L 5.2929688 24.292969 A 1.0001 1.0001 0 0 0 5.2929688 25.707031 L 11.292969 31.707031 A 1.0001 1.0001 0 0 0 12.707031 31.707031 L 39.707031 4.7070312 A 1.0001 1.0001 0 0 0 39 3 L 27 3 z M 27.414062 5 L 36.585938 5 L 12 29.585938 L 7.4140625 25 L 27.414062 5 z M 28 22 A 1.0001 1.0001 0 0 0 27.292969 22.292969 L 15.292969 34.292969 A 1.0001 1.0001 0 0 0 15.292969 35.707031 L 21.292969 41.707031 L 27.292969 47.707031 A 1.0001 1.0001 0 0 0 28 48 L 40 48 A 1.0001 1.0001 0 0 0 40.707031 46.292969 L 29.414062 35 L 40.707031 23.707031 A 1.0001 1.0001 0 0 0 40 22 L 28 22 z M 28.414062 24 L 37.585938 24 L 22 39.585938 L 17.414062 35 L 28.414062 24 z M 28 36.414062 L 37.585938 46 L 28.414062 46 L 23.414062 41 L 28 36.414062 z" />
        </svg>
        <p>Flutter</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faHtml5} color="#fff" />
        <p>HTML</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faCss3Alt} color="#fff" />
        <p>CSS</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faJs} color="#fff" />
        <p>Javascript</p>
      </div>
    </div>
  );
};

export default Frontend;
