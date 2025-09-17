import React from "react";

const EvidenceDrawer = ({ isOpen, onClose, evidence }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-3xl text-black font-bold">Evidence</h2>
        <button onClick={onClose} className="text-white">✖</button>
      </div>
      <div className="p-4 overflow-y-auto">
        {evidence.map((e, idx) => (
          <div key={idx} className="mb-4 bg-white p-3 rounded shadow">
            <p className="font-semibold"> {e.source}</p>
            <p className="text-gray-700">“{e.snippet}”</p>
            <p className="text-sm text-gray-500">Relevance: {(e.relevance * 100).toFixed(1)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvidenceDrawer;
