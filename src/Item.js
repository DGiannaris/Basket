import React,{ useState }  from 'react';
import './Item.css';

function Item({item,key,setBasket,basket}) {
  const [onmouse, setOnMouse] = useState(false);
 


 
    return (
    <div key={key}>
      <div  style={{width:300,marginBottom:'10%'}}>
        <div style={{width:300,height:160}}>
           <img  className='background-image' src={item.img}  onMouseEnter={()=>setOnMouse(true)} onMouseLeave={()=>setOnMouse(false)}
           style={!onmouse?{width:200,height:150,borderRadius:13}:{width:200,height:150}}  />
        </div>
      
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <p style={{fontFamily:'Montserrat'}}>{item.name} </p>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'30%'}}>

            <p style={{fontFamily:'Montserrat',fontSize:13}}>{item.price}€ </p>
            <div onClick={()=>{ 
              let newitem=item;
              let newbasket=basket;
              if(basket.some( it => it.name === item.name )){
                newitem.quantity=item.quantity+1;
                newbasket=basket.filter(it=>it.name !=item.name);
              }
              else{
                newitem.quantity=1;
              }
              setBasket([...newbasket,newitem])
              }}>
              <img
                style={{width:30,height:30, borderRadius: 13 }}
                src={require("./assets/basket-icon.png")}
              />
            </div>
          </div>
      </div>   
      </div>
    </div>
    );
    }
  
  export default Item;
  