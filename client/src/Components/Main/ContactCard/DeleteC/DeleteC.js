import axios from 'axios'
import React from 'react'
import './DeleteC.scss'

function DeleteC({idc, idkey, setIdc}) {
  const deleteContact = (id) => {
    axios.delete(`http://localhost:8081/api/contacts/${id}`).then((res)=>{
        alert('Deleted');
        console.log(res.data)
        window.location.reload()
    }
    ).catch((err)=>{
       alert('Error')
       console.log(err)
       window.location.reload()



    }

    )
  }
  return (
    <div id={idc} onClick={()=>deleteContact(idkey)} className={`delete`}>Delete</div>
  )
}

export default DeleteC