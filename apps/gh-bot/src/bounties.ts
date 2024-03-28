// bot extracts the Solana address from the comment usingutils.ts

interface Bounty {
  issueNumber: number;
  amount: any;
  address?: string;
  
}

const bounties: Bounty[] = [];

function saveBounty(bounty: Bounty) {
  const existingBounty = bounties.find((b) => b.issueNumber === bounty.issueNumber);
  if (existingBounty) {
    Object.assign(existingBounty, bounty);
  } else {
    bounties.push(bounty);
  }
}

function getBounty(issueNumber: number) {
  return bounties.find((b) => b.issueNumber === issueNumber);
}

export { saveBounty, getBounty };