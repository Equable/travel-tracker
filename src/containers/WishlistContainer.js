import React from 'react'
import WishTile from './WishTile'

class WishlistContainer extends React.Component {
  constructor(props){
    super(props)
    this.state={
      checkedArray: [],
      lastIdSelected: null
    }
    this.addIdToArray = this.addIdToArray.bind(this)
    this.lastClicked = this.lastClicked.bind(this)
  }
  addIdToArray(itemId){
    let array = this.state.checkedArray.concat(itemId)
    this.setState({checkedArray: array, lastIdSelected: itemId})
  }
  lastClicked(itemId){
    this.setState({lastIdSelected: itemId})
  }

  render(){
    let wishTiles = this.props.data.places.map((location)=>{
      let handleClick =()=>{
        if(!this.state.checkedArray.includes(location.id)){
          this.addIdToArray(location.id)
        }else{
          this.lastClicked(location.id)
        }
      }
      let clicked=null
      if(this.state.checkedArray.includes(location.id)){
        clicked = 'clicked'
      }
      console.log(this.state.checked)
      return(
        <WishTile
          key = {location.id}
          id = {location.id}
          location = {location.name}
          handleClick = {handleClick}
          clicked = {clicked}
        />
      )
    })
    let favorite
    if(this.state.lastIdSelected === this.props.data.favoritePlaceId){
      favorite =<h3>What a beauty!</h3>
    }

    return(
      <div className='wishlist'>
        {wishTiles}
        {favorite}
      </div>
    )
  }

}
export default WishlistContainer
