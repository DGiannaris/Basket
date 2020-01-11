import React,{ useState }  from 'react';
import './Item.css';

function BasketItem({item,key,setBasket,basket}) {
  const [onmouse, setOnMouse] = useState(false);
 


 
    return (
    <div key={key}>
      <div style={{display:'flex',flexDirection:'row',marginTop:'3%'}} >
        <div style={{width:300,height:160}}>
           <img  src={item.img}  
           style={{width:200,height:150,borderRadius:13}}  />
        </div> 
      
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',}}>
        <p style={{fontFamily:'Montserrat'}}>{item.name}  <p style={{fontFamily:'Montserrat',fontSize:13}}>{item.price}€ </p> </p>  
        <div style={{display:'flex',flexDirection:'row',}}>
  
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onClick={()=>{
              let newitem=item;
              let newbasket=basket;

                newitem.quantity=item.quantity-1;
                newbasket=basket.filter(it=>it.name !=item.name);
                setBasket([...newbasket,newitem])
              }}>
            <img
              style={{ width: 20, height: 20, borderRadius: 13,transform: `rotate(90deg)`}}
              src={require("./assets/arrow.png")}
            />
          </div>

        <div>
          <p style={{fontFamily:'Montserrat',paddingLeft:7,paddingRight:7,paddingBottom:2}} >{item.quantity}</p>
        </div>

          <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onClick={()=>{
              let newitem=item;
              let newbasket=basket;

                newitem.quantity=item.quantity+1;
                newbasket=basket.filter(it=>it.name !=item.name);
                setBasket([...newbasket,newitem])
              }}>
            <img
              style={{ width: 20, height: 20, borderRadius: 13,transform: `rotate(270deg)`}}
              src={require("./assets/arrow.png")}
            />
          </div>
        </div>
      </div>  

     

      </div>
    </div>
    );
    }
  
  export default BasketItem;
  