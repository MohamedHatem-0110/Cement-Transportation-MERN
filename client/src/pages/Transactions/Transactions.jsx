import { Link, useLoaderData } from "react-router-dom";
import Client from "../../components/Client";

export default function Transcations() {
  const transactions = useLoaderData();

  return (
    <div className="clients">
      {clients.map((client) => (
        <div key={client._id}>
          <Link to={`/transaction/${client._id}`}>
            <Client name={client.name} balance={client.balance} />
          </Link>
        </div>
      ))}
    </div>
  );
}
//loader function
export const transactionsloader = async () => {
  const res = await fetch("http://localhost:3000/api/client");
  return res.json();
};
