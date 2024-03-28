import React, { useEffect, useState } from "react";
import { fetchOpenBounties } from "../utils/bounties";

interface Bounty {
  issueNumber: number;
  amount: number;
  issueUrl: string;
}

const BountyList = () => {
  const [bounties, setBounties] = useState<Bounty[]>([]);

  useEffect(() => {
    const fetchBounties = async () => {
      try {
        const openBounties = await fetchOpenBounties();
        setBounties(openBounties);
      } catch (error) {
        console.error("Error fetching open bounties:", error);
      }
    };

    fetchBounties();
  }, []);

  return (
    <div>
      <h2>Open Bounties</h2>
      {bounties.length > 0 ? (
        <ul>
          {bounties.map((bounty) => (
            <li key={bounty.issueNumber}>
              <a href={bounty.issueUrl} target="_blank" rel="noopener noreferrer">
                Issue #{bounty.issueNumber}
              </a>{" "}
              - Bounty: ${bounty.amount} USDC
            </li>
          ))}
        </ul>
      ) : (
        <p>No open bounties found.</p>
      )}
    </div>
  );
};

export default BountyList;