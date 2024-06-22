// src/pages/Transactions/Transactions.jsx

import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

export default function Transactions() {
  const { transactions } = useLoaderData();
  const { tripId } = useParams;
  const  [paid,setPaid] = useState(0);
  const [amountOfCement,setAmountOfCement] = useState(0);

   
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
            {transactions.map(transaction => (
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
      <select></select>
      <input type="number" value={amountOfCement} onChange={(e) => setAmountOfCement(e.target.value)} />
      <input type="number" value={paid} onChange={(e) => setPaid(e.target.value)} />
        <button onClick={() => {
            fetch(`http://localhost:3000/api/createtransaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                 idTrip: tripId, 
                 paid: paid, 
                 amountOfCement: amountOfCement
            }),
            });
        }}>
            Add Transaction
        </button>
      
    </div>
  );
}

export const transactionsLoader = async ({ params }) => {
  const {  tripId } = params;
    console.log(tripId);

  // Fetch transactions for the specific trip
  const res = await fetch(`http://localhost:3000/api/trip/${tripId}/`);
  if (!res.ok) {
    throw new Error('Failed to fetch transactions');
  }
  const transactions = await res.json();

  return { transactions };
};




//get all clients 




//