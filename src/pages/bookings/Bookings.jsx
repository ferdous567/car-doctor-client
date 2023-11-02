import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import Booking from "../booking/Booking";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    const { user } = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

    const url = `https://car-doctor-server-silk-seven.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {

        // axios.get(url, {withCredentials: true})
        // .then(res =>{
        //     setBookings(res.data)
        // })

        /////////////////////////////////

        // fetch(url, {credentials: 'include'})
        //     .then(res => res.json())
        //     .then(data => setBookings(data))

        //////////////////////////////////

        axiosSecure.get(url)
        .then(res => setBookings(res.data))


    }, [url, axiosSecure]);

    const handleDelete = id =>{
        const proceed = confirm('Are you sure you want to delete?');
        if(proceed){
            fetch(`https://car-doctor-server-silk-seven.vercel.app/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Successfully deletd');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    const handleConfirm = id =>{
        fetch(`https://car-doctor-server-silk-seven.vercel.app/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                // state update
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }

    return (
        <div>
            <h2>Your Bookings : {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <button className="btn">Delete</button>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow key={booking._id} 
                                handleDelete = {handleDelete}
                                handleConfirm = {handleConfirm}
                                booking={booking}></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;