import React from 'react'
import LoremIpsum from 'react-lorem-ipsum';
import {Link} from 'react-router-dom';

export default function Location() {

 
    return (
        <div className="map">
            <div className="wrapper p-5">
                <div className="content">
                    <h2>Let us Help Create your prject dream</h2>
                    <p><LoremIpsum p={1} avgSentencesPerParagraph={3} avgWordsPerSentence={9}/></p>
                     
                </div>
                <div className="contactForm ">
                    <div className="row mb-3">
                        <div className="col pl-0">
                            <input type="email" className="form-control mb-3 " placeholder="Email" />
                            <input type="text" className="form-control"  placeholder="Name" aria-label=".form-control-sm" />
                        </div>
                        <div className="col pr-0">
                            <input type="text" className="form-control mb-3"  placeholder="Subject" aria-label=".form-control-sm"/>
                            <input type="text" className="form-control"  placeholder="Tel" aria-label=".form-control-sm" />
                        </div>
                    </div>
                    <div className="row mb-3 pl-0">
                          <textarea class="form-control w-100 h-100"  placeholder="Content" rows="8"></textarea>
                    </div>
                    <Link className="btn btn-dark " to="/">Contcter-nous</Link>
                </div>
            </div>
        </div>
    )
}
