import React from 'react'
import './Item.scss'

function Item({icon, title, ids}) {
  return (
    <div className="Item">
    <div  id={ids} className="icon">
        {icon}

    </div>
    <div className="title">
        {title}
        
    </div>
</div>
)
}

export default Item