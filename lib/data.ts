import prismadb from '@/lib/prismadb';

export async function fetchDataKerusakan() {
  try {
    const damages = await prismadb.kerusakan.findMany({
      orderBy: {
        createdAt: 'desc',
      }
    });

    return damages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch data kerusakan');
  }
}

export async function fetchDataGejala() {
  try {
    const indications = await prismadb.gejala.findMany({
      orderBy: {
        kdGejala: 'asc',
      }
    });

    return indications;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch data gejala');
  }
}

export async function fetchRule() {
  try {
    const rules = await prismadb.rule.findMany({
      include: {
        gejala: true,
        kerusakan: true
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    return rules;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch rule');
  }
}