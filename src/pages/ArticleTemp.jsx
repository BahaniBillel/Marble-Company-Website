import React from 'react';
import './ArticleTemp.scss';
import Title from '../components/Title';


export default function ArticleTemp({img,title,para}) {
    return (
        <article className="article">
            <div className="imgBox">
                <img src={img} alt="/"/>
            </div>
            <div className="content">
                <Title 
                Title="Get the latest update"
                subTitle="never say never"
                stylo='heading'
                />
                <h2>{title}</h2>
                <p>{para}</p>
            </div>
        </article>
    )
}
