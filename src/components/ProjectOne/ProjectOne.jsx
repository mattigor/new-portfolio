import "./ProjectOne.css";
import imgPjcOne from "../../assets/img/macbook_malignants.png";

export default function ProjectOne() {
    return (
        <div className="my-projects-container my-projects-container-malignants">
                <figure className="my-projects-container-img-laptop">
                    <img src={imgPjcOne} alt="Website Malignants" />
                </figure>
                <div className="my-projects-container-right">
                    <div className="my-projects-container-right-langs">
                        <span className="my-projects-container-right-langs-langs">HTML</span><span className="my-projects-container-right-langs-langs">CSS</span><span className="my-projects-container-right-langs-langs">JavaScript</span><span className="my-projects-container-right-langs-langs">Bootstrap</span>
                    </div>
                    <p>Este foi o primeiro projeto em que obtive sugestões dos futuros usuários, os quais me ajudaram muito a entregar um site que tivesse as características desse nome tão especial.</p>
                    <div className="my-projects-container-right-buttons">
                        <a href="https://mattigor.github.io/malignants_website/" rel="noopener noreferrer" target="_blank"><button className="my-projects-container-right-buttons-button my-projects-container-right-buttons-button-left">Visitar projeto<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className="my-projects-container-right-buttons-button-svg-left" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></button></a>

                        <a href="https://github.com/mattigor/malignants_website" rel="noopener noreferrer" target="_blank"><button className="my-projects-container-right-buttons-button my-projects-container-right-buttons-button-right">Ver repositório<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className="my-projects-container-right-buttons-button-svg-right" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></button></a>
                    </div>
                </div>
            </div>
    );
}
