import React from 'react';
import SuitEntry from './suitentry.jsx'
import '../App.css'


const mainlist = (props) =>{
    return (
        <div className='listing'>
              {props.laundry ? <h2>Laundry Basket</h2> : null}
              {props.home ? <h2>Recommended for {Date(Date.now())}</h2> : null}
              {props.suit ?<h2>Jacket</h2> : null}
            <div  className={props.home
            ? 'each'
            : null }>
              {props.suit ? props.suit.map((item)=> {
               return <SuitEntry laund={props.laundry} suits={item} outfitter={props.outfitter}/>
              } ) : null} 
            </div>
              {props.shirt ?<h2>Shirt</h2>:null}
            <div className='each'>
              {props.shirt ? props.shirt.map((item)=> {
               return <SuitEntry laund={props.laundry} suits={item} outfitter={props.outfitter}/>
              } ) : null} 
            </div>
              {props.pants ?<h2>Pants</h2> : null}     
            <div className='each'>
              {props.pants ? props.pants.map((item)=> {
               return <SuitEntry laund={props.laundry} suits={item} outfitter={props.outfitter}/>
              } ) : null} 
            </div>
              {props.shoes ?<h2>Shoes</h2> : null}
            <div className='each'>
              {props.shoes ? props.shoes.map((item)=> {
               return <SuitEntry laund={props.laundry} suits={item} outfitter={props.outfitter}/>
              } ) : null} 
            </div>
              {props.watches ?<h2>Watch</h2> :null}
            <div className='each'>
              {props.watches ? props.watches.map((item)=> {
               return <SuitEntry laund={props.laundry} suits={item} outfitter={props.outfitter}/>
              } ) : null} 
            </div>
        </div>

    )
}

export default mainlist