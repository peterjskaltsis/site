// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import simpleGit, { DefaultLogFields, LogResult } from "simple-git";

type Data = Partial<DefaultLogFields> | null;

const git = simpleGit();

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const log = await git.log();
  const lastCommit = log.latest;

  res.status(200).json({
    date: lastCommit?.date,
    message: lastCommit?.message,
    hash: lastCommit?.hash,
  });
}
