import "../styles/ratsastus.css"
import React from "react";
import background from "../media/background_image.jpg";
import logo from "../media/logo.gif"

function Ratsastus() {
    return(
        <div className="ratsastus-container">
            <div className="ratsastus-title">Harrastukseksi ratsastus?</div>
            <div className="ratsastus-text">
                <p>
                    Ratsastus on monipuolinen ja palkitseva harrastus, joka tarjoaa fyysistä kuntoa,
                    mielenrauhaa ja yhteyttä eläimeen. Se sopii kaikenikäisille ja -tasoisille, tarjoten
                    mahdollisuuksia niin harraste- kuin kilparatsastukseenkin. Ratsastus kehittää tasapainoa,
                    koordinaatiota ja lihasvoimaa. Samalla se opettaa vastuullisuutta, sillä hevosen hoito ja
                    hyvinvointi ovat keskeisiä osia lajia. Ratsastus voi olla rentoa maastoilua tai intensiivistä
                    valmentautumista eri lajeihin, kuten koulu-, este- tai kenttäratsastukseen. Se tarjoaa myös
                    sosiaalisen ulottuvuuden, sillä ratsastusseurat ja -tallit yhdistävät samanhenkisiä ihmisiä.
                </p>
            </div>
            <div className="ratsastus-title">5 vinkkiä ensikertalaiselle!</div>
            <div className="ratsastus-text">
                <p>
                    1.Käy tutustumassa tallin tiloihin ja hevosiin ennen ensimmäistä ratsastustuntia!
                    <br/>
                    2.Varaa reilusti aikaa ennen tunnin alkua, jotta ehdit hoitaa hevosen valmiiksi tuntia varten.
                    <br/>
                    3.Pyydä joku ystävä, perheenjäsen tai muu tuttava mukaan tallille.
                    <br/>
                    4.Harrastetason varusteita ei tarvitse heti alkuun hankkia, mutta pienellä korolla varustetut umpinaiset
                    kengät, joustavat housut sekä hanskat lähtee mukaan.
                    <br/>
                    5.Haasta itseäsi alusta alkaen oppimaan uutta ja kokeilemaan asioita, mutta pidä rento
                    asenne mukana, oman mukavuusalueen ulkopuolelle ei tarvitse mennä.
                </p>
            </div>

            <div className="ratsastus-title">Esittelyssä Savisaaren ratsastuskeskus</div>
            <div className="ratsastus-text">
                <p>
                    Savisaaren ratsastuskeskus on Kuopiossa sijaitseva SRL:n hyväksymä talli,
                    joka on perustettu vuonna 1994. Ratsastuskeskus sijaitsee muutaman kilometrin päässä
                    Kuopion keskustasta luonnon keskellä saaressa. Tallilla on noin 20 hevosta/ponia, ja
                    henkilökuntaa n.10.
                    <br/><br/>
                    Allekirjoittanut on itse aloittanut ratsastuksen kyseisellä tallilla n.10-vuotiaana, ja
                    vielä yli 10 vuotta myöhemminkään ei ole päässyt tuolta lähtemään. Tallin ilmapiiri on mitä mainioin
                    uudelle harrastajalle, sillä talli on sopivan pieni siihen, että "kaikki tuntee kaikki". Ilmapiiri
                    tallilla on hyvä, ja jokaiselle löytyy tilaa. Myös hevoset ovat taitavia, mukavia ja erilaisiin
                    tarpeisiin tai toiveisiin löytyy aina sopiva ratsu.
                    <br/><br/>
                    Tallin tiedot: <br/>
                    Nimi: Savisaaren ratsastuskeskus <br/>
                    Sähköposti: talli@savisaari.com <br/>
                    Osoite: Savisaari 61, 70200 Kuopio
                    <br/><br/>
                    Klikkaa kuvaa päästäksesi tutustumaan tarkemmin tallin sivuihin ja hevosiin!
                    <a href="https://www.savisaari.com"><img src={logo} alt="logo"/></a>
                </p>
                <iframe className="map" style={{opacity: `1`}} sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals allow-storage-access-by-user-activation" frameBorder="0" aria-label="Map, Savisaari 61" src="https://maps-api-ssl.google.com/maps?hl=en&amp;ll=62.902704,27.619349&amp;output=embed&amp;q=Savisaari+61,+70200+Kuopio,+Finland+(Savisaari+61)&amp;z=15" allowFullScreen=""></iframe>
            </div>
        </div>
    )
}

export default Ratsastus