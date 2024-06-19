import { Link, useLoaderData } from "react-router-dom";





export default function Truck() {
    const trucks = useLoaderData();
    console.log(trucks[0]._id);
    return (
        <div className="trucks">
            {trucks.map((truck) => (
                <Link to={truck._id} key={truck.id}>
                    <p>{truck.name}</p>
                </Link>
            ))}
        </div>
    )
}
//loader function 
export const trucksloader = async () => {
    const res = await fetch("http://localhost:3000/api/trucks");



    return res.json();

}


