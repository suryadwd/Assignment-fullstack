import React from "react";

const ClauseCard = ({ title, summary, confidence }) => {
  return (
    <div className="bg-zinc-700  p-4 rounded shadow mb-3">
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-700">{summary}</p>
      <p className="text-sm text-gray-500">Confidence: {(confidence * 100).toFixed(1)}%</p>
    </div>
  );
};

export default ClauseCard;
