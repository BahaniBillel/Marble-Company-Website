import React, { Component } from 'react'
import items from './components/DataBank';

const HallContext = React.createContext();

 export default class HallProvider extends Component {
    state={
        marbles:[],
        sortedMarbles:[],
        featuredMarbles:[],
        loading:true,
    }

    componentDidMount(){
        let marbles =this.formatData(items);
        let featuredMarbles = marbles.filter(marble=> marble.feature === true)
        this.setState({
            marbles,
            featuredMarbles,
            sortedMarbles:marbles,
            loading:false
        })

       

    }

    formatData(itemz){
        let tempItems = itemz.map(item=>{
            let id = item.id;
            let images=item.images;
            let marble ={...item,id,images}
            return marble
           
        })
        return tempItems;
    }

    getMarble=(slug)=>{
        let tempMarble =[...this.state.marbles];
        const marble = tempMarble.find(marble=>marble.slug === slug);
        return marble;
    }
   
    render() {
        return (
            <HallContext.Provider value={{...this.state,getMarble:this.getMarble}}>
                {this.props.children}
            </HallContext.Provider>
        )
    }
}


const HallConsumer = HallContext.Consumer;


export {HallContext,HallProvider,HallConsumer};