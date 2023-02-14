// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { date: string; hash: string } | null;

async function getLatestCommitData(owner: string, repo: string) {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits`
  );
  const data = await response.json();

  if (data && data.length > 0) {
    const latestCommit = data[0];
    const latestCommitDate = latestCommit.commit.committer.date;
    const latestCommitHash = latestCommit.sha;

    return { date: latestCommitDate, hash: latestCommitHash };
  }

  return null;
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const commit = await getLatestCommitData("peterjskaltsis", "site");

  res.status(200).json({
    date: commit?.date,
    hash: commit?.hash,
  });
}
