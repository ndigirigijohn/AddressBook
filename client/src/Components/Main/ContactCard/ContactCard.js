import React from 'react'
import './ContactCard.scss'
import {Link} from 'react-router-dom'
import {SlOptionsVertical} from 'react-icons/sl'


function ContactCard({item}) {
  console.log(item)
  return (
    <div className='Contact_Card'>
    <Link to={`/${item.id}`}>
      <div className="image">
        <img src={item.image} alt=" " />

        
      </div>
      <div className="name_phone">
        <div className="name">
          <h3>{item.firstName} {item.secondName}</h3>
          </div>
          <div className="phone">
            <h3>{item.phone1}</h3>
            </div>
      </div>

    </Link>
    <div className="options">
      <SlOptionsVertical/>
    </div>
    </div>

  )
}

export default ContactCard