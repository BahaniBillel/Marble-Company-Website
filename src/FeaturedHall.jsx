import React, { Component } from 'react';
import { HallContext } from './Context';
import Marble from './Marble';

export default class FeaturedHall extends Component {
  
    static contextType =HallContext;
    render() {
        let {featuredMarbles:marbles} =this.context;
        console.log(marbles);
         marbles =marbles.map(marble=>{
            return <Marble key={marble.id} marble={marble}/>
        })
        
        return (
            <div className="featuredMarbles">
                <div className="featured-marbles-center">
                    {marbles}
                </div> 
            </div>
        )
    }
}
