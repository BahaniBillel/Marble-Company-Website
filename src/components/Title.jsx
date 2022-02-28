import React from 'react'
import {FaFeatherAlt} from 'react-icons/fa';


export default function Title({Title,subTitle,stylo}) {
    return (
        <div className={stylo}>
            <h2>{Title}...<FaFeatherAlt/></h2>
            <h4>{subTitle} </h4>          
        </div>
    )
}


