import "./Projects.css";
import ProjectOne from "../ProjectOne/ProjectOne";
import ProjectTwo from "../ProjectTwo/ProjectTwo";

export default function Projects({header, description}) {
    return (
        <section id="my-projects">
            <article>
                <h1>{header}</h1>
                <p>{description}</p>
                <hr />
                <ProjectOne />
                <ProjectTwo />
            </article>
        </section>
    );
}
