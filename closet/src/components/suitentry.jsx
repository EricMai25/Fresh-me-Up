import React from 'react';
import '../App.css'

const suitentry = (props)=>{
    return(
        <div className="box">
            <div>{props.suits.name}</div>
            <img  className='articlePic' src={props.suits.image} alt='article of clothing'></img>
            <div>{props.suits.type}</div>
            <div>{props.suits.color}</div>
            {!props.suits.laundry
            ?<button onClick={()=>{props.outfitter(props.suits)}}>Outfit Me</button>
            : null    
            }
            <div>
            {props.suits.laundry 
            ? <img className='laundIcon' src='https://s3-us-west-1.amazonaws.com/miniviableproductimages/laundIcon.ico' alt='Icon'></img>
            : null
            }
            </div>
        </div>
    )
}

export default suitentry;