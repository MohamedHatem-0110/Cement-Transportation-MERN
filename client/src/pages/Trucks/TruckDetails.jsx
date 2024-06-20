import { useLoaderData, useParams, Form, redirect } from "react-router-dom";


export default function TruckDetails() {
  const { truck, clients ,trips} = useLoaderData();

  return (
    <div className="truck-details">
      <h2>Truck Details</h2>
      <p>{truck.name}</p>

      <h3>Trips</h3>
      {trips.length > 0 ? (
        <table className="container">
          <thead>
            <tr>
              <th>Driver</th>
              <th>Truck</th>
              <th>Capital</th>
              <th>From</th>
              <th>To</th>
              <th>Transactions</th>
              <th>Clients</th>
            </tr>
          </thead>
          <tbody>
            {trips.map(trip => (
              <tr key={trip._id}>
                <td>{trip.driver}</td>
                <td>{truck.name || trip.truck._id}</td>
                <td>{trip.capital}</td>
                <td>{trip.from}</td>
                <td>{trip.to}</td>
                <td>{trip.Transactions.length}</td>
                <td>{trip.clients.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No trips</p>
      )}

      <h3>Add a New Trip</h3>
      <Form method="post" action="/trucks/:id">
        <label>
          Driver:
          <input type="text" name="driver" required />
        </label>
        <br />
        <label>
            From:
        <input type="text" name="from" required />
        </label>
        <br />
        To:
        <br />
        <input type="text" name="to" required />
        <input type="hidden" name="truck" value={truck._id} />
        <br />
        <button type="submit">Add Trip</button>
      </Form>
    </div>
  );
}
export const truckDetailloader = async ({ params }) => {
    const { truckId } = params;
  
    // Fetch truck details
    const truckRes = await fetch(`http://localhost:3000/api/trucks/${truckId}`);
    if (!truckRes.ok) {
      throw new Error('Failed to fetch truck details');
    }
    const truck = await truckRes.json();
  
    // Fetch clients
    const clientsRes = await fetch(`http://localhost:3000/api/client`);
    if (!clientsRes.ok) {
      throw new Error('Failed to fetch clients');
    }
    const clients = await clientsRes.json();
    const trucktrips = await fetch(`http://localhost:3000/api/trips/${truckId}`);
    if (!trucktrips.ok) {
      throw new Error('Failed to fetch trips');
    }
    const trips = await trucktrips.json();
  
    return { truck, clients ,trips};
  };

export const addTripAction = async ({ request }) => {
    const data = await request.formData();
    const driver = data.get('driver');
    const truck = data.get('truck');
    const from = data.get('from');
    const to = data.get('to');
  
    const trip = { driver,from,to , truck };
  
    const res = await fetch('http://localhost:3000/api/trip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trip),
    });
  
    if (!res.ok) {
      throw new Error('Failed to add trip');
    }
  
    return redirect(`/trucks/${truck}`);
  };
