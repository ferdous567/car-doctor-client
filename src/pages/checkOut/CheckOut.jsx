import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;

    const {user} = useContext(AuthContext);

    const handleCheckOut = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            CustomerName: name,
            date: date,
            img,
            email,   //dui pashe same name hole only ekta bosano jay
            service: title,
            service_id: _id,
            price: price
        }
        console.log(order)

        fetch('https://car-doctor-server-silk-seven.vercel.app/bookings', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <h2>Book Service: {title}</h2>

            <form onSubmit={handleCheckOut} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName}
                        placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Ammount</span>
                        </label>
                        <input type="text" name="due" defaultValue={'$' + price} className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email}
                        placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date"  className="input input-bordered" required />
                        
                    </div>
                </div>
                <textarea name="Message" id="" cols="30" rows="10" className="input input-bordered mt-2 p-4" placeholder="Your Message..."></textarea>
                <div className="form-control mt-6">
                    <input type="submit" value="CheckOut" className="btn btn-primary btn-block" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;