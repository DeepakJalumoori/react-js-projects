import React from 'react'
import Colors from './Colors/Colors';
import Categories from './Categories/Categories';
import Price from './Price/Price';
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
          🛒
        </div>

        <Categories/>
        <Price/>
        <Colors/>
      </section>
    </div>
  )
}

export default Sidebar;