// import Pagination from '@/app/ui/invoices/pagination';
// import Search from '@/app/ui/search';
import { TambahDataKerusakan } from '@/components/ui/kerusakan/buttons';
// import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
// import { Suspense } from 'react';
// import { fetchInvoicesPages } from '@/app/lib/data';
import { lusitana } from '@/components/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Kerusakan',
};

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Data Kerusakan</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search invoices..." /> */}
        <TambahDataKerusakan />
      </div>
      {/* <Table /> */}
    </div>
  );
}
