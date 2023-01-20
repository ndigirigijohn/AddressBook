import React, {useState}from 'react'
import './ContactCard.scss'
import {Link} from 'react-router-dom'
import {SlOptionsVertical} from 'react-icons/sl'
import Avatar from './Avatar.jpg'
import DeleteC from './DeleteC/DeleteC'


function ContactCard({item}) {
  const [ idc, setIdc ] = useState('none')

  return (
    <div className='Contact_Card'>
    <Link to={`/${item.id}`}>
      <div className="image">
        <img src={Avatar} alt=" " />

        
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
      <SlOptionsVertical onClick={()=>setIdc('show')}/>
    </div>
    <DeleteC idc={idc} idkey={item.id} setIdc={setIdc}/>
    </div>

  )
}

export default ContactCard