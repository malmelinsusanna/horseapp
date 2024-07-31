import React from "react";
import "../styles/etusivu.css"
import background from "../media/background_image.jpg";

function Etusivu() {
    return (
        <div className="tausta">
            <div className="frontpage-container" style={{backgroundImage: `url(${background}`,
                backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            </div>
            <div className="frontpage-text"> Tervetuloa! Tämä on hevosaiheinen tietosivu, jossa pääset
            tutustumaan siihen, millainen eläin hevonen on, mitä hevosen luonteeseen ja käyttäytymiseen kuuluu.
            Lisäksi pääset tutustumaan yleisimpiin hevosrotuihin. Sivulla kerrotaan myös ratsastusharrastuksesta, sen
            hyvistä ja huonoista puolista sekä annetaan muutama vinkki, miten päästä alkuun, jos ratsastuksen aloitus
            herättää kiinnostuksesi.</div>
        </div>

    )

}

export default Etusivu