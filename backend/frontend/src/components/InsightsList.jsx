import React from "react";

const riskColors = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-green-600",
};

const InsightsList = ({ insights }) => {
  return (
    <div className="bg-zinc-700 shadow rounded p-4 mb-6">
      <h2 className="text-xl font-bold mb-3">AI Insights</h2>
      {insights.map((i, idx) => (
        <div key={idx} className="mb-2">
          <span className={`font-semibold ${riskColors[i.risk] || "text-gray-700"}`}>
            {i.risk} Risk:
          </span>{" "}
          {i.message}
        </div>
      ))}
    </div>
  );
};

export default InsightsList;
