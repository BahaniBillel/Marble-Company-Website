import React from 'react';
import { Link } from 'react-router-dom';



export default function SingleCard({img,alt,name,link}) {
    return (
                <div className="single-card"> 
                    <Link to={link}>
                        <div className="imgBox">
                            <div className="inner">
                                <h3>{name}</h3>
                            </div>
                            <img src={img} alt={alt}/>
                        </div>
                    </Link>         
                </div>
           
    )
   
}



/*

<MarbleRow
subTitle="SEMI-WHITE MARBLE"
img1={CardData[0].imgSource}
img2={require("../images/semiWhiteGreece.jpg").default}
img3={require("../images/semiWhitePortuguese.jpg").default}
alt1="Marble semi white Carrara"
alt2="Marble semi white Greece"
alt3="Marble semi white Portuguese"
name1="Semi white Carrara"
name2="Semi White Greece"
name3="Semi White Portuguese"
link1="/"
link2="/projects/"
link3="/offers/"
/>
<MarbleRow
 subTitle="Super White Marble"
 img1={require("../images/THASSOS-01.jpg").default}
 alt1="THASSOS"
 img2={require("../images/FILFILA-01.jpg").default}
 alt2="FILFILA WHITE"
 img3={require("../images/semiWhitePortuguese.jpg").default}
 alt3="Marble semi white Portuguese"
 name1="THASSOS SUPER WHITE"
 name2="FILFILA WHITE"
 name3="CREMA MARFIL"
 link1="/"
 link2="/projects/"
 link3="/offers/"

/>
<MarbleRow
subTitle="BEIGE MARBLE"
img1={require("../images/BRECCIA-1.jpg").default}
img2={require("../images/SUNNY-1.jpg").default}
img3={require("../images/CREMA-MARFIL-01.jpg").default}
alt1="BRECCIA BEIGE"
alt2="SUNNY BEIGE"
alt3="CREMA MARFIL"
name1="BRECCIA BEIGE"
name2="SUNNY BEIGE"
name3="CREMA MARFIL"
link1="/"
link2="/projects/"
link3="/offers/"

/>

*/