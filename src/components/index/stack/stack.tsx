import Backend from "./backend";
import Frontend from "./frontend";
import Databases from "./databases";

const StackComponent = () => {
  return (
    <div className="sectionWrapper reverseMobile">
      <div className="section dark stackWrapper">
        <Frontend />
        <Backend />
        <Databases />
      </div>
      <div className="section textSection">
        <h2>Tech Stack</h2>
        <p>
          I specialize in web and mobile application development. You can find
          the frameworks and languages I am most comfortable with here. For a
          detailed view of my skills, you can refer to my CV here.
        </p>
      </div>
    </div>
  );
};

export default StackComponent;
