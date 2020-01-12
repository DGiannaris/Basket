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
      
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:200}}>
        <p style={{fontFamily:'Montserrat'}}>{item.name}  <p style={{fontFamily:'Montserrat',fontSize:13}}>{item.price}€ </p> </p>  
        <div style={{display:'flex',flexDirection:'row'}}>
  
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onClick={()=>{
             
              let newbasket=basket.slice();

               newbasket.forEach((it,ind) => {
                if (it.key === item.key) {
                  parseInt(item.quantity,10)-1>0?it.quantity = parseInt(item.quantity, 10)-1:newbasket.splice(ind, 1);
                }
              });
                
                setBasket([...newbasket]);
              }}>
            <img className='cursor'
              style={{ width: 20, height: 20, borderRadius: 13,transform: `rotate(90deg)`}}
              src={require("./assets/arrow.png")}
            />
          </div>

        <div>
          <p style={{fontFamily:'Montserrat',paddingLeft:7,paddingRight:7,paddingBottom:2}} >{item.quantity}</p>
        </div>

          <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onClick={()=>{
             
              let newbasket=basket.slice();
              newbasket.forEach((it) => {
                if (it.key === item.key) {
                  it.quantity = parseInt(item.quantity, 10)+1;
                }
              });
                
              setBasket([...newbasket]);
              }}>
            <img className='cursor'
              style={{ width: 20, height: 20, borderRadius: 13,transform: `rotate(270deg)`}}
              src={require("./assets/arrow.png")}
            />
          </div>
        </div>
      </div>  

      <div style={{marginLeft: 'auto' }} onClick={()=>{
        let newbasket=basket.slice();

        newbasket.forEach((it,ind) => {
         if (it.key === item.key) {
         newbasket.splice(ind, 1);
         }
       });
         
         setBasket([...newbasket]);
      }}>
        <img className='cursor'
            style={{ width: 35, height: 35, borderRadius: 13,paddingTop:40,paddingLeft:35,position:'relative',right:0 }}
            src={require("./assets/cancel.png")}
          />
      </div>

      </div>
    </div>
    );
    }
  
  export default BasketItem;
  