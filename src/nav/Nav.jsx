import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Korzinka from '../components/korzinka/Korzinka'
import nav from '../nav/Nav.module.scss'
export const Nav = () => {
   
  return (
  <div>
    <header className={nav.header}>
         <div className={nav.container}>
            <img className={nav.header__img} src="https://www.freeiconspng.com/thumbs/market-icons/market-stand-icon-1.png" alt="" />
     <NavLink className={nav.header__nav} to=''>
    Home
    </NavLink>
    <NavLink  className={nav.header__nav} to='korzinka'>
    Korzinka
    </NavLink>
     </div>
    </header>
   <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="korzinka" element={<Korzinka/>}/>

   </Routes>
  </div>
  )
}
