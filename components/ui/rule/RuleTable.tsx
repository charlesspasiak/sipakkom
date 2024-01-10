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
  const kdGejala = rules.map((rule) => rule.gejala.map((g) => g.kdGejala));

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
        {rules.map((rule, index) => (
          <TableRow key={rule.id}>
            <TableCell className='text-center'>{rule.kdRule}</TableCell>
            <TableCell>{kdGejala[index].join(', ')}</TableCell>
            <TableCell>{rule.kerusakan.kerusakan}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableKerusakan;
