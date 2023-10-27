type overviewProps = {
  imgPath: string;
  heading: string;
  category: string;
  excerpt: string;
};

function ProjectOv(props: overviewProps) {
  return (
    <div className="projectOv">
      <img src={props.imgPath} />
      <h3>{props.heading}</h3>
      <h4>{props.category}</h4>
      <p>{props.excerpt}</p>
    </div>
  );
}

export default ProjectOv;
