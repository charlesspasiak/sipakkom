import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fetchDataGejala } from '@/lib/data';

const TableGejala = async () => {
  const indications = await fetchDataGejala();
  return (
    <Table className='mt-6 flow-root'>
      <TableHeader>
        <TableRow>
          <TableHead className='w-36'>Kode Gejala</TableHead>
          <TableHead>Gejala</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {indications.map((indication) => (
          <TableRow key={indication.id}>
            <TableCell className='text-center'>{indication.kdGejala}</TableCell>
            <TableCell>{indication.gejala}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableGejala;
