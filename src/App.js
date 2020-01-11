import React,{ useState } from 'react';
import './App.css';
import {items} from './constants/Constants.js'
import Item from './Item.js'
import BasketItem from './BasketItem.js'


function App() {
  const [content, setContent] = useState(0);
  const [basket, setBasket] = useState([]);


  let total=basket.reduce((a, b)=>{ return a + b.quantity*b.price;}, 0);
  return (
    <div className="App">
      <div  style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:content==0?'45%':'44.2%',alignItems:'flex-end'}}>
        <div className='button' onClick={()=>setContent(0)}>
          <p  style={content==0?{opacity:0.6}:null} >Home</p>
        </div>
        <img
          style={{ width: 200, height: 150, borderRadius: 13 }}
          src={require("./assets/logo.jpg")}
        />
        <div className='button' onClick={()=>setContent(1) } style={{display:'flex',flexDirection:'row'}}>
          <p style={content==1?{opacity:0.6}:null} >Basket </p>
          <p style={{color:'#E91E63',fontSize:14,width:12,height:20,paddingLeft:3,paddingTop:'22%'}}>{basket.length}</p>
        </div>
      </div>

      <div
        style={{
          height: 2,
          width: content==0?'60%':'59.2%',
          backgroundColor: '#202020',
          borderRadius: 5,
          opacity: 0.8
        }}
      />

     {content==0 && <div
        style={{
          display: "flex",
          marginTop: "5%",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 900
        }}
        className="mainContainer"
      >
        {items.map((item,ind )=> (
          <Item item={item} key={ind} setBasket={setBasket} basket={basket} />
        ))}
      </div>}


      {content==1 && 
        <div style={{marginTop:'5%'}}>
           <p style={{fontSize:30,fontFamily:'Montserrat',position:'absolute',left:'64%',top:'15%'}}>
              {`Total: ${total}`}
          </p>
          {total>100 && <p>Discount 10%</p>}


           {basket.length>0?basket.map((item,ind )=> (
          <BasketItem item={item} key={ind} setBasket={setBasket} basket={basket} />
        )):
          <div> 
            <p style={{fontSize:35}}>¯\_(ツ)_/¯</p>
            <p>Nothing to see here </p>
          </div>
        }
      
        </div>
      }






    </div>
  );
}

export default App;
