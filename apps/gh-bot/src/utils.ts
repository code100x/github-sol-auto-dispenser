import { RepoSchemaType } from '@repo/schema';
import axios from 'axios';
import 'dotenv/config';

export const extractAmount = (comment: string) => {
  console.log(comment);
  const bountyExtractor = /\/bounty\s+(\$?\d+|\d+\$)/;

  const match = comment.match(bountyExtractor);
  return match ? match[1] : null;
};

export const isBountyComment = (comment: string) => {
  return comment.trim().toLocaleLowerCase().startsWith('/bounty');
};

interface IAddNewBountyParams {
  repoId: number;
  username: string;
  amount: number;
}

export const addNewBounty = async (payload: IAddNewBountyParams) => {
  try {
    // TODO: Implement this
    const endpoint = process.env.ADMIN_SERVER_URL + '/api/bounty';
    console.log(endpoint);
    const response = await axios.post(endpoint, payload, {
      headers: {
        'x-bot-token': process.env.BOT_SECRET!,
      },
    });

    console.log(response);

    const { data } = response;

    if (data.success === false) throw new Error(data.error);
  } catch (error: any) {
    console.log(error.message);
  }
};
export const modifyRepos = async (
  addedRepos: RepoSchemaType[],
  removedRepos: RepoSchemaType[]
) => {
  try {
    const endpoint = process.env.ADMIN_SERVER_URL + '/api/github';
    console.log(endpoint);
    const response = await axios.post(
      endpoint,
      {
        addedRepos,
        removedRepos,
      },
      {
        headers: {
          'x-bot-token': process.env.BOT_SECRET!,
        },
      }
    );
    console.log(response);

    // const { data } = response;

    // console.log(data);
  } catch (error: any) {
    console.error(error);
    // throw new Error(error.message);
  }
};

export const getOwnerId = async ({ id }: { id: number }) => {
  try {
    const endpoint = process.env.ADMIN_SERVER_URL + '/api/installation/' + id;
    const response = await axios.get(endpoint, {
      headers: {
        'x-bot-token': process.env.BOT_SECRET!,
      },
    });
    console.log(response.data);
    return response.data.addedById;
  } catch (error: any) {
    console.error(error);
  }
};
