import React from "react";

const ContractMetadata = ({ name, parties, start, expiry, status, risk }) => {
  return (
    <div className="bg-zinc-700   shadow rounded p-4 mb-6">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-white"> {parties}</p>
      <p className="text-white"> Start: {start}</p>
      <p className="text-white"> Expiry: {expiry}</p>
      <p className="text-white"> Status: <span className="font-semibold">{status}</span></p>
      <p className="text-white"> Risk: <span className="font-semibold">{risk}</span></p>
    </div>
  );
};

export default ContractMetadata;
