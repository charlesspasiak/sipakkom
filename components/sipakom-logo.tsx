import Image from 'next/image';
import { lemon } from '@/components/fonts';


const SipakomLogo = () => {
  return (
    <div className={`${lemon.className} flex flex-row items-center leading-none text-white`}>
      <Image src='/gear.png' alt='logo' width={25} height={25} className='object-contain mr-1' />
      <p className='text-xl'>SIPAK<span className='text-[#df2a50]'>KOM</span></p>
    </div>
  );
};
export default SipakomLogo;
