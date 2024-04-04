import axios from 'axios';
import 'dotenv/config';

export const extractAmount = (comment: string) => {
  const match = comment.match(/\/bounty\s+(\$?\d+)/);
  return match ? match[1] : null;
};

export const isBountyComment = (comment: string) => {
  return comment.includes('/bounty');
};

interface IAddNewBountyParams {
  username: string;
  amount: number;
}

export const addNewBounty = async (payload: IAddNewBountyParams) => {
  try {
    // TODO: Implement this
    const endpoint = process.env.ADMIN_SERVER_URL + '/api/bounty';
    const response = await axios.post(endpoint, payload);

    const { data } = response;

    if (data.success === false) throw new Error(data.error);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

interface IAddNewRepoParams {
  ownerId: number;
  ownerUsername: string;
  repoId: number;
  repoName: string;
}

export const addRepo = async (payload: IAddNewRepoParams) => {
  try {
    const endpoint = process.env.ADMIN_SERVER_URL + '/api/github';
    console.log(endpoint);
    const response = await axios.post(endpoint, payload);
    console.log(response);

    // const { data } = response;

    // console.log(data);
  } catch (error: any) {
    console.error(error);
    // throw new Error(error.message);
  }
};
