import React, { Component } from 'react'

export default class GioHang extends Component {
  render() {
    const {gioHang, xoaShoe} =this.props
    return (
      <div>
        <table className='table'>
          <thead>
            <th>Mã SP</th>
            <th>Tên SP</th>
            <th>Hình ảnh</th>
            <th>Số Lượng</th>
            <th>Đơn Giá</th>
            <th>Thành Tiền</th>
            <th></th>

          </thead>
          <tbody>
            {gioHang.map((spGH,index)=>{
              return (
                <tr key={index}>
                <td>{spGH.id}</td>
                <td>{spGH.name}</td>
                <td>
                  <img
                    src={spGH.image}
                    width={50}
                    height={50}
                    alt=""
                  />
                </td>
                <td>{spGH.quantity}</td>
                <td>{spGH.price}</td>
                <td>{spGH.quantity*spGH.price}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>xoaShoe(spGH.id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

