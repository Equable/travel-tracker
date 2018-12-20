import React from 'react'

const WishTile = (props) =>{
  return(
    <div onClick = {props.handleClick} className = {props.clicked}>
      <p>{props.location}</p>
    </div>
  )
}

export default WishTile;
