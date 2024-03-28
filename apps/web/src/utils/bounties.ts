import { getBountyPayments } from "../../../gh-bot/src/history";

interface BountyPayment {
  issueNumber: number;
  amount: number;
  recipient: string;
  issueUrl: string;
  timestamp: number;

}

async function fetchOpenBounties(): Promise<{ issueNumber: number; amount: number; issueUrl: string }[]> {
  return [
    // Fetch open bounties from your API or data source
    // Example like this
  ];
}

async function fetchBountyHistory(): Promise<BountyPayment[]> {
  const bountyPayments = await getBountyPayments();
  return bountyPayments.map((payment) => ({
    issueNumber: payment.issueNumber,
    amount: payment.amount,
    recipient: payment.paidTo,
    issueUrl: `https://github.com/your-repo/issues/${payment.issueNumber}`,
    timestamp: payment.paidAt.getTime(),
  }));
}

export { fetchOpenBounties, fetchBountyHistory };