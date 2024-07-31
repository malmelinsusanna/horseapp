import React from "react";
import kuva1 from "../media/image_2.JPG";
import "../styles/rodut.css";
import suomenhevonen from "../media/image_3.jpeg";
import shetlanninponi from "../media/image_4.JPG";
import islanninhevonen from "../media/image_2.JPG";
import suomenpuoliverinen from "../media/image_1.JPG";
import eestinhevonen from "../media/image_5.jpeg";
function Rodut() {
    return (
        <div className="rodut-container">
            <div className="rodut-title">Yleisimmät hevosrodut</div>
            <div className="rodut-titles">Suomenhevonen</div>
            <div className="rodut-text">
                <p>Suomenhevonen on monipuolinen ja kestävä kotimainen hevosrotu, joka tunnetaan hyvästä luonteestaan
                    ja monikäyttöisyydestään. Se on rauhallinen, yhteistyöhaluinen ja oppivainen, minkä vuoksi se
                    soveltuu hyvin erilaisiin ratsastuslajeihin, ajoon ja työhevoseksi. Suomenhevosen rakenne on vahva
                    ja vankka, mutta samalla elegantti. Sen säkäkorkeus on yleensä 150–160 cm, ja sillä on voimakkaat
                    jalat ja hyvä luusto. Suomenhevosta käytetään nykyään erityisesti harraste- ja kilpailuratsuna
                    sekä valjakkoajossa, mutta se on myös perinteisesti ollut tärkeä apu metsätöissä ja maataloudessa.
                    Tämä rotu on Suomen kansallisaarre ja symboli, joka on sopeutunut hyvin pohjoisiin olosuhteisiin.
                </p>
                <img className="rodut-image" src={suomenhevonen} alt="Suomenhevonen"/>
            </div>
            <div className="rodut-titles">Shetlanninponi</div>
            <div className="rodut-text">
                <p>Shetlanninponi on pieni ja vankka ponirotu, joka on kotoisin Skotlannin Shetlandinsaarilta.
                    Se tunnetaan erityisesti  uteliaasta luonteestaan, mutta voi olla myös omapäinen
                    ja vahvatahtoinen. Tämä rotu on erittäin älykäs ja oppivainen, mikä tekee siitä erinomaisen
                    lastenponin ja terapiahevosen. Shetlanninponi on yksi maailman pienimmistä poniroduista,
                    sen säkäkorkeus on yleensä 85–105 cm. Sen rakenne on kompakti ja lihaksikas, ja se on tunnettu
                    kestävyydestään sekä paksusta, suojaavasta talviturkistaan. Shetlanninponia käytetään usein
                    ratsastukseen, valjakkoajoon ja näyttelyihin. Lisäksi se on loistava seurahevonen, jonka kanssa voi
                    tehdä ulkotöitä, käydä lenkillä tai vaikka uimassa.
                </p>
                <img className="rodut-image" src={shetlanninponi} alt="Shetlanninponi"/>
            </div>
            <div className="rodut-titles">Islanninhevonen</div>
            <div className="rodut-text">
                <p>Islanninhevonen on monipuolinen rotu, joka on kotoisin Islannista.
                    Se tunnetaan erityisesti ystävällisestä ja rauhallisesta luonteestaan,
                    mikä tekee siitä suositun harraste- ja perhehevosen. Islanninhevonen on
                    myös hyvin älykäs ja yhteistyöhaluinen, minkä ansiosta se soveltuu erinomaisesti moniin
                    eri ratsastuslajeihin. Tämä rotu on keskikokoinen, säkäkorkeus vaihtelee yleensä 130–145 cm.
                    Islanninhevosen rakenne on vankka ja tukeva, sillä on vahva luusto ja paksu talviturkki,
                    joka suojaa sitä kylmältä. Islanninhevosen erikoisuus on sen viisi askellajia:
                    käynti, ravi, laukka, töltti ja passi. Erityisesti töltti ja passi tekevät tästä rodusta
                    ainutlaatuisen ja arvostetun ratsastuspiireissä. Islanninhevonen on käytössä niin ratsuna
                    kuin vaelluksilla ja kilpailuissa.
                </p>
                <img className="rodut-image" src={islanninhevonen} alt="Islanninhevonen"/>
            </div>
            <div className="rodut-titles">Suomalainen puoliverinen</div>
            <div className="rodut-text">
                <p>
                    Suomalainen puoliverinen on nimensä mukaisesti Suomessa jalostettu, pääosin ratsukäyttöön
                    tarkoitettu rotu. Rodulla on hyvä luonne, se on älykäs, rauhallinen ja oppivainen,
                    minkä vuoksi se sopii sekä kilpa- että harrasteratsuksi. Suomenpuoliverinen on keskikokoinen
                    tai suuri hevonen, jonka säkäkorkeus vaihtelee yleensä 160–175 cm. Sen rakenne on elegantti ja
                    atleettinen, ja sillä on pitkä kaula, vahva selkä ja vahvat jalat, jotka tukevat sen kykyä
                    suoriutua vaativista urheilusuorituksista. Suomenpuoliverisen kasvatuksessa on panostettu
                    erityisesti hyviin liikemekaniikkoihin ja hyppykykyyn. Tämä rotu on suosittu valinta
                    kilpailuratsastajien keskuudessa, ja se tunnetaan myös hyvästä käsiteltävyydestään ja yhteistyökyvystään.
                </p>
                <img className="rodut-image" src={suomenpuoliverinen} alt="Suomenpuoliverinen"/>
            </div>
            <div className="rodut-titles">Eestinhevonen</div>
            <div className="rodut-text">
                <p>
                    Eestinhevonen on monipuolinen ja vahva rotu, joka on kotoisin Virosta. Se tunnetaan
                    tasapainoisesta ja ystävällisestä luonteestaan, mikä tekee siitä ihanteellisen perhe- ja
                    harrastehevosen. Tämä rotu on erityisen kestävä ja sitkeä, ja sillä on hyvä työskentelyhalu,
                    joten se soveltuu hyvin monenlaisiin käyttötarkoituksiin, kuten ratsastukseen, ajoon ja jopa
                    maataloustöihin. Eestinhevonen on keskikokoinen, säkäkorkeus on yleensä 145–155 cm. Sen rakenne on
                    tukeva, ja se on hyvin rakenteeltaan sopusuhtainen. Hevonen on tunnettu hyvästä terveydestään ja
                    pitkäikäisyydestään. Rotua käytetään laajasti niin kilpa- kuin harrasteratsastuksessa sekä
                    perinteisissä työtehtävissä, ja se on suosittu erityisesti kotimaassaan Virossa. Sitä käytetään
                    myös paljon Suomessa, sillä se omaa paljon samanlaisia piirteitä kuin suomenhevonen.
                </p>
                <img className="rodut-image" src={eestinhevonen} alt="Eestinhevonen"/>
            </div>

        </div>
    )

}

export default Rodut