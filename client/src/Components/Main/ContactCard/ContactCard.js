import React from 'react'
import './ContactCard.scss'
import {Link} from 'react-router-dom'


function ContactCard({item}) {
  console.log(item)
  return (
    <div className='Contact_Card'>
    <Link to={`/${item.id}`}>
      <div>
      {item.firstName}
      </div>

    </Link>
    </div>

  )
}

export default ContactCard