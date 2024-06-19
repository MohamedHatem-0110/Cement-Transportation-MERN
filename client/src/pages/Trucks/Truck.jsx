import { Link, useLoaderData } from "react-router-dom";






export default function Truck() {
    const trucks = useLoaderData();

    return (
        <div className="trucks">
            <h2>Trucks</h2>
            <ul>
                {trucks.map((truck) => (
                    <Link to="/" key={truck.id}>
                        <p>{truck.name}</p>

                    </Link>
                ))}
            </ul> 
        
        </div>
    )
    }
//loader function 
export const trucksloader = async () => {
    const res = await fetch("http://localhost:3000/api/trucks");

    return res.json();

}