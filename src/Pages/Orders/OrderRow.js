import React, { useEffect, useState } from 'react';

const OrderRow = ({order}) => {
    const {serviceName, customer, phone, price,  service} = order;
    const [orderService, setOrderService] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data))
    },[service])


    const handleDelete = id =>{
      const proceed = window.confirm('Are you sure, you want to proceed this order');
      if(proceed){
        fetch(`http://localhost:5000/orders/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
      }
    }
    return (
        <tr>
              <th>
                <label>
                  <button onClick={handleDelete} className='btn btn-ghost'>X</button>
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="rounded w-24 h-24">
                      {
                        orderService?. img && 
                        <img
                        src={orderService.img}
                        alt="Avatar Tailwind CSS Component"
                      />}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50">{phone}</div>
                  </div>
                </div>
              </td>
              <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  ${price}
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
    );
};

export default OrderRow;