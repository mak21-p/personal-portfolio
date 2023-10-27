import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EnvelopeComponent from "./envelope/envelopeCanvas";

const ContactSection = () => {
  return (
    <div className="sectionWrapper">
      <div className="section dark">
        <EnvelopeComponent />
      </div>
      <div className="section textSection">
        <h2>Contact</h2>
        <p>You can connect with me on the following:</p>
        <div className="socialsWrapper">
          <a href="https://www.linkedin.com/in/maqalik/" target="blank">
            <div className="social">
              <FontAwesomeIcon icon={faLinkedin} />
              <p>LinkedIn</p>
            </div>
          </a>
          <a>
            <div className="social">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Email</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
