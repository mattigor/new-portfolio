import "./Presentation.css";
import myImg from "../../assets/img/eu.jpg";
import myCv from "../../assets/docs/CV Igor Matheus.pdf";

export default function Presentation({greeting, name, about}) {
    return (
        <section id="about-me">
            <article>
                <figure>
                    <img src={myImg} alt="Foto Igor Matheus" />
                </figure>
                <h1>{greeting}<span>{name}</span></h1>
                <p>{about}</p>
                <a href={myCv} rel="noopener noreferrer" target="_blank">
                    <input type="button" value="Visualizar CV" id="about-me-button-cv" />
                </a>
            </article>
        </section>
    );
}
