import ProjectOv from "./projectOv";

const ProjectsOverview = () => {
  return (
    <div className="sectionWrapper">
      <div className="section textSection">
        <h2>Projects</h2>
        <p>
          Making use of all of my skills, I aim to bring the best possible
          product to my clientele.
        </p>
      </div>
      <div className="section dark">
        <div className="overviewWrapper">
          <ProjectOv
            imgPath="/chambers32.webp"
            heading="Chambers 32"
            excerpt="Elegant and Formal web design."
            category="Wordpress"
            id=""
          />
          <ProjectOv
            imgPath="/chambers32.webp"
            heading="Chambers 32"
            excerpt="Elegant and Formal web design."
            category="Wordpress"
            id=""
          />
          <button>
            <a>View All</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;
