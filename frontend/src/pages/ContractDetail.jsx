import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ContractMetadata from "../components/ContractMetadata";
import ClauseCard from "../components/ClauseCard";
import InsightsList from "../components/InsightsList";
import EvidenceDrawer from "../components/EvidenceDrawer";
import { useContract } from "@/hooks/getAllContracts";

const ContractDetail = () => {
  const { id } = useParams(); // 
  const [drawerOpen, setDrawerOpen] = useState(false);
  

  const { contract, error, loading } = useContract(id);

  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!contract) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 space-y-6">
      <ContractMetadata
        name={contract.name}
        parties={contract.parties}
        start={contract.start}
        expiry={contract.expiry}
        status={contract.status}
        risk={contract.risk}
      />

      <div>
        <h2 className="text-xl font-bold mb-3">Clauses</h2>
        {contract.clauses && contract.clauses.length > 0 ? (
          contract.clauses.map((c, idx) => <ClauseCard key={idx} {...c} />)
        ) : (
          <p className="text-gray-500">No clauses available.</p>
        )}
      </div>

      <InsightsList insights={contract.insights || []} />

      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          onClick={() => setDrawerOpen(true)}
        >
          View Evidence
        </button>

        <EvidenceDrawer
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          evidence={contract.evidence || []}
        />
      </div>
    </div>
  );
};

export default ContractDetail;
