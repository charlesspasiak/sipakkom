import Diagnosa from '@/components/Diagnosa'
import { fetchRule } from '@/lib/data'

const Home = async () => {
  const rules = await fetchRule();
  const kdGejala = rules.map((rule) => rule.gejala.map((g) => g.kdGejala));
  
  return (
    <main className='bg-[#adf0ff] flex justify-center items-center min-h-screen'>
      <Diagnosa kdGejala={kdGejala} />
    </main>
  )
}
export default Home