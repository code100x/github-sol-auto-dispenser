export const getGithubUsernamefromUserId = async (userId: string) => {
  try {
    const url = `https://api.github.com/user/${userId}`;
    const res = await fetch(url, {
      headers: {
        // Token is added so that github doesn't rate limit
        Authorization: 'token ' + process.env.GITHUB_PAT,
      },
    });
    const data = await res.json();

    if (!data.login) throw new Error('User not found.');

    return data.login as string;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const extractUserIdFromAvatarUrl = (url: string) => {
  const regex = /\/u\/(\d+)\?/;
  const match = regex.exec(url);
  const userId = match ? match[1] : null;
  return userId;
};
