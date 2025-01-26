import { ReactSVG } from "react-svg";
import analogJSIcon from "../../../assets/analogjs.svg";
import electronJSIcon from "../../../assets/electronjs.svg";
import githubActionsIcon from "../../../assets/gitActions.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons";

const OtherFrameworks = () => {
  return (
    <div className="stackRow">
      <div className="cat">
        <h2>Other</h2>
      </div>
      <div className="feature">
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
        >
          <g transform="translate(.722 .64) scale(6.375)">
            <circle cx="40" cy="40" r="40" />
            <path
              d="M66.448 70.009L30.73 24H24v31.987h5.384v-25.15l32.838 42.427a40.116 40.116 0 004.226-3.255z"
              fill="black"
              fill-rule="nonzero"
            />
            <path fill="black" d="M51.111 24h5.333v32h-5.333z" />
          </g>
          <defs>
            <linearGradient
              id="prefix___Linear1"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(51.103 -29.93 76.555) scale(25.1269)"
            >
              <stop offset="0" stop-color="#fff" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="prefix___Linear2"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(90.218 14.934 38.787) scale(23.50017)"
            >
              <stop offset="0" stop-color="#fff" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <p>NextJS</p>
      </div>
      <div className="feature">
        <img src={analogJSIcon.src} />
        <p>AnalogJS</p>
      </div>
      <div className="feature">
        <img src={electronJSIcon.src} />
        <p>ElectronJS</p>
      </div>
      <div className="feature">
        <img src={githubActionsIcon.src} />
        <p>GitHub Actions</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faDocker} />
        <p>Docker</p>
      </div>
    </div>
  );
};

export default OtherFrameworks;
