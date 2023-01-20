import React, { useState, useEffect  } from 'react'
import './Main.scss'
import ContactCard from '../Main/ContactCard/ContactCard'
import Header from './Header/Header'
import Footer from './Footer/Footer'
//search icon
import {MdSearch} from 'react-icons/md'

import axios from 'axios'


//Data
function Main() {

  //get contacts
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8081/api/contacts').then(
      (res) => {
        console.log(res.data)
        setContacts(res.data)
      }

    )
   
  }, [])
  
  return (
    <div className="Main">
      <Header/>
      <div className="Cards">
      <div className="search_box">
        <MdSearch/>
        <input type="text" placeholder="Search" />

      </div>

      {contacts===[]? <h1>Loading...</h1> :
            contacts.map((item, index) => {
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