
export const extractAmount = (comment: string) => {
  const match = comment.match(/\/bounty\s+(\$?\d+)/);
  return match ? match[1] : null;
};

export const isBountyComment = (comment: string) => {
  return comment.includes("/bounty")
}
