import { useLoaderData, useParams, Form, redirect } from "react-router-dom";


export default function TruckDetails() {
  const { truck, clients } = useLoaderData();

  return (
    <div className="truck-details">
      <h2>Truck Details</h2>
      <p>{truck.name}</p>

      <h3>Trips</h3>
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

      <h3>Add a New Trip</h3>
      <Form method="post" action="/trucks/:id">
        <label>
          Driver:
          <input type="text" name="driver" required />
        </label>
        <br />
        <label>
          Client:
          <select name="clients" required>
            {clients.map(client => (
              <option key={client._id} value={client._id}>{client.name}</option>
            ))}
          </select>
        </label>
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
  
    return { truck, clients };
  };

export const addTripAction = async ({ request }) => {
    const data = await request.formData();
    const driver = data.get('driver');
    const client = data.get('client');
    const truck = data.get('truck');
  
    const trip = { driver, client, truck };
  
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
