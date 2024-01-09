import { Metadata } from 'next';

import { AddRule } from '@/components/ui/rule/buttons';
import { lusitana } from '@/components/fonts';
import RuleTable from '@/components/ui/rule/RuleTable';

export const metadata: Metadata = {
  title: 'Data Aturan',
};

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Data Aturan</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search invoices..." /> */}
        <AddRule />
      </div>
      <RuleTable />
    </div>
  );
}
