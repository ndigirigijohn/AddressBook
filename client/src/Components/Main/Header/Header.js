import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Header.scss'
import { Link } from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'
import Form from './Form/Form'

function Header() {
    const [form, setForm] = useState("show")
    const [count, setCount] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:8081/api/contacts').then(
          (res) => {
            console.log(res.data)
            setCount(res.data.length)
          }
    
        )
       
      }, [])
  return (
    <div className="Header">
        <div className="Add">
            <p>
                <AiOutlinePlus onClick={()=>setForm()}/>
            </p>

        </div>
        <div className="heading">
            <div>My Contacts</div>
            <p>Friends({count})</p>
        </div>
        <div className="header_Nav">
            <div className='all'><Link to='/'>All Contacts</Link></div>
            <div><Link to='/'>Office</Link></div>
            <div><Link to='/'>Family</Link></div>
            <div className='new'><Link to='/'>+ New Group</Link></div>
        </div>
        <Form form={form} setForm={setForm}/>
    </div>
  )
}

export default Header