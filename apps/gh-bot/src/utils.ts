export const extractAmount = (comment: string) => {
    const match = comment.match(/\/bounty\s+(\$?\d+)/);
    return match ? match[1] : null;
  };
  
//  here  bot extracts the amount from the comment 
  export function extractAddress(commentBody: string): string | null {
  const match = commentBody.match(/\/address\s*(\w+)/);
  return match ? match[1] : null;
}