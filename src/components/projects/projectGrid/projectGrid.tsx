import { useEffect, useState } from "react";
import Project from "../project/project";
import "./projectGrid.scss";
import { client } from "../../../sanity";
import type { Result } from "../../../types/post.types";
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const ProjectGrid = () => {
  const [projects, setProjects] = useState<Result[]>([]);

  useEffect(() => {
  async function getProjects() {
    console.log("API STARTED")
    const data = (await client.fetch(`*[_type == "post"]`)) as Result[];
    setProjects(data);
  }
  getProjects();
  console.log(projects)
  }, []);
  
  useEffect(() => {
    console.log(projects);
  }, [projects]);

  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }


  return (
    <div className="projectsWrapper">
      <h1>Projects</h1>
      <div className="projectGrid">
        {projects.map(project => (
        <Project
          key={project._id}
          imgPath={urlFor(project.featured_image.asset).url()}
          excerpt={project.Excerpt}
          heading={project.title}
          category={project.Category}
          id={project._id}
        />
      ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
