import React, { useEffect, useState } from "react";
import { fetchBountyHistory } from "../utils/bounties";

interface BountyHistory {
  issueNumber: number;
  amount: number;
  recipient: string;
  issueUrl: string;
}

const HistoryList = () => {
  const [history, setHistory] = useState<BountyHistory[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const bountyHistory = await fetchBountyHistory();
        setHistory(bountyHistory);
      } catch (error) {
        console.error("Error fetching bounty history:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h2>Bounty History</h2>
      {history.length > 0 ? (
        <ul>
          {history.map((entry) => (
            <li key={entry.issueNumber}>
              <a href={entry.issueUrl} target="_blank" rel="noopener noreferrer">
                Issue #{entry.issueNumber}
              </a>{" "}
              - Bounty: ${entry.amount} USDC - Recipient: {entry.recipient}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bounty history found.</p>
      )}
    </div>
  );
};

export default HistoryList;