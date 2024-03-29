import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, img, price, title } = service
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl  gap-6">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body  ">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price:$ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-primary">Check Out</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;