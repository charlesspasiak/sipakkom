import Diagnosa from '@/components/Diagnosa';
import { fetchRule } from '@/lib/data';

const Home = async () => {
  const rules = await fetchRule();
  const kdGejala = rules.map((rule) => rule.gejala.map((g) => g.kdGejala));

  return (
    <main className='bg-slate-800 flex justify-center items-center min-h-screen max-w-7xl mx-auto'>
      <Diagnosa rules={rules} />
    </main>
  );
};
export default Home;
