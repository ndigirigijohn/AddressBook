import React from 'react'

import { useParams } from 'react-router-dom'

function ContactView() {
  const {id} = useParams()
  return (
    <div>ContactView {id}</div>
  )
}

export default ContactView