import React from "react";

const Filters = ({ search, setSearch, statusFilter, setStatusFilter, riskFilter, setRiskFilter }) => {
  return (
    <div className="flex gap-4 mb-4 items-center">
      <input

        type="text"
        placeholder="Search by name or parties"
        className="p-2 text-black border rounded flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Expired">Expired</option>
        <option value="Renewal Due">Renewal Due</option>
      </select>
      <select
        value={riskFilter}
        onChange={(e) => setRiskFilter(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Risk</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
};

export default Filters;
