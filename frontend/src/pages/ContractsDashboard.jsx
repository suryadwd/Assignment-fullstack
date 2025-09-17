import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Filters from "../components/Filter";
import ContractsTable from "../components/Table";
import Pagination from "../components/SetPages";

const ContractsDashboard = () => {
  const [contracts, setContracts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [riskFilter, setRiskFilter] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;


  const fetchContracts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("/contracts.json");
      setContracts(response.data.contracts);
      setFiltered(response.data.contracts);
    } catch (err) {
      console.error("Error fetching contracts:", err);
      setError("Failed to load contracts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContracts();
  }, []);


  useEffect(() => {
    let temp = [...contracts];
    if (search) {
      temp = temp.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.parties.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (statusFilter) temp = temp.filter(c => c.status === statusFilter);
    if (riskFilter) temp = temp.filter(c => c.risk === riskFilter);
    setFiltered(temp);
    setPage(1);
  }, [search, statusFilter, riskFilter, contracts]);

 
  const paginated = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const totalPages = Math.ceil(filtered.length / rowsPerPage);

  if (loading) return <div className="p-8">Loading contracts...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (filtered.length === 0) return <div className="p-8">No contracts yet.</div>;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-zinc-300 overflow-auto">
        <Topbar />
        <Filters
          search={search} setSearch={setSearch}
          statusFilter={statusFilter} setStatusFilter={setStatusFilter}
          riskFilter={riskFilter} setRiskFilter={setRiskFilter}
        />
        <ContractsTable contracts={paginated} />
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </div>
  );
};

export default ContractsDashboard;
