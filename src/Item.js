import React from 'react';
import './Item.css';

function Item({item}) {


 
    return (
    <div>
      <div style={{width:220}}>
         <img className='itemCont' style={{width:200,height:150,borderRadius:13}} src={item.img}  />
          <p style={{fontFamily:'Montserrat'}}>{item.name} 
            <p style={{fontFamily:'Montserrat',fontSize:13}}>{item.price}€ </p>
          </p>

      </div>
    </div>
    );
    }
  
  export default Item;
  