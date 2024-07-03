import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../getAxios'
import home from '../home/Home.module.scss'
const Home = () => {
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
    console.log(mahsulot);
    return(
      <div className={home.cards}>
          <img className={home.cards__img} src={mahsulot.products[1].thumbnail} alt="" />
      <div className={home.cards__bodyy}>
      <h1  className={home.cards__tit}>{mahsulot.products[1].title}</h1>
        <p  className={home.cards__price}>{mahsulot.products[1].price}</p>
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