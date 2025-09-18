import { useState, useEffect } from "react";
import axios from "axios";

export const useContract = (id) => {
  const [contract, setContract] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContract = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/contracts.json");
        const found = res.data.contractDetails[id];

        if (!found) {
          setError(`Contract with ID "${id}" not found`);
        } else {
          setContract(found);
          setError(null);
        }
      } catch (err) {
        console.error("Error loading contract", err);
        setError("Failed to load contract. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchContract();
  }, [id]);

  return { contract, error, loading };
};