import Link from 'next/link';
import NavLinks from '@/components/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import SipakomLogo from '../../sipakom-logo';
// import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="text-white flex h-full flex-col ">
      <Link
        className="max-md:mb-2 flex h-20 items-end justify-start bg-slate-800 p-4 md:border-b-2 border-slate-700"
        href="/"
      >
        <div className="w-32 md:w-40">
          <SipakomLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0">
        <NavLinks />
        <div className="hidden h-auto w-full grow bg-slate-800 md:block"></div>
        <form
          action={async () => {
            'use server';
            // await signOut();
          }}
        >
          <button className="md:border-t-2 border-slate-700 flex h-[48px] w-full grow items-center justify-center gap-2 bg-slate-800 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
