import React from 'react'
import MenuCard from '../layouts/MenuCard'
import MenuCardWOimage from '../layouts/MenuCardWOimage'
import datewalnut from '../assets/datewalnut.jpg'
import plumcake from '../assets/plumcake.jpeg'
import mawacake from '../assets/mavacake.jpeg'
import chocolatechipcookies from '../assets/chocolatechipcookies.jpg'
import spicedpumpkincookies from '../assets/pumpkincookie.png'
import coconutmacroons from '../assets/coconutmacroons.jpg'
import sessamejaggerycookies from '../assets/sessamejaggerycookie.jpeg'
import chocolatebrownies from '../assets/brownie.jpg'
import bananwalnut from '../assets/bananawalnut.jpg'
import cinamonrolls from '../assets/cinamonrolls.jpg'
import wholewheatloaf from '../assets/wholewheatbread.jpeg'
import milkloaf from '../assets/milkloaf.jpeg'
import sixserialloaf from '../assets/sixserialloaf.jpeg'
import focaccia from '../assets/focaccia.jpg'
import pita from '../assets/pita.jpeg'
import poie from '../assets/poi.jpeg'
import calzone from '../assets/calzone.jpg'

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor '>
      <h1 className='font-semibold text-center text-4xl mt-24 mb-8 '>Our Menu</h1>
      <div>
        <div>
          <h3 className='p-3 text-2xl font-semibold '>Tea Cakes</h3>
          <span className='p-3'>*approx 150gms</span>
          <div className='flex flex-wrap pb-8 gap-8 justify-center  '>
            <MenuCard img={datewalnut} title='Date Walnut Cake' value='250' specialnotes='Contains egg*' />
            <MenuCard img={bananwalnut} title='Banana Walnut Cake' value='200' specialnotes='' />
            <MenuCard img={plumcake} title='Plum Cake' value='250' specialnotes='Contains egg* | Eggless and alcohol free versions available' />
            <MenuCard img={mawacake} title='Mawa Cake' value='160' specialnotes='Special notes' />
            <MenuCard img={mawacake} title='Mawa Cup Cakes' value='200' specialnotes='4 pieces' />

          </div>
    

        </div>
        <div className='pt-20'>
          <div className='flex flex-wrap pb-8 gap-8 justify-center  '>
          <MenuCard img={chocolatechipcookies} title='Cholocolate Chip Cookies' value='350' specialnotes='Contains egg* | 6 pieces' />
            <MenuCard img={spicedpumpkincookies} title='Spiced Pumpkin Cookies' value='325' specialnotes='6 pieces' />
            <MenuCard img={coconutmacroons} title='Coconut Macroons' value='350' specialnotes='Vegan | 6 pieces' />
            <MenuCard img={sessamejaggerycookies} title='Sesame Jaggery Cookies' value='150' specialnotes='Vegan | 10 pieces' />
            <MenuCard img={chocolatebrownies} title='Chocolate Brownies' value='550 | 600' specialnotes='4 pieces | Toppings available' />
            <MenuCard img={cinamonrolls} title='Cinnamon Rolls' value='350' specialnotes='Contains egg* | 4 pieces' />
          </div>
        </div>
        <div>
          <h2 className='p-5 text-3xl font-bold text-center '>Savoury</h2>
        <div>
          <h3 className='p-3 text-2xl font-semibold '>Breads</h3>
          <div className='flex flex-wrap pb-8 gap-8 justify-center  '>
          <MenuCard img={wholewheatloaf} title='Whole Wheat Loaf' value='150' specialnotes='Vegan' />
          <MenuCard img={milkloaf} title='Milk Bread Loaf' value='200' specialnotes='Contains egg* | Hokkaido' />
          <MenuCard img={sixserialloaf} title='6 Cereal Bread' value='180' specialnotes='Vegan' />
          <MenuCard img={focaccia} title='Focaccia' value='150' specialnotes='Vegan | Toppings available' />
          <MenuCard img={pita} title='Pita' value='150' specialnotes='6 pieces' />
          <MenuCard img={poie} title='Poie' value='100' specialnotes='Vegan | 4 pieces' />
          <MenuCard img={calzone} title='Calzone' value='180' specialnotes='4 pieces' />
        </div>
        <div>
          <h3 className='p-3 text-2xl font-semibold '>Dips and Sauces</h3>
          <div className='flex flex-wrap pb-8 gap-8 justify-center  '>
          <MenuCardWOimage title='Hummus' specialnotes='Vegan'/>
          <MenuCardWOimage title='Basil and Walnut Pesto'/>
          <MenuCardWOimage title='Cooked Tomato Salsa'/>
          <MenuCardWOimage title='Confit Garlic (Olive Oil)'specialnotes='Vegan'/>
        </div>
        <span>* Quantity and Prices available on inquiry</span>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Menu
