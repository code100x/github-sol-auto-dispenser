// // api/bounties/open.ts
// import type { NextApiRequest, NextApiResponse } from 'next'
// import { getBountyPayments } from "../../../gh-bot/src/history";

// interface OpenBounty {
//   issueNumber: number;
//   amount: number;
//   issueUrl: string;
// }

// async function fetchOpenBounties(): Promise<OpenBounty[]> {
//   // Fetch open bounties from your API or data source
//   // Exampe:
//   return [
//     {
//       issueNumber: 123,
//       amount: 50,
//       issueUrl: "https://github.com/your-repo/issues/123",
//     }
//   ];
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<OpenBounty[]>
// ) {
//   const openBounties = await fetchOpenBounties();
//   res.status(200).json(openBounties);
// }

// // api/bounties/history.ts
// import type { NextApiRequest, NextApiResponse } from 'next'
// import { getBountyPayments } from "../../../gh-bot/src/history";

// interface BountyPayment {
//   issueNumber: number;
//   amount: number;
//   issueUrl: string;
//   paidTo: string; // Solana address
//   paidAt: string; // ISO date string
// }

// async function fetchBountyHistory(): Promise<BountyPayment[]> {
//   // Fetch bounty payment history from your data 
//   const history = await getBountyPayments();
//   return history.map(payment => ({
//     issueNumber: payment.issueNumber,
//     amount: payment.amount,
//     issueUrl: `https://github.com/your-repo/issues/${payment.issueNumber}`,
//     paidTo: payment.paidTo,
//     paidAt: payment.paidAt.toISOString(),
//   }));
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<BountyPayment[]>
// ) {
//   const bountyHistory = await fetchBountyHistory();
//   res.status(200).json(bountyHistory);
// 