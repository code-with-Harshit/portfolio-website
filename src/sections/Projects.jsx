import { projects } from "../data/projects";
import MinecraftButton from "../components/MinecraftButton";

function Projects() {
    return (
        <section id="projects" className="projects-section">

            <div className="projects-container">

                <div className="section-heading projects-heading">

                    <span className="section-eyebrow">
                        BUILDER'S WORKSHOP
                    </span>

                    <h2>
                        BUILDS
                    </h2>

                    <p>
                        Projects I've built while learning,
                        experimenting and solving problems.
                    </p>

                </div>


                <div className="projects-grid">

                    {projects.map((project) => (

                        <article
                            key={project.id}
                            className="project-card"
                        >

                            <div className="project-card-top">

                                <span className="project-icon">
                                    {project.icon}
                                </span>

                                <span className="project-status">
                                    {project.status}
                                </span>

                            </div>


                            <div className="project-type">
                                {project.type}
                            </div>


                            <h3>
                                {project.title}
                            </h3>


                            <p className="project-description">
                                {project.description}
                            </p>


                            <div className="project-tech">

                                {project.tech.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}

                            </div>


                            <div className="project-actions">

                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-link"
                                    >
                                        LIVE BUILD ↗
                                    </a>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-link secondary"
                                    >
                                        SOURCE ↗
                                    </a>
                                )}

                                {!project.live && !project.github && (
                                    <span className="project-link disabled">
                                        BUILD IN PROGRESS
                                    </span>
                                )}

                            </div>

                        </article>

                    ))}

                </div>

            </div>
        
            <div className="builds-exit-transition">

              <span className="builds-exit-line" />

              <span className="builds-exit-icon">
                  ✦
              </span>

              <span className="builds-exit-line" />

            </div>
        </section>
    );
}

export default Projects;