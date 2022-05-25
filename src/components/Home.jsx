import React from "react";
// import React, { Component } from 'react'
import FOTO_1 from "../images/FOTO_1.jpg";
import FOTO_29 from "../images/FOTO_29.jpg";
import FOTO_30 from "../images/FOTO_30.jpg";
import Powder from "../images/marblePowder.png";
import Founder_2 from "../images/founder.jpg";
import Tiles from "../images/tiles_2.JPG";
import Grains from "../images/grain-2.jpg";
import TabDeco from "../images/tableauDecorative.JPG";
import Mission from "../images/mission.jpg";
import Granite from "../images/Granite.JPG";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaFeatherAlt, FaMobileAlt } from "react-icons/fa";
import Location from "./Location";
import FeaturedHall from "../FeaturedHall";

export default function Home() {
  return (
    <div className="home">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={FOTO_29} alt="Second slide" />
          {/* 
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={FOTO_1} alt="First slide" />
          {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={FOTO_30} alt="Third slide" />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Who />
      <CTA />
      <ProductCat />
      <Location />
    </div>
  );
}

// WHO ARE WE SECTION
function Who() {
  return (
    <div className="who">
      <div className="presentation">
        <div className="heading">
          <h2>
            Qui somme-nous?...
            <FaFeatherAlt />
          </h2>
          <h4>Prestige et Nobless du Pierre Naturelle</h4>
        </div>
        <div className="text">
          <p>
            <LoremIpsum p={2} avgSentencesPerParagraph={3} />
          </p>
        </div>
      </div>
      <div className="founder">
        <div className="left">
          <div className="imgBox">
            <img src={Founder_2} alt="/" />
          </div>
        </div>
        <div className="right">
          <div className="heading">
            <h2>
              The Founders...
              <FaFeatherAlt />
            </h2>
            <h4>Pionners of the Economic Venture</h4>
          </div>
          <div className="text">
            <p>
              <LoremIpsum p={1} avgSentencesPerParagraph={5} />
            </p>
            <br />
            <Link to="./founder">
              Lire Plus <FaAngleDoubleRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="mission">
        <div className="left">
          <div className="heading">
            <h2>
              Notre Mission...
              <FaFeatherAlt />
            </h2>
            <h4>auquel nous sommes dédiés</h4>
          </div>
          <div className="text">
            <p>
              <LoremIpsum p={1} avgSentencesPerParagraph={5} />
            </p>
          </div>
        </div>
        <div className="center">
          {/* <br/>
                    <br/>
                    <br/>
                    <br/> */}
          <p>
            <LoremIpsum p={1} avgSentencesPerParagraph={5} />
          </p>
        </div>

        <div className="right">
          <img src={Mission} alt="/" />
        </div>
      </div>
    </div>
  );
}

// CALL TO ACTION COMPONENT

function CTA() {
  return (
    <div className="cta">
      <div className="inner-cta">
        <div className="content">
          <div className="mob-icon">
            <span>
              <FaMobileAlt />
            </span>
          </div>
          <div className="call">
            <h3>Comment pouvons-nous vous aider?</h3>
            <p>
              Contactez-nous et discutez de la manière de soutenir votre projet
              personnalisé.
            </p>
          </div>
        </div>
        <div className="btn btn-danger">Conctacter-nous</div>
      </div>
    </div>
  );
}

// PRODUCTS CATERGORY

function ProductCat() {
  return (
    <div className="productcat">
      <div className="heading">
        <h2>
          NOS PRODUITS...
          <FaFeatherAlt />
        </h2>
        <h4>
          NMC Vous fournir <span>Best</span> produits{" "}
        </h4>
      </div>
      <div className="inner">
        <div className="row">
          <ProductItem
            img={FOTO_1}
            prodTitle="Dalles  du Marbre"
            description={<LoremIpsum p={1} avgWordsPerSentence={1} />}
            to="./Products/"
          />
          <ProductItem
            img={Powder}
            prodTitle="Poudre du Marbre"
            description={<LoremIpsum p={1} avgWordsPerSentence={1} />}
            to="./Products/"
          />
          <ProductItem
            img={Tiles}
            prodTitle="Produit-finis"
            description={<LoremIpsum p={1} avgWordsPerSentence={1} />}
            to="./Products/"
          />
        </div>
        <div className="row">
          <ProductItem
            img={TabDeco}
            prodTitle="Tableaux Decoratives"
            description={<LoremIpsum p={1} avgWordsPerSentence={1} />}
            to="./Products/"
          />
          <ProductItem
            img={Grains}
            prodTitle="Grain du Marbre"
            description={<LoremIpsum p={1} avgWordsPerSentence={1} />}
            to="./Products/"
          />
          <ProductItem
            img={Granite}
            prodTitle="Dalle du Granite"
            description={<LoremIpsum p={1} avgWordsPerSentence={1} />}
            to="./Products/"
          />
        </div>
      </div>
    </div>
  );
}

function ProductItem({ img, prodTitle, description, to }) {
  return (
    <div className="cardItem">
      <div className="imgBox">
        <img src={img} alt="/" />
      </div>
      <div className="content">
        <h4>{prodTitle}</h4>
        <p>
          {description}..
          <Link to={to}>
            Lire plus
            <FaAngleDoubleRight />
          </Link>
        </p>
      </div>
    </div>
  );
}
