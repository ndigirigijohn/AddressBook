import React from 'react'
import './Footer.scss'
import Item from './Item/Item'

import {AiFillStar} from 'react-icons/ai'
import {AiFillClockCircle} from 'react-icons/ai'
import {AiFillContacts} from 'react-icons/ai'
import {AiFillPhone} from 'react-icons/ai'
import {RiVoiceprintFill} from 'react-icons/ri'

function Footer() {
  return (
    <div className="Footer">
        <Item icon={<AiFillStar/>} title="Favourites" />
        <Item icon={<AiFillClockCircle/>} title="Recents" />
        <Item icon={<AiFillContacts/>} title="Contacts" />
        <Item icon={<AiFillPhone/>} title="Keypad" />   
        <Item icon={<RiVoiceprintFill/>} title="Voice mail" />        
        
    </div>

  )
}

export default Footer