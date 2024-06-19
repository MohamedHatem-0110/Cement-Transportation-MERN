import { Form, Link, useActionData, useLoaderData } from "react-router-dom";

export default function Truck() {
  const trucks = useLoaderData();
  const data = useActionData();
  console.log(trucks[0]._id);
  return (
    <div className="trucks">
      {trucks.map((truck) => (
        <Link to={truck._id} key={truck.id}>
          <p>{truck.name}</p>
        </Link>
      ))}

      <Form method="post" action="/trucks">
        <label>Name:</label> <input type="text" name="name" />
        <button type="submit">Add Truck</button>
        {data && data.message && <p>{data.message}</p>}
      </Form>
    </div>
  );
}
//loader function
export const trucksloader = async () => {
  const res = await fetch("http://localhost:3000/api/trucks");

  return res.json();
};

export const addtruckAction = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");

  // Send data as JSON
  const submit = await fetch("http://localhost:3000/api/createtruck", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  return submit.json();
};
