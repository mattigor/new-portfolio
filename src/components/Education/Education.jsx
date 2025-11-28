import "./Education.css";
import Habilities from "../Habilities/Habilities"
import Graduation from "../Graduation/Graduation";

export default function Education() {
    return (
        <section id="education">
            <article>
                <Habilities />
                <hr />
                <Graduation />
            </article>
        </section>
    );
}
