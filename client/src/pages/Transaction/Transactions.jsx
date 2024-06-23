// src/pages/Transactions/Transactions.jsx

import { useState } from "react";
import {
  Form,
  useActionData,
  useLoaderData,
  useParams,
} from "react-router-dom";

export default function Transactions() {
  const { transactions } = useLoaderData();

  const [paid, setPaid] = useState(0);
  const [amountOfCement, setAmountOfCement] = useState(0);

  const data = useActionData();

  return (
    <div className="transactions">
      <h2>Transactions</h2>
      {transactions.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction._id}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions found</p>
      )}

      <Form method="post" action={addTransactionAction}>
        <label>Paid Amount:</label> <input type="number" name="paid" />
        <label>Cement Amount:</label> <input type="number" name="cement" />
        <button type="submit">Add Transaction</button>
        {data && data.message && <p>{data.message}</p>}
      </Form>
    </div>
  );
}

export const transactionsLoader = async ({ params }) => {
  const { tripId } = params;
  console.log(tripId);

  // Fetch transactions for the specific trip
  const res = await fetch(`http://localhost:3000/api/trip/${tripId}/`);
  if (!res.ok) {
    throw new Error("Failed to fetch transactions");
  }
  const transactions = await res.json();

  return { transactions };
};

export const addTransactionAction = async ({ request, params }) => {
  const data = await request.formData();
  const paid = data.get("paid");
  const cement = data.get("cement");
  const { truckId, tripId } = params;
  // Send data as JSON
  const submit = await fetch("http://localhost:3000/api/createtransaction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idTruck: truckId,
      idTrip: tripId,
      paid: paid,
      amountOfCement: cement,
    }),
  });

  return submit.json();
};

//get all clients

//
