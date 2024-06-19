import { useLoaderData, useParams } from "react-router-dom";


export default function TruckDetails() {
    const { truckId } = useParams();
    const truck = useLoaderData();
    console.log(truck);
    return (
        <div className="truck-details">
            <h2>Truck Details</h2>
            <p>{truck.name}</p>
            <p>Trips</p>
            {truck.trips.length > 0 ? (
                <ul>
                    {truck.trips.map((trip) => (
                        <li key={trip._id}>
                            <p>{trip.name}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No trips</p>
            )}
        </div>
    );
    }

  export  const truckDetailloader = async ({params}) => {  
        const   {truckId} = params;
        const res = await fetch(`http://localhost:3000/api/trucks/${truckId}`);
        return res.json();
    }
