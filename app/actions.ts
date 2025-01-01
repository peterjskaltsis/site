'use server';

export type CommitData = { date: string; hash: string } | null;

export async function getLatestCommitData(): Promise<CommitData> {
  const response = await fetch(
    'https://api.github.com/repos/peterjskaltsis/site/commits',
    { next: { revalidate: 3600 } }, // Cache for 1 hour
  );

  const data = await response.json();

  if (data && data.length > 0) {
    const latestCommit = data[0];
    return {
      date: latestCommit.commit.committer.date,
      hash: latestCommit.sha,
    };
  }

  return null;
}
