import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap';
import './MarblePageID.scss';
import {Link} from "react-router-dom";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';
import { HallContext } from '../Context';
import {FaDownload} from 'react-icons/fa';
import ArticleTemp from './ArticleTemp';
import {
    FacebookShareButton,
    FacebookIcon,
    EmailShareButton,
    EmailIcon,
    LinkedinShareButton,
    LinkedinIcon,
    PinterestShareButton,
    PinterestIcon,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    ViberShareButton,
    ViberIcon
} from 'react-share';


export default class MarblePageID extends Component {
    constructor(props){
        super(props)
        this.state={
            slug:this.props.match.params.slug,
        }
    }
    static contextType =HallContext
    render() {
        const {getMarble}=this.context;
        const marble =getMarble(this.state.slug)

        if (!marble) {
            return <div className="error">
                <h3>
                no s uch page is found....
                </h3>
                <Link to="/products" className="btn btn-primary">Back to products page</Link>
                </div>
        }

        const {name,title,slug,decorImg,images,idInfo,techInfo,}=marble

        return (
            <div className="marblePageId container-fluid">
                <section className="row">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item  href="/Products/"> 
                            Products
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{name}</Breadcrumb.Item>
                    </Breadcrumb>
                </section>
                <section className="identification">
                    <div className="row">
                        <div className="title"><h2>{title}</h2></div>
                    </div>
                    <div className="detailBox">
                        <div className="imgBox"><ImageGallery items={images}/></div>
                        <div className="infoBox">
                            <div className="infoTable">
                                <div className="row link-share">  
                                        <FacebookShareButton 
                                        url={`http://192.168.1.38:3000/products/${slug}`} 
                                        quote={"tell your freinds about this product"}
                                        hashtag={"marble-nmc"}
                                        >
                                            <FacebookIcon round={false} size={30}/>
                                        </FacebookShareButton>

                                        <EmailShareButton
                                        url={`http://192.168.1.38:3000/products/${slug}`}
                                        quote={"tell your freinds about this produc"}
                                        hashtag={"marble-nmc"}
                                        >
                                            <EmailIcon size={30}/>
                                        </EmailShareButton>

                                        <LinkedinShareButton
                                        url={`http://192.168.1.38:3000/products/${slug}`} 
                                        quote={"tell your freind about this produc"}
                                        hashtag={"marble-nmc"}
                                        >
                                            <LinkedinIcon size={30}/>
                                        </LinkedinShareButton>

                                        <PinterestShareButton
                                        url={`http://192.168.1.38:3000/products/${slug}`} 
                                        quote={"tell your freind about this produc"}
                                        hashtag={"marble-nmc"}
                                        >
                                            <PinterestIcon size={30}/>
                                        </PinterestShareButton>

                                        <FacebookMessengerShareButton 
                                        url={`http://192.168.1.38:3000/products/${slug}`} 
                                        quote={"tell your freind about this produc"}
                                        hashtag={"marble-nmc"}
                                        >
                                            <FacebookMessengerIcon size={30}/>
                                        </FacebookMessengerShareButton>

                                        <WhatsappShareButton 
                                        url={`http://192.168.1.38:3000/products/${slug}`} 
                                        quote={"tell your freind about this produc"}
                                        hashtag={"marble-nmc"}
                                        >
                                            <WhatsappIcon size={30}/>
                                        </WhatsappShareButton>

                                        <ViberShareButton 
                                        url={`http://192.168.1.38:3000/products/${slug}`} 
                                        quote={"tell your freind about this produc"}
                                        hashtag={"marble-nmc"}
                                        >
                                            <ViberIcon size={30}/>
                                        </ViberShareButton>
                                    
                                </div>
                            <table class="table table-hover">
                                <tbody>
                                    <tr>
                                    <td>Family</td>
                                    <td colspan="2">{idInfo.Family}</td>
                                    </tr>
                                    <tr>
                                    <td>Category</td>
                                    <td colspan="2">{idInfo.Category}</td>
                                    </tr>
                                    <tr>
                                    <td>Brand</td>
                                    <td colspan="2">{idInfo.Brand}</td>
                                    </tr>
                                    <tr>
                                    <td>Model</td>
                                    <td colspan="2">{idInfo.Model}</td>
                                    </tr>
                                    <tr>
                                    <td>Products</td>
                                    <td colspan="2">{idInfo.Products}</td>
                                    </tr>
                                    <tr>
                                    <td>Use</td>
                                    <td colspan="2">{idInfo.Use}</td>
                                    </tr>
                                    <tr>
                                    <td>Finition</td>
                                    <td colspan="2">{idInfo.Finition}</td>
                                    </tr>
                                    <tr>
                                    <td>Thikness(mm)</td>
                                    <td colspan="2">{idInfo.Thikness}</td>
                                    </tr>
                                    <tr>
                                    <td>Incoterm</td>
                                    <td colspan="2">{idInfo.Incoterm}</td>
                                    </tr>
                                    <tr>
                                    <td>Terms Of Payment</td>
                                    <td colspan="2">{idInfo.PaymentTerms}</td>
                                    </tr>
                                    <tr>
                                    <td>UpdateTime</td>
                                    <td colspan="2">{idInfo.UpdateTime}</td>
                                    </tr>
                                </tbody>
                            </table>
                                
                            </div>
                            <div className="row"><Link to="/contact/"><div className="btn btn-danger ">Contact us</div></Link></div>
                        </div>
                    </div>
                </section>
               
                <section className="techSheet">
                    <div className="row tech-title">
                        <h3>Technical Informations</h3>
                    </div>
                    <div className="detailBox">
                        
                        <div className="infoBox">
                            <div className="infoTable">
                            <table class="table table-hover">
                                <tbody>
                                    <tr>
                                    <td>Apparent Density</td>
                                    <td colspan="2">{techInfo.ApparentDensity}</td>
                                    </tr>
                                    <tr>
                                    <td>Porosity Per Volume</td>
                                    <td colspan="2">{techInfo.Porosity}</td>
                                    </tr>
                                    <tr>
                                    <td>Sound Velocity</td>
                                    <td colspan="2">{techInfo.SoundVelocity}</td>
                                    </tr><tr>
                                    <td>Compressive Strength</td>
                                    <td colspan="2">{techInfo.CompressiveStrength}</td>
                                    </tr><tr>
                                    <td>BendingStrength</td>
                                    <td colspan="2">{techInfo.BendingStrength}</td>
                                    </tr><tr>
                                    <td>AbrasionResistance</td>
                                    <td colspan="2">{techInfo.AbrasionResistance}</td>
                                    </tr><tr>
                                    <td>Frost Resistance</td>
                                    <td colspan="2">{techInfo.FrostResistance}</td>
                                    </tr><tr>
                                    <td>Download Technical Sheet</td>
                                    <td colspan="2"><Link to={'/'}><FaDownload/></Link></td>
                                    </tr>
                                </tbody>
                            </table>
                                
                            </div>
                        </div>
                        <div className="imgBox"><img src={decorImg} alt={name}/></div>
                    </div>
                    <div className="more-info">
                        <div className="content">
                            <div className="row tech-title">
                               <h3>Packaging</h3> 
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Inventore sed at ex dolorem fugit distinctio nihil, nesciunt veritatis maxime,
                                quam, beatae ad blanditiis animi neque facere esse quae. Numquam, quo.</p>
    
                        </div>
                    </div>
    
                </section>
                <ArticleTemp/>
            </div>
        )
    }
}






