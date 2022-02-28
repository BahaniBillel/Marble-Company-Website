import styled from 'styled-components';

const Article = styled.section`

// background-color:#000;
background-color:#000 ;
height:80vh;
width:100%;
color:${props=>props.secondary ? "red":"yellow"}

`


export {Article};