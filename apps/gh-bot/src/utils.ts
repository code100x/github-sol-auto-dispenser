import axios from 'axios';
import 'dotenv/config';

export const extractAmount = (comment: string) => {
  const match = comment.match(/\/bounty\s+(\$?\d+)/);
  return match ? match[1] : null;
};

export const isBountyComment = (comment: string) => {
  return comment.includes('/bounty');
};

export interface IAddNewBountyParams {
  username: string;
  amount: number;
}

export const addNewBounty = async (payload: IAddNewBountyParams) => {
  try {
    const endpoint = process.env.SERVER_URL + '/api/bounty';
    const response = await axios.post(endpoint, payload);

    const { data } = response;

    if (data.success === false) throw new Error(data.error);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
