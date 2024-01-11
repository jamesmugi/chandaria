import { Link } from "react-router-dom";
import { projects } from "../utils/Data/Projects";

const Projects = () => {
  return (
    <div className="projects-container">
      <section className="hero smaller">
        <div className="carousel">
          <div className="carousel-slide">
            <div className="image-holder">
              <img src={projects?.image} alt="" />
            </div>
            <div className="carousel-text">
              <h1 className="title">{projects?.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section ">
        <h1 className="title">Projects</h1>
        <div className="sub-title">{projects?.subtitle}</div>

        <div className="projects-holder max-width">
          {projects?.projects?.map((project, projectKey) => (
            <Link
              to={`/projects/${project?.path}`}
              className="project-card"
              key={projectKey}
            >
              {/* <div className="technologies-holder">
                {project?.technologies?.map((technology, techIndex) => (
                  <div className="technology" key={techIndex}>
                    {technology}
                  </div>
                ))}
              </div> */}

              <div className="project-title">{project?.title}</div>
              <div
                contentEditable={false}
                className="project-description"
                dangerouslySetInnerHTML={{
                  __html: project?.description,
                }}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
