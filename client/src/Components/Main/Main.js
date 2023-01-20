import React from 'react'
import './Main.scss'
import ContactCard from '../Main/ContactCard/ContactCard'
import ContactView from '../Main/ContactView/ContactView'

//Data
import Data from '../../Data'
function Main() {

  return (
    <div className="Main">
        {
            Data.map((item, index) => {
                return (
                    <ContactCard key={index} data={item} />
                )
            }
            )
        }
    </div>
  )
}

export default Main