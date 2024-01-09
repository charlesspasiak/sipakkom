import { Metadata } from 'next';

import { TambahDataGejala } from '@/components/ui/gejala/buttons';
import { lusitana } from '@/components/fonts';
import TableGejala from '@/components/ui/gejala/TableGejala';

export const metadata: Metadata = {
  title: 'Data Gejala',
};

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Data Gejala</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search invoices..." /> */}
        <TambahDataGejala />
      </div>
      <TableGejala />
    </div>
  );
}
