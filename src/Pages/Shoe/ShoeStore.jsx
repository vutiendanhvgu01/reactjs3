import React, { Component } from "react";
import GioHang from "./GioHang";
import ProductList from "./ProductList";
export default class ShoeStore extends Component {
  state = {
    gioHang: [
      {
        id: 1,
        name: "Adidas Prophere",

        price: 350,

        quantity: 1,
        image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
      },
    ],
  };
  xoaShoe = (spClick)=>{
    console.log(spClick)
    let gioHang = this.state.gioHang
    let spCanXoa = gioHang.findIndex(sp=>sp.id === spClick.id)
    if(spCanXoa){
      gioHang.splice(spCanXoa,1)
    }
    this.setState({
      gioHang:gioHang
    })
  }
  themShoe = (spClick) =>{
    spClick = {...spClick, quantity:1}
    console.log(spClick);
    let gioHang = this.state.gioHang
    let spCanThem = gioHang.find(sp=> sp.id === spClick.id)
    if(spCanThem){
      spCanThem.quantity +=1
    }else{
      gioHang.push(spClick)
    }
    this.setState({
      gioHang: gioHang
    })
  }
  
  render() {
    return (
      <>
        <div className="container">
          <h3 className="text-center">Shoe Shop</h3>
          <div>
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Xem giỏ hàng
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body"><GioHang gioHang={this.state.gioHang} xoaShoe ={this.xoaShoe} /></div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <ProductList themShoe ={this.themShoe}/>
        </div>
      </>
    );
  }
}
