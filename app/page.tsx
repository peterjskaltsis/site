import { getLatestCommitData } from '@/app/actions';
import { Content } from './content';

export default async function Home() {
  const commitData = await getLatestCommitData();
  return <Content commit={commitData} />;
}
