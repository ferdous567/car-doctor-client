import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const {_id, img, title, price } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-4 ">
            <figure><img className="rounded-xl h-[220px]" src={img} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions flex justify-between items-center text-lg font-bold text-red-500">
                    <p>Price : $ {price}</p>
                    <Link to={`/checkOut/${_id}`}>
                        <button className="btn btn-link font-bold">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;