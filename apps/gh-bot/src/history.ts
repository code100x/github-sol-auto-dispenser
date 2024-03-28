interface BountyPayment {
  paidAt: any;
  paidTo: any;
  timestamp:number;
  issueNumber: number;
  amount: number;
  recipient: string;
  issueUrl: string;
}
const bountyPayments: BountyPayment[] = [];
function saveBountyPayment(payment: BountyPayment) {
  bountyPayments.push(payment);
}

function getBountyPayments(): BountyPayment[] {
  return bountyPayments;
}
export { saveBountyPayment, getBountyPayments , };