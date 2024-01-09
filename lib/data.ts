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
        createdAt: 'desc',
      }
    });

    return indications;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch data gejala');
  }
}