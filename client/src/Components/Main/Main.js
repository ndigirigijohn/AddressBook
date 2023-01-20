import React from 'react'
import './Main.scss'
import ContactCard from '../Main/ContactCard/ContactCard'
import Header from './Header/Header'
import Footer from './Footer/Footer'

//Data
import Data from '../../Data'
function Main() {

  return (
    <div className="Main">
      <Header/>
      <div className="Cards">
      {
            Data.map((item, index) => {
                return (
                    <ContactCard key={index} item={item} />
                )
            }
            )
        }


      </div>
        <Footer/>
    </div>
  )
}

export default Main