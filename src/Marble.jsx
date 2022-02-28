import React from 'react';
import {Link} from 'react-router-dom';


export default function Marble({marble}) {
    
    console.log(marble);
    const {singleImage,slug,name}=marble
    return (
        <div className="marble">
            <div className="marble-inner">
               <img src={singleImage} alt={name}/>
               <Link to={`/products/${slug}`}>
                  <h6>{name}</h6>
               </Link>
            </div>
        </div>
    )
}
