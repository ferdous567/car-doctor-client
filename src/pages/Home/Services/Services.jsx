import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-silk-seven.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="space-y-6">
            <h2 className="text-center text-2xl text-red-600 font-bold">Service</h2>
            <h1 className="text-5xl font-extrabold text-center">Our Service Area</h1>
            <p className="text-center w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <div className="grid grid-cols-3 gap-6 ">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className="py-5 text-center">
            <button className="btn btn-outline btn-error  ">More Service</button>
            </div>
        </div>
    );
};

export default Services;