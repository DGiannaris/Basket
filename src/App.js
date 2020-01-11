import React from 'react';
import './App.css';
import {items} from './constants/Constants.js'
import Item from './Item.js'
import { logDOM } from '@testing-library/react';

function App() {




  return (
    <div className='App'>
       <img style={{width:200,height:150,borderRadius:13,}} src={require('./assets/logo.jpg')}  />
       <div style={{height:2,width:'60%',backgroundColor:'black',borderRadius:5,opacity:0.8}}/>
      <div  style={{display: 'flex',marginTop:'5%',flexWrap: 'wrap',flexDirection:'row',justifyContent:'space-between',width:800}} className='mainContainer'> 
        {items.map((item)=><Item item={item}/>)}
      </div>
    </div>
  );
}

export default App;
