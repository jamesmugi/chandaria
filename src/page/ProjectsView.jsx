import { useParams } from "react-router-dom";
import { projects } from "../utils/Data/Projects";

const ProjectsView = () => {
  const urlParams = useParams();

  const project = projects?.projects?.filter(
    (project) => project?.path === urlParams?.path
  )[0];

  return (
    <div className="projects-container" style={{ marginTop: "7rem" }}>
      <section className="projects-section max-width">
        <h1 className="title">{project?.title}</h1>
        <div className="content-view">
          <div className="description">
            <div
              contentEditable={false}
              className="project-description-view"
              dangerouslySetInnerHTML={{
                __html: project?.description,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsView;
