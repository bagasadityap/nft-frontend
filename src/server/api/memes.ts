'use server';

export async function getMemes() {
  const res = await fetch(`${process.env.APP_URL}/api/memes`, {
    cache: 'no-store',
  });

  const memes = await res.json();
  return memes;
}
