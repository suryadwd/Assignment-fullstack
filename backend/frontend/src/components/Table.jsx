import React from "react";
import { useNavigate } from "react-router-dom";
const ContractsTable = ({ contracts }) => {
  const navigate = useNavigate();
  return (
    <table className="min-w-full bg-blue-500 border">
      <thead>
        <tr className="bg-white text-gray-800">
          <th className="py-2 px-4 border">Contract Name</th>
          <th className="py-2 px-4 border">Parties</th>
          <th className="py-2 px-4 border">Expiry Date</th>
          <th className="py-2 px-4 border">Status</th>
          <th className="py-2 px-4 border">Risk Score</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map(c => (
          <tr key={c.id} className="text-center hover:bg-gray-900"
             onClick={() => navigate(`/contracts/${c.id}`)}
          >
            <td className="py-2 px-4 border">{c.name}</td>
            <td className="py-2 px-4 border">{c.parties}</td>
            <td className="py-2 px-4 border">{c.expiry}</td>
            <td className="py-2 px-4 border">{c.status}</td>
            <td className="py-2 px-4 border">{c.risk}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContractsTable;
