import React,{ useState,useEffect } from 'react';
import './App.css';
import {items} from './constants/Constants.js'
import Item from './Item.js'
import BasketItem from './BasketItem.js'


function App() {
  const [content, setContent] = useState(0);
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket") || "[]"));


  let total=basket.reduce((a, b)=>{ return a + parseFloat(b.quantity,10)*parseFloat(b.price,10);}, 0);
  total>100?total-=total*0.10:total=total;

  useEffect(()=>{
    localStorage.setItem("basket", JSON.stringify(basket));
  
  });



  

  return (
    <div className="App">
      <div className='mainCont' style={{width:content==0?'45%':'44.2%',}}>
        <div className='button' onClick={()=>setContent(0)}>
          <p  style={content==0?{opacity:0.6}:null} >Home</p>
        </div>
        <img
          style={{ width: 200, height: 150, borderRadius: 13 }}
          src={require("./assets/logo.jpg")}
        />
        <div className='button' onClick={()=>setContent(1) } style={{display:'flex',flexDirection:'row'}}>
          <p style={content==1?{opacity:0.6}:null} >Basket </p>
          <p className='indicator' >
            {basket.reduce((a, b)=>{ return a + parseInt(b.quantity,10)}, 0)}
          </p>
        </div>
      </div>

      <div className='line'
        style={{width: content==0?'60%':'59.2%',}}
      />

     {content==0 && <div
        className="itemsCont"
      >
        {items.map((item,ind )=> (
          <Item item={item} key={ind} setBasket={setBasket} basket={basket} />
        ))}
      </div>}


      {content==1 && 
        <div className='basketCont' >
          <div className='sideTitlesCont'>
            <p style={{fontSize:30,fontFamily:'Montserrat',}}>
                {`Total: ${total.toFixed(2)}€`}
            </p>
            {total>100 && 
            <p style={{fontSize:15,fontFamily:'Montserrat',color:'#E91E63',marginTop:-30}}>Discount 10%</p>}
          </div>
          <div className='basketitems'>
              {basket.length>0?basket.map((item,ind )=> (
              <BasketItem item={item} key={ind} setBasket={setBasket} basket={basket} />
            )):
              <div> 
                <p style={{fontSize:35}}>¯\_(ツ)_/¯</p>
                <p>Nothing to see here </p>
              </div>
            }
            {basket.length>0&&
            <div  className='buyButton'
            onClick={()=>{
              console.log('<?xml version="1.0" encoding="UTF-8"?>')
              console.log('<basket>')
              basket.map((it)=>{
                console.log(
                `<item>
                  <name>${it.name}</name>
                  <quantity>${it.quantity}</quantity>
                  <price>${it.price}</price>
                  <key>${it.key}</key>`+
                `\n</item>`)
              })
             
              console.log('</basket>')
              }
            }
            >
              <p style={{fontSize:15,fontFamily:'Montserrat',color:'white',}}>BUY</p>
            </div>}
          </div>
      
        </div>
      }






    </div>
  );
}

export default App;
