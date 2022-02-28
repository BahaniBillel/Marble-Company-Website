import React, { Component } from 'react';
import { HallContext } from '../Context';
import { Link } from 'react-router-dom';


export default class singleMarblePage extends Component {
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
        const {name,text,images}=marble
        return (
            <div>
                <p>{text}</p>
                <img src={images} alt={name}/>
            </div>
        )
    }
}
