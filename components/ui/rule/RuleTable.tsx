import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fetchRule } from '@/lib/data';

const TableKerusakan = async () => {
  const rules = await fetchRule();
  const kdGejala = rules.flatMap((rule) => rule.gejala.map((g) => g.kdGejala)).join(', ');

  return (
    <Table className='mt-6 flow-root'>
      <TableHeader>
        <TableRow>
          <TableHead className='w-36'>Kode Rule</TableHead>
          <TableHead className='w-52'>Kode Gejala</TableHead>
          <TableHead>Kerusakan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rules.map((rule) => (
          <TableRow key={rule.id}>
            <TableCell className='text-center'>{rule.kdRule}</TableCell>
            <TableCell>{kdGejala}</TableCell>
            <TableCell>{rule.kerusakan.kerusakan}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableKerusakan;
