import React from 'react'
import './Item.scss'

function Item({icon, title}) {
  return (
    <div className="Item">
    <div className="icon">
        {icon}

    </div>
    <div className="title">
        {title}
        
    </div>
</div>
)
}

export default Item