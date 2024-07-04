import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
import axios from '../../getAxios'
import home from '../home/Home.module.scss'
const Home = () => {
    const addItems = [];
    const reduser =(state,action)=>{
     console.log(action);
        switch(action.type){
            case"ADD__TO__CARD":
            return[...state,action.items]
              case"REMOVE__TO__CARD":
              return state.filter(product=>product.id!==action.id)
            default:
            return state
        }

    }
    const [state,distpatch] = useReducer(reduser,addItems)
    const [date,setDate] = useState([])
    useEffect(()=>{
    const api = async ()=>{
       try{
        let responce = await axios("/carts")
        setDate(responce.data.carts);
       }
       catch(error){
        alert(error)
       }
    }
    api()
    },[])
  return (
  <div className={home.cards__body}>
      <div className={home.cards__parent}>
        {
date.map(mahsulot=>{
   
    const handleAddItems = (items)=>{
      //console.log(items);
distpatch({type:"ADD__TO__CARD",items})
    }
  
    return(
      <div className={home.cards}>
          <img className={home.cards__img} src={mahsulot.products[1].thumbnail} alt="" />
      <div className={home.cards__bodyy}>
      <h1  className={home.cards__tit}>{mahsulot.products[1].title}</h1>
        <p  className={home.cards__price}>{mahsulot.products[1].price}</p>
        <button className={home.cards__btn} onClick={()=>handleAddItems(mahsulot)}>Like</button>
      </div>
      </div>
    )
})
        }
    </div>
 <div className={home.cards__add}>
 {
    state.map(items=>{
      //console.log(items);
      const handleRemoveItems = (id)=>{
        console.log(items);
  distpatch({type:"REMOVE__TO__CARD",id})
      }
      return(
        <div className={home.cards}>
      <img className={home.cards__img} src={items.products[1].thumbnail} alt="" />
  <div className={home.cards__bodyy}>
  <h1  className={home.cards__tit}>{items.products[1].title}</h1>
    <p  className={home.cards__price}>{items.products[1].price}</p>
    <button className={home.cards__btn} onClick={()=>handleRemoveItems(items.id)}>unLike</button>
  </div>
  </div>
      )
    })
 }
 </div>
  </div>
  )
}

export default Home