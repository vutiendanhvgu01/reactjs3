import React, { Component } from 'react'

export default class  extends Component {
  render() {
    const {shoe, themShoe} = this.props
    return (
      <div className='card'>
        <img src={shoe.image} alt="" className='w-100' height={300} style={{objectFit:'cover'}}/>
        <div className='card-body'>
            <p>
                {shoe.name}
            </p>
            <p>{shoe.price.toLocaleString()}</p>
            <button className='btn btn-dark' onClick = {()=>themShoe(shoe)}>
                add to cart
                <i className='fa fa-cart-plus'></i>
            </button>
        </div>
      </div>
    )
  }
}
