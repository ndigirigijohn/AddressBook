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
        <Item ids={'fav'} icon={<AiFillStar/>} title="Favourites" />
        <Item ids={'rec'} icon={<AiFillClockCircle/>} title="Recents" />
        <Item ids={'cont'} icon={<AiFillContacts/>} title="Contacts" />
        <Item ids={'key'} icon={<AiFillPhone/>} title="Keypad" />   
        <Item ids={'mail'} icon={<RiVoiceprintFill/>} title="Voice mail" />        
        
    </div>

  )
}

export default Footer