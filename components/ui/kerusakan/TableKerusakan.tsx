import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fetchDataKerusakan } from '@/lib/data';

const TableKerusakan = async () => {
  const damages = await fetchDataKerusakan();
  return (
    <Table className='mt-6 flow-root'>
      <TableHeader>
        <TableRow>
          <TableHead className='w-36'>Kode Kerusakan</TableHead>
          <TableHead className='w-36'>Kerusakan</TableHead>
          <TableHead>Solusi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {damages.map((damage) => (
          <TableRow key={damage.id}>
            <TableCell className='text-center'>{damage.kdKerusakan}</TableCell>
            <TableCell>{damage.kerusakan}</TableCell>
            <TableCell>{damage.solusi}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableKerusakan;
