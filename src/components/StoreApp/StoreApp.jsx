import React, { useState } from 'react'

import Navbar from '../UI/Navbar'
import Section from '../UI/Section'
import Banana from '../../assets/Img/banana.jpg'
import Strawberry from '../../assets/Img/Strawberry.jpg'
import Pomogranade from '../../assets/Img/pomogranade.webp'
import Onion from '../../assets/Img/onion.jpg'
import Tomato from '../../assets/Img/tomato.jpg'
import Filter from '../functional/Filter'

function StoreApp() {
  const [data, setData] = useState([
    { name: "Banana", url: Banana, price: 1.5, category: "Fruits" },
    { name: "Strawberry", url: Strawberry, price: 5.5, category: "Berry fruits" },
    { name: "Pomogranade", url: Pomogranade, price: 3.2, category: "Fruits" },
    { name: "Tomato", url: Tomato, price: 2, category: "Vegetables" },
    { name: "Onion", url: Onion, price: 0.5, category: "Vegetables" },
  ])
  const [item, setItem] = useState('')

  console.log(item);
  return (
    <>
      <header className='bg-lolita2'>
        <Navbar />
      </header>
      <main className='p-5 bg-lolita'>
        <Filter data={data} setData={setData} setItem={setItem} item={item}/>
        <Section data={data} setData={setData} item={item}/>
      </main>
      <footer className='bg-lolita2 p-4'>

      </footer>
    </>
  )
}

export default StoreApp